from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, FavSongSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import FavSong
from rest_framework.response import Response

# Create your views here.

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class FavSongListCreate(generics.ListCreateAPIView):
    serializer_class = FavSongSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_anonymous:
            return FavSong.objects.none()  
        return FavSong.objects.filter(profile_owner=user) 
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(profile_owner=self.request.user)
        else:
            print(serializer.errors)

    def list(self, request):
        """Override list() to return user's name with songs."""
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        
        # Serialize user info
        user_serializer = UserSerializer(request.user)

        # Modify response to include user details
        return Response({
            "user": user_serializer.data,  # ✅ Add user info
            "favSongs": serializer.data,   # ✅ Keep favorite songs
        })

class FavSongDelete(generics.DestroyAPIView):
    serializer_class = FavSongSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return FavSong.objects.filter(profile_owner=user)