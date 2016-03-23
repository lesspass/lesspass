FROM nginx:1.8

RUN rm /etc/nginx/nginx.conf
RUN rm /etc/nginx/mime.types
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types

RUN rm /etc/nginx/conf.d/default.conf
COPY conf.d /etc/nginx/conf.d/
