from .models import *
from rest_framework import serializers

class AccountDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountDetails
        fields = '__all__'
