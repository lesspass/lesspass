# LessPass nginx

nginx container for lesspass

## custom SSL certificate

change domain name in `docker-compose.yml` file

replace YOUR_DOMAIN_NAME

    .....
        ports:
         - "8080:8080"
      nginx:
        restart: always
        build: ./nginx
        ports:
          - "80:80"
          - "443:443"
        environment:
          - domain=YOUR_DOMAIN_NAME
        volumes:
          - ./nginx/ssl:/certificates
        volumes_from:
          - backend
        links:
          - backend
          - frontend
    .....

copy your private key to `ssl/YOUR_DOMAIN_NAME.key`
copy your certificate to `ssl/YOUR_DOMAIN_NAME.crt`

if you have extra certificate authorities, copy the file to `ssl/YOUR_DOMAIN_NAME.ca.crt`
if you have a DH parameter file, copy the file to `ssl/YOUR_DOMAIN_NAME.dhparam.pem`


Example if your domain is `lesspass.com`

    ls ssl/
    lesspass.com.ca.crt  lesspass.com.crt  lesspass.com.dhparam.pem  lesspass.com.key

see [lesspass](https://github.com/lesspass/lesspass) project