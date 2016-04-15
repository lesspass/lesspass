import os

import subprocess

from dockersible.files import copy, template


def copy_certificates():
    copy(source=(os.path.join('/certificates', os.environ['private_key'])),
         destination='/etc/ssl/private',
         basename='private.key',
         mode='0600')
    copy(source=os.path.join('/certificates', os.environ['certificate']),
         destination='/etc/ssl/certs',
         basename='certificate.crt',
         mode='0644')
    context = {
        'server_name': os.environ['server_name'],
        'dhparam': False,
        'ssl_trusted_certificate': False
    }
    cert_folder = os.path.join('/etc/ssl/certs')
    if 'dhparam' in os.environ:
        dhparam = os.environ['dhparam']
        copy(source=os.path.join('/certificates', dhparam), destination=cert_folder, mode='0644')
        context['dhparam'] = True
        context['dhparam_path'] = os.path.join(cert_folder, dhparam)
    if 'certificate' in os.environ:
        certificate = os.environ['ssl_trusted_certificate']
        copy(source=os.path.join('/certificates', certificate), destination=cert_folder, mode='0644')
        context['ssl_trusted_certificate'] = True
        context['ssl_trusted_certificate_path'] = os.path.join(cert_folder, certificate)
    return context


def create_certificates():
    cmd = """openssl req \
        -new \
        -newkey rsa:4096 \
        -days 365 \
        -nodes \
        -x509 \
        -subj "/C=US/ST=State/L=City/O=Company/CN=%s" \
        -keyout /etc/ssl/private/private.key \
        -out /etc/ssl/certs/certificate.crt""".format(os.environ['domain'])
    subprocess.call(cmd, shell=True)
    return {
        'server_name': os.environ['server_name'],
        'dhparam': False,
        'ssl_trusted_certificate': False
    }


if __name__ == "__main__":
    if 'private_key' in os.environ and 'certificate' in os.environ:
        context = copy_certificates()
    else:
        context = create_certificates()
    template('/backend.conf.j2', context, '/etc/nginx/conf.d/backend.conf')
