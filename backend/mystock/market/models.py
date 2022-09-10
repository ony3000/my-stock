import os

from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import gettext_lazy as _
from mystock.core.models import BaseModel
from mystock.core.storage import UniqueFilenameStorage


def stock_logo_image_path(stock: "Stock", filename: str) -> str:
    (_, ext) = os.path.splitext(filename)

    return f"media/{stock.code}{ext}"


class Stock(BaseModel):
    code = models.CharField(help_text="주식코드", max_length=8, unique=True)
    logo_image = models.ImageField(
        help_text="로고 이미지",
        upload_to=stock_logo_image_path,
        storage=UniqueFilenameStorage,
        null=True,
        blank=True,
    )
    kr_name = models.CharField(
        help_text="국문 주식명", max_length=64, default="", blank=True
    )
    kr_name_initial_consonant = models.CharField(
        help_text="국문 주식명 초성", max_length=64, default="", blank=True
    )
    us_name = models.CharField(
        help_text="영문 주식명", max_length=128, default="", blank=True
    )
    krw_price = models.IntegerField(help_text="원화 주가", default=0, blank=True)
    krw_price_fluctuation_rate = models.DecimalField(
        help_text="원화 주가 등락률 (단위: %)",
        max_digits=16,
        decimal_places=2,
        default=0,
        blank=True,
    )

    def __str__(self):
        readable_name = self.kr_name or self.us_name

        return f"{readable_name} ({self.code})"

    def clean(self):
        kr_name_field = self._meta.get_field("kr_name")
        us_name_field = self._meta.get_field("us_name")

        if self.kr_name.strip() == "" and self.us_name.strip() == "":
            raise ValidationError(
                _(
                    f"{kr_name_field.help_text}과 {us_name_field.help_text} 중 한 가지는 필수 항목입니다."
                )
            )
