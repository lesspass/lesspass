import setuptools

from lesspass.version import __version__
from lesspass.help import get_long_help


setuptools.setup(
    name='lesspass',
    version=__version__,
    packages=['lesspass'],
    author='Guillaume Vincent',
    author_email='contact@lesspass.com',
    description='LessPass stateless password generator',
    long_description=get_long_help(),
    install_requires=[],
    entry_points="""
        [console_scripts]
        lesspass=lesspass.core:main
    """,
    url='https://github.com/lesspass/lesspass',
    license='GPL-3.0',
    classifiers=[
        "Programming Language :: Python",
        "License :: OSI Approved :: GNU General Public License v3 (GPLv3)",
        "Operating System :: OS Independent",
    ],
)
