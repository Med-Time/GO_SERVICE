from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import AccountDetailsSerializer
from .models import AccountDetails
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate
from django.contrib  import messages

# Create your views here.
@api_view(['POST'])
def account_submit(request):
    if request.method=='POST':
        serializer=AccountDetailsSerializer(data = request.data)
        if serializer.is_valid():
            email=serializer.data['email']
            password=serializer.data['password']

            if AccountDetails.objects.filter(email = email,password = password).exists():
                print("good")
                messages.info(request,'done')
                
                print(AccountDetails.objects.filter(email = email,password = password))
                return redirect('/admin')
            else:
                print("bad")
                # messages.info(request,'not-done')
                # messages.info(request,'Invalid Credentials')
                return redirect('/admin')
                

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #         user = authenticate(email=email,password=password)

    #         if user is not None:
    #             authenticate.login(request,user)
    #             print("good")
    #             messages.info(request,'done')
    #             return redirect('/admin')
    #         else:
    #             print("bad")
    #             messages.info(request,'not-done')
    #             messages.info(request,'Invalid Credentials')
    #             return redirect('/admin')
    # else:
    #     return render(request,"/admin")
