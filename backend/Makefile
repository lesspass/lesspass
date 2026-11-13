.PHONY: help runserver migrate makemigrations shell test check

.DEFAULT_GOAL := help

MANAGE := ./manage_py

help:
	@echo "LessPass backend development commands:"
	@echo "  make runserver       Start the Django development server"
	@echo "  make migrate         Apply database migrations"
	@echo "  make makemigrations  Create database migrations"
	@echo "  make shell           Open the Django shell"
	@echo "  make test            Run Django tests"
	@echo "  make check           Run Django system checks"

runserver:
	$(MANAGE) runserver

migrate:
	$(MANAGE) migrate

makemigrations:
	$(MANAGE) makemigrations

shell:
	$(MANAGE) shell

test:
	$(MANAGE) test

check:
	$(MANAGE) check
