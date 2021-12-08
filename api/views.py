from rest_framework import generics, viewsets

from critters.models import Fish, Bug, SeaCreature, Month, Time
from .serializers import FishSerializer, BugSerializer, SeaCreatureSerializer, MonthSerializer, TimeSerializer, CustomUserSerializer
from users.models import CustomUser


class FishViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Fish.objects.all()
    serializer_class = FishSerializer

class BugViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer

class SeaCreatureViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SeaCreature.objects.all()
    serializer_class = SeaCreatureSerializer

class MonthViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Month.objects.all()
    serializer_class = MonthSerializer

class TimeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Time.objects.all()
    serializer_class = TimeSerializer

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
