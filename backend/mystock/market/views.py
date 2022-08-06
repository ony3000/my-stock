from django.shortcuts import render
from mystock.market.models import Stock
from mystock.market.serializers import StockSerializer
from rest_framework import viewsets


class StockViewSet(viewsets.ModelViewSet):
    queryset = Stock.objects.all().order_by("id")
    serializer_class = StockSerializer
