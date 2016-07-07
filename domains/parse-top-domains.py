# https://support.alexa.com/hc/en-us/articles/200461990-Can-I-get-a-list-of-top-sites-from-an-API-
counter = {}
with open('source.csv') as source, open('destination.csv', 'w') as destination:
    destination.write('[')
    for line in source.readlines():
        line = line.strip()
        ext = line.split('.')[-1]
        if ext in ['com', 'fr', 'org', 'net', 'eu']:
            counter[ext] = counter.get(ext, 0) + 1
            if ext == 'com' and counter[ext] < 200 or counter[ext] < 100:
                destination.write('"%s",' % line.split(',')[-1])
    destination.write(']')
