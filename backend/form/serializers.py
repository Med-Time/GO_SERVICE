from rest_framework import serializers
from .models import *

class FormDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = formDetails
        fields = '__all__'