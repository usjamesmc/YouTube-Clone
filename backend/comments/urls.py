from django.urls import path
from . import views

urlpatterns = [

    path('<id>/', views.get_all_comments),
    path('all/', views.user_comments),
    path('alter/<int:pk>/', views.alter_comments),

]