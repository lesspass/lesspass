import os

from jinja2 import Template


if __name__ == "__main__":
    context = {
        'domain': os.environ['DOMAIN']
    }
    jinja_template = Template(open('/backend.conf.j2').read())
    with open('/etc/nginx/conf.d/default.conf', 'w') as f:
        f.write(jinja_template.render(context))
