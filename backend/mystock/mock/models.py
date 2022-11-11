from django.db import models
from mystock.core.models import BaseModel


class Profile(BaseModel):
    name = models.CharField(help_text="이름", max_length=32)
    phone = models.CharField(help_text="전화번호", max_length=32)
    email = models.CharField(help_text="이메일", max_length=128)
