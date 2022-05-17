from django.urls import path
from replies import views

urlpatterns = [     
    path('<id>/', views.get_all_replies),
    path('post/<int:pk>/', views.user_reply)
]