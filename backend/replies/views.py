from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Comment
from .models import Reply
from .serializers import ReplySerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_replies(replies, id):
    replies = Reply.objects.filter(comment_id=id)
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_reply(request, pk):
    serializer = ReplySerializer(data=request.data)
    comment = get_object_or_404(Comment, pk=pk)
    if serializer.is_valid():
        serializer.save(user=request.user, comment=comment)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
        
