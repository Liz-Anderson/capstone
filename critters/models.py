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
    month_start = models.ManyToManyField(Month, related_name='fish_start')
    month_end = models.ManyToManyField(Month, related_name='fish_end')
    time_array = models.ManyToManyField(Time, related_name='fish')
    month_array = models.ManyToManyField(Month, related_name='fish')
    is_all_day = models.BooleanField(default=False)
    is_all_year = models.BooleanField(default=False)
    shadow_size = models.CharField(max_length=20)
    icon = models.URLField()

    def __str__(self):
        return self.name


class Bug (models.Model):
    id_num = models.IntegerField()
    name = models.CharField(max_length=20)
    location = models.CharField(max_length=20)
    rarity = models.CharField(max_length=20)
    month_start = models.ManyToManyField(Month, related_name='bugs_start')
    month_end = models.ManyToManyField(Month, related_name='bugs_end')
    time_array = models.ManyToManyField(Time, related_name='bugs')
    month_array = models.ManyToManyField(Month, related_name='bugs')
    is_all_day = models.BooleanField(default=False)
    is_all_year = models.BooleanField(default=False)
    icon = models.URLField()

    def __str__(self):
        return self.name


class SeaCreature (models.Model):
    id_num = models.IntegerField()
    name = models.CharField(max_length=20)
    month_start = models.ManyToManyField(Month, related_name='sea_creatures_start')
    month_end = models.ManyToManyField(Month, related_name='sea_creatures_end')
    time_array = models.ManyToManyField(Time, related_name='sea_creatures')
    month_array = models.ManyToManyField(Month, related_name='sea_creatures')
    is_all_day = models.BooleanField(default=False)
    is_all_year = models.BooleanField(default=False)
    shadow_size = models.CharField(max_length=20)
    speed = models.CharField(max_length=20)
    icon = models.URLField()

    def __str__(self):
        return self.name
