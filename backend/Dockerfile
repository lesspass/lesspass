FROM registry.suse.com/bci/python:3.11

ENV PYTHONUNBUFFERED=1 \
    DJANGO_SETTINGS_MODULE=lesspass.settings \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100 \
    PATH="/app/.local/bin:$PATH"

WORKDIR /app

RUN zypper ref && \
    zypper install -y \
    gcc \
    libpq5 \
    postgresql-devel \
    && zypper clean -a

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN python3 manage.py collectstatic --noinput

EXPOSE 8000

CMD ["gunicorn", "--workers=4", "--bind=0.0.0.0:8000", "lesspass.wsgi:application"]
