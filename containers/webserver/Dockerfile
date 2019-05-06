FROM httpd:2.4

LABEL name="LessPass Web Server" 
LABEL maintainer="LessPass <contact@lesspass.com>"

RUN apt-get update && apt-get install -y \
    python3 \
    python3-jinja2 \
    openssl \
    && rm -rf /var/lib/apt/lists/*

COPY . /app

ENTRYPOINT ["/app/entrypoint.sh"]