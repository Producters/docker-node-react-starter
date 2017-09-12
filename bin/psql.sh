#!/bin/bash
# open psql session to production db

source bin/env.sh

dcprod -f docker-compose.db.yml run --rm dbclient bash -c 'psql -h db -U $MYSQL_USER $MYSQL_DATABASE'
