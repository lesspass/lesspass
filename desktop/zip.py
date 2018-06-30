import os
import shutil


def get_version():
    with open('package.json') as f:
        for line in f.readlines():
            if '"version":' in line:
                return line.split('"')[-2]


def zip_folder(folder, name, format='zip'):
    print('zip %s into %s compressed file' % (folder, name))
    shutil.make_archive(name, format, '.', folder)
    print('remove %s folder' % folder)
    shutil.rmtree(folder)


def move(zip_name):
    print('move %s into build folder' % zip_name)
    shutil.move(zip_name, os.path.join(build_folder, zip_name))


build_folder = 'build'
if os.path.exists(build_folder):
    shutil.rmtree(build_folder)
os.makedirs(build_folder)

# windows
windows_folder = 'LessPass-win32-x64'
if os.path.exists(windows_folder):
    basename = 'LessPass-v%s.win32-x64' % get_version()
    filename = '%s.zip' % basename
    zip_folder(windows_folder, basename, 'zip')
    move(filename)

# linux
linux_folder = 'LessPass-linux-x64'
if os.path.exists(linux_folder):
    basename = 'LessPass-v%s.linux-x64' % get_version()
    filename = '%s.tar.gz' % basename
    zip_folder(linux_folder, basename, 'gztar')
    move(filename)
