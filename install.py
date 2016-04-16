import os

import subprocess

from dockersible.files import copy, template


def get_ssl_context(environ):
    domain = environ['domain']
    nginx_info = {
        'domain': domain,
        'dhparam': False,
        'ssl_trusted_certificate': False
    }

    dhparam = os.path.join('/certificates', domain + '.dhparam.pem')
    if os.path.exists(dhparam):
        nginx_info['dhparam'] = True
        copy(source=dhparam, destination='/etc/ssl/certs', basename='dhparam.pem', mode='0644')

    trusted_certificates = os.path.join('/certificates', domain + '.ca.crt')
    if os.path.exists(trusted_certificates):
        nginx_info['ssl_trusted_certificate'] = True
        copy(source=trusted_certificates, destination='/etc/ssl/certs', basename='ca.crt', mode='0644')

    return nginx_info


def get_certificates(domain):
    private_key = os.path.join('/certificates', domain + '.key')
    certificate = os.path.join('/certificates', domain + '.crt')
    if not os.path.exists(private_key) or not os.path.exists(certificate):
        cmd = """openssl req \
            -new \
            -newkey rsa:4096 \
            -days 365 \
            -nodes \
            -x509 \
            -subj "/C=US/ST=State/L=City/O=Company/CN={}" \
            -keyout {} \
            -out {}""".format(domain, private_key, certificate)
        subprocess.call(cmd, shell=True)
    return private_key, certificate


if __name__ == "__main__":
    pk, crt = get_certificates(os.environ['domain'])
    copy(source=pk, destination='/etc/ssl/private', basename='private.key', mode='0600')
    copy(source=crt, destination='/etc/ssl/certs', basename='certificate.crt', mode='0644')

    template('/backend.conf.j2', get_ssl_context(os.environ), '/etc/nginx/conf.d/backend.conf')
