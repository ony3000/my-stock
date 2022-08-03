from django.db import models
from mystock.core.models import BaseModel


class Stock(BaseModel):
    code = models.CharField(max_length=8, unique=True)
    kr_name = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.kr_name} ({self.code})"
