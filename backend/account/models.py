from django.db import models

# Create your models here.
class AccountDetails(models.Model):
    
    email = models.EmailField(max_length = 254)
    password = models.CharField(max_length = 27)
    remember_me = models.BooleanField(default=True)
    
    def __str__(self):
        return self.email
