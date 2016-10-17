#!/bin/bash

echo "Usage: ./send_archive.sh [USER@HOSTNAME] [SSH_PORT]"

HOST="${1:-admin@lesspass.com}"
SSH_PORT="${2:-22}"

ssh -p $SSH_PORT $HOST 'mkdir -p ~/lesspass'
scp -P $SSH_PORT docker-compose.prod.yml "$HOST":~/
scp -P $SSH_PORT deploy.sh "$HOST":~/lesspass
ssh -p $SSH_PORT $HOST 'mv docker-compose.prod.yml ~/lesspass/docker-compose.yml'
