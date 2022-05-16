from django.urls import path
from . import views

urlpatterns = [

    path('<id>/', views.get_all_comments),
    path('', views.user_comments),
    path('update/<int:pk>/', views.update_comments),
]