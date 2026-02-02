from django.urls import path
from .views import exposure_list, create_exposure

urlpatterns = [
    path("get/", exposure_list),
    path("create_exposure/", create_exposure),
]