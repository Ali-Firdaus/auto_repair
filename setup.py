from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in auto_repair/__init__.py
from auto_repair import __version__ as version

setup(
	name="auto_repair",
	version=version,
	description="auto repair front end app",
	author="SIC",
	author_email="firdaus.ali.nita@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
