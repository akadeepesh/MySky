from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CardViewSet, FavoriteList, FavoriteDetail, UserCreate

router = DefaultRouter()
router.register(r"cards", CardViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("favorites/", FavoriteList.as_view()),
    path("favorites/<str:user__clerk_id>/<int:card__id>/", FavoriteDetail.as_view()),
    path("users/", UserCreate.as_view()),
]
