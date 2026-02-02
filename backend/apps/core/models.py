from django.db import models

# Create your models here.


class Exposure(models.Model):
    date = models.DateTimeField()   
    type_of_exposure = models.CharField(max_length=100)
    type_of_material = models.CharField(max_length=100)
    ward = models.CharField(max_length=100) 
    event_description = models.TextField()
    actions_after_exposure = models.TextField()
    medical_report = models.TextField(blank=False)   
    patient_name = models.CharField(max_length=100)
    personel_name = models.CharField(max_length=100)
    position = models.CharField(max_length=100) 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    
    
    def __str__(self) -> str:
        return f"{self.date} - {self.type_of_exposure} - {self.ward}"