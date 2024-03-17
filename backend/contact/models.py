from django.db import models

# Create your models here.
class ContactDetails(models.Model):
    name = models.CharField(max_length = 100)
    message = models.CharField(max_length = 1000)
    email = models.EmailField(max_length = 254)
    wanna_hear = models.BooleanField()
    
    def __str__(self):
        return self.email
    
    

