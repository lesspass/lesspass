FROM python:3.6

LABEL name="LessPass Backend" 
LABEL maintainer="LessPass <contact@lesspass.com>"

RUN mkdir /opt/app
WORKDIR /opt/app
RUN python -m venv /opt/app/venv
COPY requirements.txt /opt/app/
RUN /opt/app/venv/bin/python -m pip install --upgrade pip  && \
    /opt/app/venv/bin/python -m pip install -r requirements.txt

COPY . /opt/app/

ENTRYPOINT ["/opt/app/entrypoint.sh"]

CMD ["/opt/app/venv/bin/gunicorn", "lesspass.wsgi:application", "--access-logfile", "-", "--error-logfile", "-", "--log-level", "debug", "--bind", "0.0.0.0:8000"]
