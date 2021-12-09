# Generated by Django 3.2 on 2021-12-08 22:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('critters', '0002_time_hour_am_pm'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='caught_bugs',
            field=models.ManyToManyField(related_name='caught_by', to='critters.Bug'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='caught_fish',
            field=models.ManyToManyField(related_name='caught_by', to='critters.Fish'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='caught_seacreatures',
            field=models.ManyToManyField(related_name='caught_by', to='critters.SeaCreature'),
        ),
    ]
