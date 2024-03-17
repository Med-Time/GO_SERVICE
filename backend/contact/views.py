from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.mail import send_mail
from .serializers import ContactDetailSerializer
from .models import ContactDetails


# send_mail(subject, message, from_email, recipient_list)

# Send email

@api_view(['POST', 'GET'])
def contact_submit(request):
    if request.method == 'POST':
        serializer = ContactDetailSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            subject = 'Message from' + serializer.data['name']
            message = serializer.data['message']
            from_email = 'parikshitmaharjan78@gmail.com'
            recipient_list = ['sazz.sharma42@gmail.com']
            message_from_us = "Your message has been recieved by us! Thanks for contacting. We will look contact you soon. "
            send_mail(subject, message, from_email, recipient_list)
            
            send_mail(subject="Contact with Go Service Successfull", message=message_from_us,from_email=from_email, recipient_list= [serializer.data['email']])
            return Response("Contact Form submitted successfully", status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        query_set = ContactDetails.objects.all()
        serializer = ContactDetailSerializer(query_set, many = True)
        return Response(serializer.data)

    
# Create your views here.

