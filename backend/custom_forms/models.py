from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Form(models.Model):
    form_name = models.CharField(max_length=200)
    created_by = models.ForeignKey(User,on_delete=models.CASCADE)
    created_at=models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.form_name


class FormField(models.Model):
    field_type_options = (
        ('Text','Text'),
        ('Number','Number'),
        ('Date','Date'),
        ('Password','Password'),
        ('Email','Email'),
        )
    
    form = models.ForeignKey(Form,related_name='fields',on_delete=models.CASCADE)
    label=models.CharField(max_length=150)
    field_type=models.CharField(max_length=50,choices=field_type_options)

    def __str__(self):
        return f"{self.form.form_name} - {self.label}"
     