#!/bin/bash
# open mysql session to production db

source bin/env.sh

dcprod -f docker-compose.db.yml run --rm dbclient bash -c 'mysql --user $MYSQL_USER --password $MYSQL_PASSWORD $MYSQL_DATABASE'
