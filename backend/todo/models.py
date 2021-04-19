from django.db import models

# Create your models here.
class Todo(models.Model):
    # ('id', 'title', 'description', 'completed')
    title=models.CharField(max_length=50, blank= False, unique=True)
    description = models.CharField(max_length=150)
    complete = models.BooleanField(default = False)