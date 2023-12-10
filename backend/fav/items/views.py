from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from .models import Card, User, Favorite
from .serializers import CardSerializer, FavoriteSerializer, UserSerializer


class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer


class FavoriteList(generics.ListCreateAPIView):
    serializer_class = FavoriteSerializer

    def get_queryset(self):
        user_id = self.request.query_params.get("user_id", None)
        if user_id is not None:
            user = User.objects.get(clerk_id=user_id)
            return Favorite.objects.filter(user=user)
        return Favorite.objects.none()


class FavoriteDetail(generics.RetrieveDestroyAPIView):
    serializer_class = FavoriteSerializer
    lookup_fields = ("user__clerk_id", "card__id")

    def get_queryset(self):
        user_id, card_id = self.kwargs["user__clerk_id"], self.kwargs["card__id"]
        return Favorite.objects.filter(user__clerk_id=user_id, card__id=card_id)


class UserCreate(generics.CreateAPIView):
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user, created = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        if created:
            return Response(
                serializer.data, status=status.HTTP_201_CREATED, headers=headers
            )
        else:
            return Response(serializer.data, status=status.HTTP_200_OK, headers=headers)

    def perform_create(self, serializer):
        return User.objects.get_or_create(**serializer.validated_data), True
