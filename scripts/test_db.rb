#!/usr/bin/env ruby
# ============================================================================
# NaatuBite - Supabase Database Connectivity Test Runner
# Verifies:
# 1. Supabase client / REST API reachability
# 2. Read from required table (products)
# 3. Insert temporary test data (contact_messages)
# 4. Update test data
# 5. Delete test data (cleanup verification)
# 6. Error handling and constraint enforcement
# ============================================================================

require 'net/http'
require 'uri'
require 'json'

def parse_env_file(filepath)
  env = {}
  return env unless File.exist?(filepath)
  File.readlines(filepath).each do |line|
    line = line.strip
    next if line.empty? || line.start_with?('#')
    parts = line.split('=', 2)
    env[parts[0].strip] = parts[1].strip if parts.length == 2
  end
  env
end

def parse_env_js(filepath)
  env = {}
  return env unless File.exist?(filepath)
  content = File.read(filepath)
  if content =~ /SUPABASE_URL\s*:\s*["']([^"']+)["']/
    env['SUPABASE_URL'] = $1
  end
  if content =~ /SUPABASE_ANON_KEY\s*:\s*["']([^"']+)["']/
    env['SUPABASE_ANON_KEY'] = $1
  end
  env
end

# Load config
env_file = parse_env_file('.env')
env_js = parse_env_js('env.js')

url = ENV['SUPABASE_URL'] || env_file['SUPABASE_URL'] || env_js['SUPABASE_URL']
key = ENV['SUPABASE_ANON_KEY'] || env_file['SUPABASE_ANON_KEY'] || env_js['SUPABASE_ANON_KEY']

puts "======================================================================"
puts "  NaatuBite - Database Connectivity Test Suite"
puts "======================================================================"
puts "Supabase URL: #{url || '(none)'}"
puts "Anon Key:     #{key ? key[0..15] + '...' : '(none)'}"
puts "======================================================================"

if url.nil? || url.empty? || key.nil? || key.empty?
  puts "❌ ERROR: Supabase URL or Anon Key is missing. Configure .env or env.js."
  exit 1
end

passed = 0
failed = 0

def http_req(url_str, method, key, body = nil, headers = {})
  uri = URI.parse(url_str)
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = (uri.scheme == 'https')
  http.open_timeout = 8
  http.read_timeout = 8

  req = case method.to_s.upcase
        when 'GET' then Net::HTTP::Get.new(uri.request_uri)
        when 'POST' then Net::HTTP::Post.new(uri.request_uri)
        when 'PATCH' then Net::HTTP::Patch.new(uri.request_uri)
        when 'DELETE' then Net::HTTP::Delete.new(uri.request_uri)
        end

  req['apikey'] = key
  req['Authorization'] = "Bearer #{key}"
  req['Content-Type'] = 'application/json'
  headers.each { |k, v| req[k] = v }
  req.body = body.is_a?(Hash) || body.is_a?(Array) ? JSON.generate(body) : body if body

  http.request(req)
rescue => e
  OpenStruct.new(code: '0', body: e.message, exception: e)
end

require 'ostruct' unless defined?(OpenStruct)

# TEST 1: Supabase Initialization / REST reachability
print "TEST 1: Supabase Client / API Initialization... "
res1 = http_req("#{url}/rest/v1/", 'GET', key)
if res1.code.to_i >= 200 && res1.code.to_i < 400
  puts "✅ PASS (HTTP #{res1.code})"
  passed += 1
else
  puts "❌ FAIL (HTTP #{res1.code}: #{res1.body})"
  failed += 1
  puts "Aborting subsequent tests as client cannot connect to host."
  exit 1
end

# TEST 2: Read from required table (products)
print "TEST 2: Read from 'products' table... "
res2 = http_req("#{url}/rest/v1/products?select=id,name,price,category&limit=5", 'GET', key)
if res2.code.to_i == 200
  data = JSON.parse(res2.body) rescue []
  puts "✅ PASS (Found #{data.length} products)"
  data.each { |p| puts "        - [#{p['id']}] #{p['name']} (₹#{p['price']})" }
  passed += 1
else
  puts "❌ FAIL (HTTP #{res2.code}: #{res2.body})"
  failed += 1
end

# TEST 3: Insert test data into contact_messages
print "TEST 3: Insert test data into 'contact_messages'... "
test_payload = {
  name: "Automated Test Runner",
  phone: "9999999999",
  email: "test.automated@naatubite.local",
  subject: "Connectivity Verification",
  message: "__TEMP_CONNECTIVITY_TEST__"
}
res3 = http_req("#{url}/rest/v1/contact_messages", 'POST', key, [test_payload], { 'Prefer' => 'return=representation' })
test_id = nil
if res3.code.to_i == 201 || res3.code.to_i == 200
  inserted = JSON.parse(res3.body) rescue []
  test_id = inserted.first['id'] if inserted.first
  puts "✅ PASS (Inserted row ID: #{test_id})"
  passed += 1
else
  puts "❌ FAIL (HTTP #{res3.code}: #{res3.body})"
  failed += 1
end

# TEST 4: Update test data
print "TEST 4: Update test data (row ID: #{test_id || 'none'})... "
if test_id
  res4 = http_req("#{url}/rest/v1/contact_messages?id=eq.#{test_id}", 'PATCH', key, { is_resolved: true }, { 'Prefer' => 'return=representation' })
  if res4.code.to_i == 200 || res4.code.to_i == 204
    puts "✅ PASS (Updated is_resolved = true)"
    passed += 1
  else
    puts "❌ FAIL (HTTP #{res4.code}: #{res4.body})"
    failed += 1
  end
else
  puts "⚠️  SKIPPED (No test ID from step 3)"
  failed += 1
end

# TEST 5: Delete test data (Cleanup)
print "TEST 5: Delete test data & verify cleanup... "
if test_id
  res5 = http_req("#{url}/rest/v1/contact_messages?id=eq.#{test_id}", 'DELETE', key)
  # Verify row is gone
  res5_check = http_req("#{url}/rest/v1/contact_messages?id=eq.#{test_id}", 'GET', key)
  check_data = JSON.parse(res5_check.body) rescue []
  if (res5.code.to_i == 200 || res5.code.to_i == 204) && check_data.empty?
    puts "✅ PASS (Deleted and confirmed 0 lingering test rows)"
    passed += 1
  else
    puts "❌ FAIL (Row still exists or HTTP #{res5.code})"
    failed += 1
  end
else
  puts "⚠️  SKIPPED"
  failed += 1
end

# TEST 6: Error handling & constraint enforcement
print "TEST 6: Error handling (violating CHECK price < 200)... "
invalid_product = [{
  id: "__test_invalid_price__",
  name: "Overpriced Test Item",
  category: "snacks",
  category_label: "Snack",
  weight: "100g",
  price: 999.00, # Violates check (price < 200)
  original_price: 1000.00,
  image_url: "none.jpg",
  alt_text: "none",
  description: "none",
  ingredients: "none",
  shelf_life: "none"
}]
res6 = http_req("#{url}/rest/v1/products", 'POST', key, invalid_product)
if res6.code.to_i == 400 || res6.code.to_i == 403 || res6.code.to_i == 422
  err_msg = JSON.parse(res6.body)['message'] rescue res6.body
  puts "✅ PASS (Properly rejected with HTTP #{res6.code}: #{err_msg[0..60]}...)"
  passed += 1
else
  puts "❌ FAIL (Expected error but received HTTP #{res6.code}: #{res6.body})"
  # Cleanup if it somehow was inserted
  http_req("#{url}/rest/v1/products?id=eq.__test_invalid_price__", 'DELETE', key)
  failed += 1
end

puts "======================================================================"
puts "SUMMARY: #{passed} Passed, #{failed} Failed."
puts "======================================================================"
exit(failed == 0 ? 0 : 1)
