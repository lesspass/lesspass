#!/usr/bin/env bash
# This script will create a custom Certificate Authority (CA) and End Entity (EE) certificates.
# 
# for local development this should be fine and you can ignore certificate trust errors related to
# an untrusted root. For public facing access, you can submit the generated lesspass.csr to a trusted
# ca so that they can provide you with a trusted certificate to replace this development certificate.

CA_CRT_SUBJ="${CA_CRT_SUBJ:-/C=US/CN=Root-CA}"
CA_KEY_TYPE="${CA_KEY_TYPE:-rsa:2048}"
EE_CRT_SUBJ="${EE_CRT_SUBJ:-/C=FR/ST=Gironde/L=Bordeaux/O=LessPass/CN=lesspass.local}"
EE_KEY_TYPE="${EE_KEY_TYPE:-${CA_KEY_TYPE}}"

openssl req -x509 -nodes -new -sha256 -days 1024 -newkey "$CA_KEY_TYPE" -keyout RootCA.key -out RootCA.pem -subj "$CA_CRT_SUBJ"
openssl x509 -outform pem -in RootCA.pem -out RootCA.crt
openssl req -new -nodes -newkey "$EE_KEY_TYPE" -keyout lesspass.key -out lesspass.csr -subj "$EE_CRT_SUBJ"
openssl x509 -req -sha256 -days 1024 -in lesspass.csr -CA RootCA.pem -CAkey RootCA.key -CAcreateserial -extfile domains.ext -out lesspass.crt

openssl verify -verbose -CAfile RootCA.crt RootCA.crt lesspass.crt
