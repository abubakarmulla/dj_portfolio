from django.db import models

# Create your models here.
class ContactInfo(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    email = models.EmailField(blank=False)
    phone = models.CharField(max_length=10)
    sub = models.CharField(max_length=50)
    gender = models.CharField(max_length=50)
    msg = models.CharField(max_length=5000)

    def __str__(self):
        return self.email