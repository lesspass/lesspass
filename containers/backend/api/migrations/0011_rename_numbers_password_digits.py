from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0010_alter_password_site_and_login"),
    ]

    operations = [
        migrations.RenameField(
            model_name="password",
            old_name="numbers",
            new_name="digits",
        ),
    ]
