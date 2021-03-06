# Generated by Django 3.2 on 2021-12-17 18:43

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('critters', '0005_auto_20211214_1813'),
        ('users', '0003_auto_20211216_1851'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='caught_bugs',
            field=models.ManyToManyField(blank=True, related_name='caught_by', to='critters.Bug'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='caught_fish',
            field=models.ManyToManyField(blank=True, related_name='caught_by', to='critters.Fish'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='caught_seacreatures',
            field=models.ManyToManyField(blank=True, related_name='caught_by', to='critters.SeaCreature'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='outbound_friend_requests',
            field=models.ManyToManyField(blank=True, related_name='_users_customuser_outbound_friend_requests_+', to=settings.AUTH_USER_MODEL),
        ),
    ]
