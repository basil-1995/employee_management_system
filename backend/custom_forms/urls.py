from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import FormViewSet


router=DefaultRouter()
router.register(r'',FormViewSet)

urlpatterns=[
    path('',include(router.urls))
]