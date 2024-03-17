from django.urls import path
from .views import *
urlpatterns = [
    path('submit', account_submit),
    path('view-acclist', account_list)
]