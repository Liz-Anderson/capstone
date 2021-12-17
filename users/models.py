from django.contrib.auth.models import AbstractUser
from django.db import models
from critters.models import Fish, Bug, SeaCreature

class CustomUser(AbstractUser):
    caught_fish = models.ManyToManyField(Fish, related_name='caught_by')
    caught_bugs = models.ManyToManyField(Bug, related_name='caught_by')
    caught_seacreatures = models.ManyToManyField(SeaCreature, related_name='caught_by')
    friends = models.ManyToManyField('self', )
    outbound_friend_requests = models.ManyToManyField('self', related_name='inbound_friend_requests')
    # add additional fields in here

    def __str__(self):
        return self.username