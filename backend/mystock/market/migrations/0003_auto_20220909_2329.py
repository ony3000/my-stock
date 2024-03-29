# Generated by Django 3.2.14 on 2022-09-09 14:29

from django.db import migrations, models
import mystock.core.storage
import mystock.market.models


class Migration(migrations.Migration):

    dependencies = [
        ("market", "0002_auto_20220903_2221"),
    ]

    operations = [
        migrations.AddField(
            model_name="stock",
            name="kr_name_initial_consonant",
            field=models.CharField(
                blank=True, default="", help_text="국문 주식명 초성", max_length=64
            ),
        ),
        migrations.AddField(
            model_name="stock",
            name="krw_price",
            field=models.IntegerField(blank=True, default=0, help_text="원화 주가"),
        ),
        migrations.AddField(
            model_name="stock",
            name="krw_price_fluctuation_rate",
            field=models.DecimalField(
                blank=True,
                decimal_places=2,
                default=0,
                help_text="원화 주가 등락률 (단위: %)",
                max_digits=16,
            ),
        ),
        migrations.AddField(
            model_name="stock",
            name="logo_image",
            field=models.ImageField(
                blank=True,
                help_text="로고 이미지",
                null=True,
                storage=mystock.core.storage.UniqueFilenameStorage,
                upload_to=mystock.market.models.stock_logo_image_path,
            ),
        ),
        migrations.AddField(
            model_name="stock",
            name="us_name",
            field=models.CharField(
                blank=True, default="", help_text="영문 주식명", max_length=128
            ),
        ),
        migrations.AlterField(
            model_name="stock",
            name="kr_name",
            field=models.CharField(
                blank=True, default="", help_text="국문 주식명", max_length=64
            ),
        ),
    ]
