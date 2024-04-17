from rest_framework import serializers
from .models import *

class FormDetailSerializer(serializers.ModelSerializer):
    file = serializers.URLField(max_length=1500)
    class Meta:
        model = formDetails
        # fields = '__all__'
        fields = ['id', 'name', 'phone', 'sector', 'details', 'date', 'file', 'location', 'want_to_hear', 'status']