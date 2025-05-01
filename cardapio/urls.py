from django.urls import path
from . import views

app_name = "cardapio"
urlpatterns = [
    # ex: /cardapio/
    path("", views.IndexView.as_view(), name="index"),
    # ex: /cardapio/5/
    path("<int:pk>/", views.DetailView.as_view(), name="detail"),
]