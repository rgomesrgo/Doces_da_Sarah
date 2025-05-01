from django.db.models import F
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
from .models import Bolos

class IndexView(generic.ListView):
    template_name = "cardapio/index.html"
    context_object_name = "bolos_list"

    def get_queryset(self):
        """Return the last five published bolos."""
        return Bolos.objects.order_by("-pub_date")[:5]


class DetailView(generic.DetailView):
    model = Bolos
    template_name = "cardapio/detail.html"