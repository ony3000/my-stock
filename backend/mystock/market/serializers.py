from mystock.market.models import Stock
from rest_framework import serializers


class StockSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Stock
        fields = ["code", "kr_name", "kr_name_initial_consonant", "us_name"]
