from django.contrib.auth.models import AbstractUser
from django.db import models
from critters.models import Fish, Bug, SeaCreature

class CustomUser(AbstractUser):
    caught_fish = models.ManyToManyField(Fish, related_name='caught_by', blank=True)
    caught_bugs = models.ManyToManyField(Bug, related_name='caught_by', blank=True)
    caught_seacreatures = models.ManyToManyField(SeaCreature, related_name='caught_by', blank=True)
    friends = models.ManyToManyField('self', blank=True)
    outbound_friend_requests = models.ManyToManyField('CustomUser', related_name='inbound_friend_requests', blank=True)
    # add additional fields in here

    def __str__(self):
        return self.username