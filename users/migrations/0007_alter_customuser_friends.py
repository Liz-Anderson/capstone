# Generated by Django 3.2 on 2022-01-28 00:52

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_alter_customuser_friends_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='friends',
            field=models.ManyToManyField(blank=True, related_name='_users_customuser_friends_+', to=settings.AUTH_USER_MODEL),
        ),
    ]
