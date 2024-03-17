from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import FormDetailSerializer
from .models import formDetails
from rest_framework.views import APIView
# views.py

# from django.http import JsonResponse
# from django.middleware.csrf import get_token

# def get_csrf_token(request):
#     token = get_token(request)
#     return JsonResponse({'csrfToken': token})

@api_view(['GET'])
def apiOverview(request):
    url_list = {
        '[POST]Form Submission': '/form/submit/',
                
                }
    return Response(url_list)


@api_view(['POST'])
def form_submit(request):
    if request.method == 'POST':
        serializer = FormDetailSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Form submitted successfully", status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def view_form_list(request):
    queryset = formDetails.objects.all()
    serializer = FormDetailSerializer(queryset, many = True)
    return Response(serializer.data)




class ItemDeleteView(APIView):
    def delete(self, request, id):
        try:
            item = formDetails.objects.get(id=id)
            item.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except formDetails.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
 
