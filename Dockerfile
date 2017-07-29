FROM nginx:stable-alpine

RUN apk update && apk add \
    python3 \
    openssl \
    && pip3 install --upgrade pip \
    && rm -rf /var/cache/apk/*

RUN pip3 install Jinja2==2.8

RUN rm /etc/nginx/nginx.conf
RUN rm /etc/nginx/mime.types
COPY conf.d/nginx.conf /etc/nginx/nginx.conf
COPY conf.d/mime.types /etc/nginx/mime.types

RUN rm /etc/nginx/conf.d/default.conf

COPY backend.conf.j2 /
COPY install.py /

COPY entrypoint.sh /
RUN chmod 755 /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]