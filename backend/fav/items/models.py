from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    clerk_id = models.CharField(max_length=200, unique=True)


class Card(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    content = models.TextField()

    def __str__(self):
        return self.title


class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    card = models.ForeignKey(Card, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("user", "card")
