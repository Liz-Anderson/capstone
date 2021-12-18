# Generated by Django 3.2 on 2021-12-18 00:26

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20211217_1843'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='friends',
            field=models.ManyToManyField(blank=True, related_name='_users_customuser_friends_+', to=settings.AUTH_USER_MODEL),
        ),
    ]
