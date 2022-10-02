from mystock.market.models import Stock
from rest_framework import serializers


class StockSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Stock
        fields = [
            "code",
            "logo_image",
            "kr_name",
            "us_name",
            "krw_price",
            "krw_price_fluctuation_rate",
        ]


class StockKeywordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Stock
        fields = [
            "code",
            "logo_image",
            "kr_name",
            "kr_name_initial_consonant",
            "us_name",
        ]
