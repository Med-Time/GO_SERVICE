from .models import *
from rest_framework import serializers

class ContactDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactDetails
        fields = '__all__'
