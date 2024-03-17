from django.urls import path, include
from .views import *
urlpatterns = [
    path('', apiOverview),
    path('submit',form_submit),
    path('view-list', view_form_list),
    path('delete/<int:id>', ItemDeleteView.as_view(), name='delete_item'),
]
