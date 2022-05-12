from django.db import models

class Comment(models.Model):
    video_id = models.IntegerField()
    text = models.CharField(max_length=255)
    likes = models.IntegerField()
    dislikes = models.IntegerField()
    