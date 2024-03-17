# Generated by Django 4.1.6 on 2024-03-12 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="formDetails",
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
                ("phone", models.CharField(max_length=10)),
                ("details", models.CharField(max_length=1500)),
                ("file", models.FileField(upload_to="")),
                ("location", models.CharField(max_length=250)),
                ("want_to_hear", models.BooleanField()),
            ],
        ),
    ]
