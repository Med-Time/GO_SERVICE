# Generated by Django 5.0.2 on 2024-03-17 19:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0004_formdetails_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='formdetails',
            name='date',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name='formdetails',
            name='phone',
            field=models.CharField(max_length=13),
        ),
    ]