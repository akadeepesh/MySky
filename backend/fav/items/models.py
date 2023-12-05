from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin


class CustomUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email_address = models.EmailField()


class Card(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    content = models.TextField()
    is_fav = models.BooleanField(default=False)

    def __str__(self):
        return self.title
