from django.db import models



class Month (models.Model):
    month_num = models.IntegerField()
    month_name = models.CharField(max_length=20)

    def __str__(self):
        return self.month_name


class Time (models.Model):
    hour = models.IntegerField()
    hour_am_pm = models.CharField(max_length=20)

    def __str__(self):
        return self.hour_am_pm


class Fish (models.Model):
    id_num = models.IntegerField()
    name = models.CharField(max_length=20)
    location = models.CharField(max_length=20)
    rarity = models.CharField(max_length=20)
    time_array = models.ManyToManyField(Time, related_name='fish')
    month_array = models.ManyToManyField(Month, related_name='fish')
    shadow_size = models.CharField(max_length=20)
    icon = models.URLField()

    def __str__(self):
        return self.name


class Bug (models.Model):
    id_num = models.IntegerField()
    name = models.CharField(max_length=20)
    location = models.CharField(max_length=20)
    rarity = models.CharField(max_length=20)
    time_array = models.ManyToManyField(Time, related_name='bugs')
    month_array = models.ManyToManyField(Month, related_name='bugs')
    icon = models.URLField()

    def __str__(self):
        return self.name


class SeaCreature (models.Model):
    id_num = models.IntegerField()
    name = models.CharField(max_length=20)
    time_array = models.ManyToManyField(Time, related_name='sea_creatures')
    month_array = models.ManyToManyField(Month, related_name='sea_creatures')
    shadow_size = models.CharField(max_length=20)
    speed = models.CharField(max_length=20)
    icon = models.URLField()

    def __str__(self):
        return self.name
