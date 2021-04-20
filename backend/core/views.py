from django.shortcuts import render
from django.contrib.auth.models import User 
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer , UserSerializerWithToken

@api_view(['GET'])
def current_user (request):
    """ Determines the current user by their token and returns their data"""
    serializer = UserSerializer(request.user)
    return Response (serializer.data)

class UserList (APIView):
    """Creates a new user. It's called "User List" because we have a GET method 
    here too, for retreiving a list of all User Objects"""

    permission_classes = (permissions.AllowAny,)

    def post (self, request, format=None):
        serilizer = UserSerializerWithToken(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



