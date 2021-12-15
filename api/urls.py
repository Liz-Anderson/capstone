from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import FishViewSet, BugViewSet, SeaCreatureViewSet, MonthViewSet, TimeViewSet, CustomUserViewSet, CurrentUserView

router = DefaultRouter()
router.register('fish', FishViewSet, basename='fish')
router.register('bugs', BugViewSet, basename='bugs')
router.register('seacreatures', SeaCreatureViewSet, basename='seacreatures')
router.register('months', MonthViewSet, basename='months')
router.register('times', TimeViewSet, basename='times')
router.register('users', CustomUserViewSet, basename='users')

urlpatterns = router.urls + [
    path('currentuser/', CurrentUserView.as_view())
]