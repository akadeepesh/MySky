from django.db import models


class Card(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    content = models.TextField()

    def __str__(self):
        return self.title
