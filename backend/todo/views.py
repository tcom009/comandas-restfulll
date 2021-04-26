from django.shortcuts import render
from rest_framework import  viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .serializers import TodoSerializer      
from .models import Todo     
from django.http import JsonResponse                

# @api_view(['GET'])
# def todos():
#     # authentication_classes = (authentication)      
#     permission_classes= (permissions.AllowAny)
#     todos = Todo.objects.all()
#     serializer = TodoSerializer
#     return JsonResponse(todos) 


class TodoView(viewsets.ModelViewSet): 

    permission_classes= [IsAuthenticated]
    serializer_class = TodoSerializer          
    queryset = Todo.objects.all()
    #return JsonResponse(queryset)
    