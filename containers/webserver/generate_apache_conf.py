import os

from jinja2 import Template


if __name__ == "__main__":
    fqdn = os.environ.get("FQDN", "localhost")
    context = {
        "FQDN": fqdn,
        "SSL_CERTIFICATE_FILE": "/etc/httpd/ssl/%s.crt" % fqdn,
        "SSL_CERTIFICATE_KEY_FILE": "/etc/httpd/ssl/private/%s.key" % fqdn,
        "DEBUG": os.environ.get("DEBUG", "0") == "1",
    }

    print(context)
    jinja_template = Template(open("/webserver/lesspass.conf.j2").read())
    with open("/etc/httpd/conf.d/lesspass.conf", "w") as f:
        f.write(jinja_template.render(context))
