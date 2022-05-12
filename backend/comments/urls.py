from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_comments),
    path('<str:video_id>/', views.user_comments),
    path('alter/<int:pk>/', views.alter_comments),

]