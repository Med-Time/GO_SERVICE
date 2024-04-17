from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import AccountDetailsSerializer
from .models import AccountDetails
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login
from django.contrib  import messages
from rest_framework.views import APIView
# from django.contrib.auth import authenticate,
# from rest_framework.response import Response

# from rest_framework import status

# Create your views here.
# class account_submit(APIView):
    
#     def post(self,request):
        
#         username = request.data.get('username',None)
#         password =  request.data.get('password',None)

#         user = authenticate(username = username,password = password)
#         if user is not None:
#             login(request,user)
#             return Response({'Message':'Logged In'},status =status.HTTP_200_OK)
#         else:
#             return Response({'Message':'Invalid username and password combination'},status = status.HTTP_401_UNAUTHORIZED)

    







#Create your views here.
@api_view(['POST'])
def account_submit(request):
    if request.method=='POST':
        serializer=AccountDetailsSerializer(data = request.data)
        if serializer.is_valid():
            email=serializer.data['email']
            password=serializer.data['password']

            if AccountDetails.objects.filter(email = email,password = password).exists():
                messages.info(request,'done')
                return Response("Login successfull", status=status.HTTP_201_CREATED)
                
                
                
            else:
                # messages.info(request,'not-done')
                messages.info(request,'Invalid Credentials')
                
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                
                
    else:
        
        pass


@api_view(['GET'])
def account_list(request):
    queryset = AccountDetails.objects.all()
    serializer = AccountDetailsSerializer(queryset, many=True)  # Assuming AccountDetailsSerializer is your serializer class
    return Response(serializer.data)
