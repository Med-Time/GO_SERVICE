from django.db import models

# Create your models here.
class formDetails(models.Model):
    name = models.CharField(max_length = 100)
    phone = models.CharField(max_length = 10)
    details = models.CharField(max_length = 1500)
    file = models.FileField(upload_to='files/')
    location = models.CharField(max_length = 250)
    want_to_hear = models.BooleanField()
    def __str__(self):
        return self.name