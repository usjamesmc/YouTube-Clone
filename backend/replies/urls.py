from django.urls import path
from replies import views

urlpatterns = [     
    path('<int:pk>/', views.get_all_replies),
    path('', views.user_reply)
]