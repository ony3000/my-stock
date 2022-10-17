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


class SearchableStockSerializer(serializers.HyperlinkedModelSerializer):
    readable_name = serializers.SerializerMethodField()
    keywords = serializers.SerializerMethodField()

    class Meta:
        model = Stock
        fields = [
            "code",
            "logo_image",
            "readable_name",
            "keywords",
        ]

    def get_readable_name(self, stock: Stock) -> str:
        return stock.kr_name or stock.us_name

    def get_keywords(self, stock: Stock) -> list[str]:
        return [
            value
            for value in [
                stock.code,
                stock.kr_name,
                stock.kr_name_initial_consonant,
                stock.us_name,
            ]
            if value != ""
        ]
