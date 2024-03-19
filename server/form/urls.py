from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('', apiOverview),
    path('submit',form_submit),
    path('view-list', view_form_list),
    path('delete/<int:id>', ItemDeleteView.as_view(), name='delete_item'),
    path('update/<int:id>', update_status),
    path('view/<str:filename>/', views.get_image, name='get_image'),
]

