from django.urls import path
from .views import Register, UserDetails

urlpatterns = [
    path('register', Register.as_view()),
    path('me', UserDetails.as_view())
]