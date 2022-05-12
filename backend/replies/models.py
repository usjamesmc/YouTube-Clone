from django.db import models
from comments.models import Comment

class Reply(models.Model):
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
   
