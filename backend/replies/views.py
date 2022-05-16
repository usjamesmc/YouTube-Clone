from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Reply
from .serializers import ReplySerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_replies(request, pk):
    if request.method == 'GET':
        replies = Reply.objects.filter(comment_id=pk)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_reply(request):
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(comment=request.comment)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
