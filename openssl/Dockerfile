FROM nginx:stable-alpine

RUN apk update && apk add \
    openssl \
    && rm -rf /var/cache/apk/*

CMD openssl