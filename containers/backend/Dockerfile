FROM python:3.8-slim
LABEL maintainer="LessPass <contact@lesspass.com>"
LABEL name="LessPass Backend"
RUN mkdir /opt/backend
WORKDIR /opt/backend
COPY requirements.txt /opt/backend
RUN python -m pip install --no-cache-dir --upgrade pip
RUN python -m pip install --no-cache-dir -r requirements.txt
COPY . /opt/backend
RUN python --version
EXPOSE 8000
ENTRYPOINT ["/opt/backend/entrypoint.sh"]
CMD ["gunicorn", "lesspass.wsgi:application", "--access-logfile", "-", "--error-logfile", "-", "--log-level", "debug", "--bind", "0.0.0.0:8000"]
