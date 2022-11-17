from typing import Dict
from django.http import HttpRequest, HttpResponse
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserSerializer

# register a new user
class Register(APIView):
    def post(self, request: HttpRequest) -> HttpResponse:
        try:
            # get the data
            data: Dict = request.data
            
            # do some validation
            is_error: str = self.validate_form_inputs(data)
            if is_error != "": 
                return Response({'error': is_error}, status=status.HTTP_400_BAD_REQUEST)
            
            # check if the username is already exists
            if self.is_username(data['username']):
                return Response({"error": "Username is already exists"}, 
                status=status.HTTP_400_BAD_REQUEST)
            
            # create the user
            user: User = User.objects.create_user(
                username = data['username'].strip(), 
                email = data['email'].lower(), 
                password = data['password']
            )
            
            return Response({"success": "Account created successfully"}, 
            status=status.HTTP_201_CREATED)
        
        except Exception:
            return Response({"error": "Something went wrong!"}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    # validate the form inputs data
    def validate_form_inputs(self, data: Dict) -> str:
        if self.validate_username(data['username']):
            return "Username should not be blank!"
        elif not self.validate_password(data['password']):
            return "Password is too short!"
        elif not self.validate_email(data['email']):
            return "Email is not correct!"
        return ""

    
    # validate the username
    def validate_username(self, username: str) -> bool:
        return not username

    # validate the password
    def validate_password(self, password: str) -> bool:
        return len(password) >= 6

    
    # validate the email
    def validate_email(self, email: str) -> bool:
        return 'outlook.com' in email.lower()

    
    # check if the username is already exists
    def is_username(self, username: str) -> bool: 
        return User.objects.filter(username = username.strip()).exists()


# get the user data (details)
class UserDetails(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request: HttpRequest):
        try:
            user: User = request.user
            serializer: Dict = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except Exception:
            return Response({"error": "Something went wrong!"}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR)