from django.urls import path
from . import views

app_name = "cardapio"
urlpatterns = [
    # ex: /cardapio/
    path("", views.IndexView.as_view(), name="index"),
    path("docinhos/", views.docinhos, name="docinhos"),
]