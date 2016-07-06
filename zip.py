import os
import shutil


def get_version():
    with open('package.json') as f:
        for line in f.readlines():
            if '"version":' in line:
                return line.split('"')[-2]


windows_folder = 'LessPass-win32-x64'
output_filename = 'LessPass-v%s.win32-x64' % get_version()
if os.path.exists(windows_folder):
    print('zip %s into %s.zip file' % (windows_folder, output_filename))
    shutil.make_archive(output_filename, 'zip', windows_folder)
    print('remove %s folder' % windows_folder)
    shutil.rmtree(windows_folder)

build_folder = 'build'
if os.path.exists(build_folder):
    shutil.rmtree(build_folder)
os.makedirs(build_folder)

zip_name = '%s.zip' % output_filename
print('move %s into build folder' % zip_name)
shutil.move(zip_name, os.path.join(build_folder, zip_name))
