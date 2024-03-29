# Generated by Django 4.1.6 on 2024-03-14 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ContactDetails",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("message", models.CharField(max_length=1000)),
                ("email", models.EmailField(max_length=254)),
                ("wanna_hear", models.BooleanField()),
            ],
        ),
    ]
