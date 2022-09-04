from django.shortcuts import render
from drf_spectacular.utils import extend_schema
from mystock.market.models import Stock
from mystock.market.serializers import StockSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response


class StockViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Stock.objects.all().order_by("id")
    serializer_class = StockSerializer

    @extend_schema(
        description="전일보다 상승한 주식 Top 10",
        responses={200: StockSerializer(many=True)},
    )
    @action(detail=False)
    def increasing(self, request):
        stocks = Stock.objects.all().order_by("-kr_name")

        page = self.paginate_queryset(stocks)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(stocks, many=True)
        return Response(serializer.data)

    @extend_schema(
        description="전일보다 하락한 주식 Top 10",
        responses={200: StockSerializer(many=True)},
    )
    @action(detail=False)
    def decreasing(self, request):
        stocks = Stock.objects.all().order_by("kr_name")

        page = self.paginate_queryset(stocks)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(stocks, many=True)
        return Response(serializer.data)
