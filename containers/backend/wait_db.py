#!/usr/bin/env python
import socket
import time
import os

host = os.environ.get('DATABASE_HOST', 'db')
port = int(os.environ.get('DATABASE_PORT', '5432'))

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
timeout = 15
while timeout != 0:
    try:
        s.connect((host, port))
        s.close()
        break
    except socket.error as ex:
        timeout -= 1
        print('wait for db to start... (%s sec remaining)' % timeout)
    time.sleep(1)
