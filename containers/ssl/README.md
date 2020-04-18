openssl req -x509 -nodes -new -sha256 -days 1024 -newkey rsa:2048 -keyout RootCA.key -out RootCA.pem -subj "/C=US/CN=Root-CA"
openssl x509 -outform pem -in RootCA.pem -out RootCA.crt
openssl req -new -nodes -newkey rsa:2048 -keyout lesspass.key -out lesspass.csr -subj "/C=FR/ST=Gironde/L=Bordeaux/O=LessPass/CN=lesspass.local"
openssl x509 -req -sha256 -days 1024 -in lesspass.csr -CA RootCA.pem -CAkey RootCA.key -CAcreateserial -extfile domains.ext -out lesspass.crt