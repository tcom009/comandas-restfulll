

from django.contrib import admin
from django.urls import path, include                   # add this
from rest_framework import routers                      # add this
from todo import views                                  # add this
from rest_framework_simplejwt import views as jwt_views

router = routers.DefaultRouter()                        # add this
router.register(r'todos', views.TodoView, 'todo')       # add this

urlpatterns = [
    path('admin/', admin.site.urls),         
   path('tod/', include(router.urls)),                   # add this
    # path('token-auth/', TokenObtainPairView),
    # #path('token-verify/', verify_jwt_token),
    # path('token-refresh/', TokenRefreshView),
    path('api/token-auth/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token-refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    #path('core/', include('core.urls')),
#    path('todos/', include('todo.urls'))
]