from rest_framework import serializers
from .models import Exposure


class ExposureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exposure
        fields = "__all__"