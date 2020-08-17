from django.db import models

# Create your models here.
class clone(models.Model):
  name = models.CharField(max_length=100)
  email = models.CharField(max_length=100)