from django.db import models


class Card(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    content = models.TextField()
    is_fav = models.BooleanField(default=False)
    users_favorited = models.ManyToManyField(
        "auth.User", related_name="favorite_cards", blank=True
    )

    def __str__(self):
        return self.title
