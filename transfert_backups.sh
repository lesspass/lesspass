#!/usr/bin/env bash
NOW=$1
scp admin@45.32.157.221:/home/admin/backups/"$NOW"_lesspass_db.sql .
scp "$NOW"_lesspass_db.sql admin@107.191.47.38:~/backups/
rm "$NOW"_lesspass_db.sql
