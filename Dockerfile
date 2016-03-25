FROM nginx:1.8

RUN rm /etc/nginx/nginx.conf
RUN rm /etc/nginx/mime.types
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types

RUN rm /etc/nginx/conf.d/default.conf
COPY conf.d /etc/nginx/conf.d/

COPY ssl/lesspass.com.crt /etc/ssl/certs/lesspass.com.crt
COPY ssl/lesspass.com.key /etc/ssl/private/lesspass.com.key
COPY ssl/dhparam.pem /etc/ssl/certs/dhparam.pem
COPY ssl/AddTrustExternalCARoot.crt /etc/ssl/certs/AddTrustExternalCARoot.crt