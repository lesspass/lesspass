#!/bin/bash

echo "Usage: ./send_archive.sh [USER@HOSTNAME] [SSH_PORT]"

HOST="${1:-admin@lesspass.com}"
SSH_PORT="${2:-22}"

ssh -p $SSH_PORT $HOST 'mkdir -p ~/lesspass'
scp -P $SSH_PORT docker-compose.prod.yml "$HOST":~/
scp -P $SSH_PORT deploy.sh "$HOST":~/lesspass
scp -P $SSH_PORT backup_db.sh "$HOST":~/backups
scp -P $SSH_PORT restore_db.sh "$HOST":~/backups
ssh -p $SSH_PORT $HOST 'mv docker-compose.prod.yml ~/lesspass/docker-compose.yml'
