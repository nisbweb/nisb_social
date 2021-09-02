#!/bin/bash
rm -r public 2> /dev/null
rm .env 2> /dev/null
for value in API_KEY AUTH_DOMAIN PROJECT_ID STORAGE_BUCKET MESSAGING_SENDER_ID APP_ID MEASUREMENT_ID
do
  echo $value imported
  printf '%s\n' "$value=\"${!value}\"" >>.env
done
