from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import Group, Permission
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    clerk_id = models.CharField(max_length=200, unique=True)
    groups = models.ManyToManyField(
        Group,
        verbose_name=_("groups"),
        blank=True,
        help_text=_(
            "The groups this user belongs to. A user will get all permissions "
            "granted to each of their groups."
        ),
        related_name="items_user_set",
        related_query_name="user",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_("user permissions"),
        blank=True,
        help_text=_("Specific permissions for this user."),
        related_name="items_user_set",
        related_query_name="user",
    )


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
