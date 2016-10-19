#!/bin/bash
if [ -z $1 ]; then
    echo "No dump provided. Usage: $0 201..._lesspass_db.sql"
    exit 1
fi

DUMP_FILENAME=$1

docker cp $DUMP_FILENAME lesspass_db_1:$DUMP_FILENAME
docker exec -it lesspass_db_1 sh -c 'PGPASSWORD=$POSTGRES_PASSWORD dropdb -U $POSTGRES_USER $POSTGRES_DB'
docker exec -it lesspass_db_1 sh -c 'PGPASSWORD=$POSTGRES_PASSWORD createdb -U $POSTGRES_USER $POSTGRES_DB'
docker exec -it lesspass_db_1 sh -c 'PGPASSWORD=$POSTGRES_PASSWORD psql -U $POSTGRES_USER -h localhost -p 5432 < '$DUMP_FILENAME''
docker exec -it lesspass_db_1 rm $DUMP_FILENAME
