# Generated by Django 4.0 on 2021-12-22 00:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('critters', '0005_auto_20211214_1813'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bug',
            name='location',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='bug',
            name='month_span',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='bug',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='bug',
            name='rarity',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='fish',
            name='location',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='fish',
            name='month_span',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='fish',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='fish',
            name='rarity',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='fish',
            name='shadow_size',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='month',
            name='month_name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='seacreature',
            name='month_span',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='seacreature',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='seacreature',
            name='shadow_size',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='seacreature',
            name='speed',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='time',
            name='hour_am_pm',
            field=models.CharField(max_length=200),
        ),
    ]
