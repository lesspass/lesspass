import os
import shutil
import fnmatch

from jinja2 import Template


def pattern_filter(file, patterns=None):
    if patterns is None:
        return True

    for p in patterns:
        if fnmatch.fnmatch(file, p):
            return True

    return False


def find(paths, patterns=None):
    certificates = []
    for root, dirs, files in os.walk(paths):
        for file in files:
            if pattern_filter(file, patterns.split(',')):
                certificates.append({'path': os.path.normpath(os.path.join(root, file))})
    return certificates


def copy(source, destination, basename=None, mode='0755'):
    if not os.path.exists(destination):
        os.makedirs(destination)

    shutil.copy2(src=source, dst=destination)

    file_path = os.path.join(destination, os.path.basename(source))
    os.chmod(file_path, int(mode, 8))

    if basename:
        os.rename(file_path, os.path.join(destination, basename))


def template(source, context, destination):
    jinja_template = Template(open(source).read())
    with open(destination, 'w') as f:
        f.write(jinja_template.render(context))
