from django.urls import path, include
from .views import contact_submit
urlpatterns = [
    path('submit', contact_submit)
]