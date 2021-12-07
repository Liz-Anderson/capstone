from django.urls import path
from . import views

app_name = 'critters'


urlpatterns = [
    path('', views.CritterView, name='home'),
]
