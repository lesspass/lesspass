import os
import shutil


def copy_certificates(certificates, destination='/etc/ssl', domain='example.org'):
    private_key_folder = os.path.join(destination, 'private')
    if not os.path.exists(private_key_folder):
        os.makedirs(private_key_folder)
    private_key = os.path.join(private_key_folder, domain + '.key')
    shutil.copy2(certificates['key'], private_key)
    os.chmod(private_key, 0o600)

    certificates_folder = os.path.join(destination, 'certs')
    if not os.path.exists(certificates_folder):
        os.makedirs(certificates_folder)
    certificate = os.path.join(certificates_folder, domain + '.crt')
    shutil.copy2(certificates['crt'], certificate)
    os.chmod(certificate, 0o644)
