#!/bin/bash
# create a db backups to backups/

source bin/env.sh

BACKUP_FILE=django$1_$(date +'%Y_%m_%dT%H_%M_%S').bak
dcprod -f docker-compose.db.yml run --rm dbclient bash -c 'pg_dump -Fc -h db -U $MYSQL_USER -d $MYSQL_DATABASE -f /backups/'"$BACKUP_FILE"
echo "backup $BACKUP_FILE created"
