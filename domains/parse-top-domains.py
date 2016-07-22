# top-1m.csv get from https://support.alexa.com/hc/en-us/articles/200461990-Can-I-get-a-list-of-top-sites-from-an-API-
import json
import os


def get_domains():
    domains = ['lesspass.com']
    counter = {}
    with open('top-1m.csv') as source:
        for line in source.readlines():
            line = line.strip()
            ext = line.split('.')[-1]
            if ext in ['com', 'fr', 'org', 'net', 'eu']:
                counter[ext] = counter.get(ext, 0) + 1
                if ext in ['com', 'fr'] and counter[ext] < 200 or counter[ext] < 100:
                    domains.append(line.split(',')[-1])
    return domains


def get_blacklist_domains():
    blacklist_domains = []
    with open('blacklist.txt') as source:
        for line in source.readlines():
            line = line.strip()
            if line and not line.startswith('#'):
                blacklist_domains.append(line.split()[1])
    return blacklist_domains


def save_good_domains_in_json(domains, blacklist_domains):
    with open('domains.json', 'w') as destination:
        destination.write(json.dumps([x for x in domains if x not in blacklist_domains]))


if os.path.exists('top-1m.csv'):
    save_good_domains_in_json(get_domains(), get_blacklist_domains())
else:
    print('need top-1m.csv get from '
          'https://support.alexa.com/hc/en-us/articles/200461990-Can-I-get-a-list-of-top-sites-from-an-API-')
