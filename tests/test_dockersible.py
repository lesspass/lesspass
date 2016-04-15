import os
import shutil
import tempfile
import unittest

from dockersible.ssl import copy_certificates
from dockersible.files import find, copy, template


class DockersibleTestCase(unittest.TestCase):
    def test_find(self):
        parent_directory = os.path.dirname(os.path.realpath(__file__))
        ssl_directory = os.path.join(parent_directory, 'ssl')
        certificates = find(paths=ssl_directory, patterns='*.key,*.crt')
        for certificate in certificates:
            expected_path = [os.path.join(ssl_directory, 'test.key'), os.path.join(ssl_directory, 'test.crt')]
            self.assertTrue(certificate['path'] in expected_path)

    def test_copy_certificates(self):
        temp_folder = tempfile.mkdtemp()
        private_key_origin = os.path.join(temp_folder, 'test.key')
        with open(private_key_origin, 'w') as f: f.write('')
        certificate_origin = os.path.join(temp_folder, 'test.crt')
        with open(certificate_origin, 'w') as f: f.write('')
        certificates = {
            'key': private_key_origin,
            'crt': certificate_origin,
        }
        copy_certificates(certificates, temp_folder, 'oslab.fr')
        private_key = os.path.join(temp_folder, 'private', 'oslab.fr.key')
        self.assertTrue(os.path.exists(private_key))
        self.assertTrue((os.stat(private_key).st_mode & 0o777) == 0o600)
        self.assertTrue(os.path.exists(private_key_origin))

        certificate = os.path.join(temp_folder, 'certs', 'oslab.fr.crt')
        self.assertTrue(os.path.exists(certificate))
        self.assertTrue((os.stat(certificate).st_mode & 0o777) == 0o644)
        self.assertTrue(os.path.exists(certificate_origin))
        shutil.rmtree(temp_folder)

    def test_copy_file(self):
        private_key_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'ssl', 'test.key')
        destination = tempfile.mkdtemp()
        copy(source=private_key_path, destination=destination)
        self.assertTrue(os.path.exists(os.path.join(destination, 'test.key')))
        shutil.rmtree(destination)

    def test_copy_file_change_basename(self):
        private_key_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'ssl', 'test.key')
        destination = tempfile.mkdtemp()
        copy(source=private_key_path, destination=destination, basename='lesspass.com.key', mode='0600')
        self.assertTrue(os.path.exists(os.path.join(destination, 'lesspass.com.key')))
        shutil.rmtree(destination)

    def test_copy_file_change_mode(self):
        private_key_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'ssl', 'test.key')
        destination = tempfile.mkdtemp()

        copy(source=private_key_path, destination=destination)
        expected_private_key_path = os.path.join(destination, 'test.key')
        self.assertTrue((os.stat(expected_private_key_path).st_mode & 0o777) == 0o755)

        copy(source=private_key_path, destination=destination, basename='lesspass.com.key', mode='0600')
        expected_private_key_path = os.path.join(destination, 'lesspass.com.key')
        self.assertTrue((os.stat(expected_private_key_path).st_mode & 0o777) == 0o600)

        shutil.rmtree(destination)

    def test_template_module_with_source_file(self):
        template_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'templates', 'test.j2')
        destination = tempfile.mkdtemp()
        context = {
            'dhparam': True,
            'dhparam_path': '/etc/ssl/certs/dhparam.pem'
        }
        destination_file = os.path.join(destination, 'test.txt')

        template(source=template_path, context=context, destination=destination_file)

        self.assertEqual('\nssl_dhparam /etc/ssl/certs/dhparam.pem;\n', open(destination_file).read())
        shutil.rmtree(destination)


if __name__ == '__main__':
    unittest.main()
