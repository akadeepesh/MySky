from django.db import models
from django.contrib.auth import get_user_model


class Card(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    content = models.TextField()
    favorited_by = models.ManyToManyField(
        get_user_model(), related_name="favorites", blank=True
    )

    def __str__(self):
        return self.title
