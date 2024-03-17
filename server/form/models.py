
from django.db import models
from datetime import date


# Create your models here.
class formDetails(models.Model):
    name = models.CharField(max_length = 100)
    phone = models.CharField(max_length = 13)
    sector = models.CharField(max_length = 100,default="Transportation")
    details = models.CharField(max_length = 1500)
    date = models.DateField(default = date.today)
    file = models.FileField(upload_to='files/')
    location = models.CharField(max_length = 250)
    want_to_hear = models.BooleanField()
    status = models.CharField(max_length = 250,default = "Pending")
    def __str__(self):
        return self.name