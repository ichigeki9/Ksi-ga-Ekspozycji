from django.contrib import admin

# Register your models here.
from .models import Exposure

@admin.register(Exposure)
class ExposureAdmin(admin.ModelAdmin):
    list_display = ("date", "type_of_exposure", "ward", "personel_name", "patient_name", "created_at","type_of_material","event_description","actions_after_exposure", "medical_report","position")
    
    search_fields = ("personel_name", "patient_name", "ward", "type_of_exposure", "type_of_material")
    list_filter = ("type_of_exposure", "ward", "type_of_material")