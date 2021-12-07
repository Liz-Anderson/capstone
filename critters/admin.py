from django.contrib import admin
from .models import Fish, Bug, SeaCreature, Month, Time
# Register your models here.
admin.site.register(Fish)
admin.site.register(Bug)
admin.site.register(SeaCreature)
admin.site.register(Month)
admin.site.register(Time)