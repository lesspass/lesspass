from django.core.cache import caches
from django.core.cache.backends.db import BaseDatabaseCache
from django.core.management import call_command
from django.db import DEFAULT_DB_ALIAS, migrations


def create_cache_table(apps, schema_editor):
    if (
        schema_editor.connection.alias == DEFAULT_DB_ALIAS
        and isinstance(caches["default"], BaseDatabaseCache)
    ):
        call_command(
            "createcachetable",
            database=schema_editor.connection.alias,
            verbosity=0,
        )


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0011_rename_numbers_password_digits"),
    ]

    operations = [
        migrations.RunPython(create_cache_table, migrations.RunPython.noop),
    ]
