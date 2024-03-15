from django.urls import path
from .views import account_submit
urlpatterns = [
    path('submit', account_submit)
]