import setuptools
from os import path

from lesspass.version import __version__

this_directory = path.abspath(path.dirname(__file__))
with open(path.join(this_directory, "README.md"), encoding="utf-8") as f:
    long_description = f.read()

setuptools.setup(
    name="lesspass",
    version=__version__,
    packages=["lesspass"],
    author="Guillaume Vincent",
    author_email="contact@lesspass.com",
    description="LessPass stateless password generator",
    long_description=long_description,
    long_description_content_type="text/markdown",
    install_requires=["requests"],
    entry_points="""
        [console_scripts]
        lesspass=lesspass.core:main
    """,
    url="https://github.com/lesspass/lesspass",
    license="GPL-3.0",
    classifiers=[
        "Programming Language :: Python",
        "License :: OSI Approved :: GNU General Public License v3 (GPLv3)",
        "Operating System :: OS Independent",
    ],
)
