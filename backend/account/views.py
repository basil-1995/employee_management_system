from django.shortcuts import render
from . import views
from .serializers import RegisterSerializers, UserSerializers

from rest_framework import generics,status
from rest_framework.permissions import AllowAny,IsAuthenticated
from django.contrib.auth.models import User

class RegisterView(generics.CreateAPIView):
        queryset = User.objects.all()
        permission_classes=(AllowAny,)
        serializer_class = RegisterSerializers


class ProfileView(generics.RetrieveUpdateAPIView):
        permission_classes = (IsAuthenticated,)
        serializer_class = UserSerializers

        def get_object(self):
                return self.request.user
        


