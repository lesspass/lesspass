# LessPass containers

### requirements 

 * `docker`
 * `docker-compose`

### install 

simply run 

    bash <(curl -s https://raw.githubusercontent.com/lesspass/lesspass/master/containers/install-lesspass.sh) [DOMAIN] [EMAIL]

`[DOMAIN]` and `[EMAIL]` are used to generate a LetsEncrypt certificate and configure LessPass.

### create super user

Go into the backend container and create a super user

```
docker exec -it lesspass_backend_1 sh
python manage.py createsuperuser
```

Now you can access and manage users and password profiles on `https://[DOMAIN]/admin`


### configure email

You can edit `.env` file to use your own email server (in order to reset the password for example)

```
DEFAULT_FROM_EMAIL="LessPass" <admin@example.org>
EMAIL_HOST=...
EMAIL_HOST_USER=...
EMAIL_HOST_PASSWORD=...
EMAIL_PORT=...
EMAIL_USE_TLS=1
```

## License

This project is licensed under the terms of the GNU GPLv3.

## Contributors :heart:

This project exists thanks to all the people who contribute. [[Contribute]](CONTRIBUTING.md).
<a href="https://github.com/lesspass/lesspass/graphs/contributors"><img src="https://opencollective.com/lesspass/contributors.svg?width=890" /></a>
