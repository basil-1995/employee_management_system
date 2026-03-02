from rest_framework import serializers
from .models import Form,FormField



class FormFieldSerializers(serializers.ModelSerializer):
    class Meta:
        model = FormField
        fields = ("id", "label", "field_type")

class FormSerializers(serializers.ModelSerializer):
    fields=FormFieldSerializers(many=True,read_only=True)
    created_by = serializers.ReadOnlyField(source='created_by.username')


    class Meta:
        model = Form
        fields = ('id','form_name','created_by','created_at','fields')
