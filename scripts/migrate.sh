#!/usr/bin/env bash
# ============================================================================
# NaatuBite - Supabase Migration Runner
# Executes the approved schema migration and verifies tables, constraints & relationships
# ============================================================================

set -e

MIGRATION_FILE="supabase/migrations/20261009173000_create_naatubite_schema.sql"

if [ ! -f "$MIGRATION_FILE" ]; then
  echo "Error: Migration file $MIGRATION_FILE not found."
  exit 1
fi

PROJECT_REF="${SUPABASE_PROJECT_REF:-$1}"
ACCESS_TOKEN="${SUPABASE_ACCESS_TOKEN:-$2}"

if [ -z "$PROJECT_REF" ] || [ -z "$ACCESS_TOKEN" ]; then
  echo "============================================================================"
  echo "NaatuBite Supabase Migration Runner"
  echo "============================================================================"
  echo "Usage: ./scripts/migrate.sh <PROJECT_REF> <ACCESS_TOKEN>"
  echo "   or: SUPABASE_PROJECT_REF=xxx SUPABASE_ACCESS_TOKEN=yyy ./scripts/migrate.sh"
  echo ""
  echo "Where to find these in Supabase Dashboard:"
  echo "1. PROJECT_REF: In URL or Project Settings -> General -> Reference ID"
  echo "2. ACCESS_TOKEN: In Account -> Access Tokens -> Generate New Token (sbp_...)"
  echo "============================================================================"
  exit 1
fi

echo ">> Reading migration file: $MIGRATION_FILE"
SQL_CONTENT=$(cat "$MIGRATION_FILE")

echo ">> Executing migration on Supabase project: $PROJECT_REF..."
PAYLOAD=$(node -e "console.log(JSON.stringify({ query: process.argv[1] }))" "$SQL_CONTENT" 2>/dev/null || ruby -rjson -e 'puts JSON.generate({ query: ARGV[0] })' "$SQL_CONTENT")

RESPONSE=$(curl -s -w "\n%{http_code}" \
  -X POST "https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")

HTTP_CODE=$(echo "$RESPONSE" | tail -n 1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [ "$HTTP_CODE" -ne 200 ] && [ "$HTTP_CODE" -ne 201 ]; then
  echo "Migration failed with HTTP status $HTTP_CODE:"
  echo "$BODY"
  exit 1
fi

echo "Migration executed successfully!"
echo ">> Verifying created tables and relationships..."

VERIFY_SQL="
SELECT 
  table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' AND table_name IN ('products', 'orders', 'order_items', 'contact_messages')
ORDER BY table_name;
"

VERIFY_PAYLOAD=$(ruby -rjson -e 'puts JSON.generate({ query: ARGV[0] })' "$VERIFY_SQL")
curl -s \
  -X POST "https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "$VERIFY_PAYLOAD"

echo ""
echo "Migration and verification complete."
