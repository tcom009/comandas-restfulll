

from django.contrib import admin
from django.urls import path, include                   # add this
from rest_framework import routers                      # add this
from todo import views                                  # add this
from rest_framework_jwt.views import obtain_jwt_token

router = routers.DefaultRouter()                        # add this
router.register(r'todos', views.TodoView, 'todo')       # add this

urlpatterns = [
    path('admin/', admin.site.urls),         
    path('api/', include(router.urls)),                   # add this
    path('token-auth/', obtain_jwt_token),
    path('core/', include('core.urls'))
]