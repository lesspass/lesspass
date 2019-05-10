FROM python:3.6

MAINTAINER "LessPass <contact@lesspass.com>"

LABEL name="LessPass Backend" 

RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app
RUN python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt

COPY . /app
RUN python --version

EXPOSE 8000

ENTRYPOINT ["/app/entrypoint.sh"]

CMD ["gunicorn", "lesspass.wsgi:application", "--access-logfile", "-", "--error-logfile", "-", "--log-level", "debug", "--bind", "0.0.0.0:8000"]
