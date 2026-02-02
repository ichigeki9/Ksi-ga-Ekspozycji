from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Exposure
from .serializers import ExposureSerializer

# obj = { "position": "Pielęgniarka", "ward": "SOR", "personelName": "Patryk Karpiński", "patientName": "Jurek Malinowski", "medicalReport": "Pacjent podaje, że choruje od 16 r.ż na HCV", "date": "2026-01-26T11:10", "typeOfExposure": "Zaklucie", "typeOfMaterial": "Krew", "eventDescription": "Podczas pobierania krwi doszło do zakłucia.", "actions_after_exposure": "Przemyto i zdezynfekowano ranę. " }


@api_view(["GET"])
def exposure_list(request):
    exposures = Exposure.objects.all()
    serializer = ExposureSerializer(exposures, many=True)
    return Response(serializer.data)
    # print("wysłano")
    # return (Response(obj))



@api_view(["POST"])
def create_exposure(request):
    print(request.data)
    serializer = ExposureSerializer(data=request.data)
    if serializer.is_valid():
        obj = serializer.save()
        return Response(ExposureSerializer(obj).data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # print(serializer)
    # return(Response({"status":"ok"}))