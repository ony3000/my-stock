from django.db import models
from mystock.core.models import BaseModel


class Stock(BaseModel):
    code = models.CharField(help_text="주식코드", max_length=8, unique=True)
    kr_name = models.CharField(help_text="국문 주식명", max_length=64, default="")
    kr_name_initial_consonant = models.CharField(
        help_text="국문 주식명 초성", max_length=64, default=""
    )
    us_name = models.CharField(help_text="영문 주식명", max_length=128, default="")

    def __str__(self):
        return f"{self.kr_name} ({self.code})"
