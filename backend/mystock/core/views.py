from random import randrange

from mystock.core.exceptions import (
    BadGateway,
    GatewayTimeout,
    InternalServerError,
    ServiceUnavailable,
)
from mystock.market.models import Stock
from mystock.market.serializers import StockSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.exceptions import (
    NotAcceptable,
    NotAuthenticated,
    NotFound,
    ParseError,
    PermissionDenied,
)
from rest_framework.response import Response


@api_view(["GET"])
def random_400(request):
    roulette = randrange(0, 100)

    if roulette < 10:
        # 400 Bad Request
        raise ParseError()

    elif roulette < 20:
        # 401 Unauthorized
        raise NotAuthenticated()

    elif roulette < 30:
        # 403 Forbidden
        raise PermissionDenied()

    elif roulette < 40:
        # 404 Not Found
        raise NotFound()

    elif roulette < 50:
        # 406 Not Acceptable
        raise NotAcceptable()

    stocks = Stock.objects.all().filter(id__lte=5).order_by("id")
    serializer = StockSerializer(stocks, many=True)

    return Response(serializer.data)


@api_view(["POST"])
def random_500(request):
    roulette = randrange(0, 100)

    if roulette < 10:
        # 500 Internal Server Error
        raise InternalServerError()

    elif roulette < 20:
        # 502 Bad Gateway
        raise BadGateway()

    elif roulette < 30:
        # 503 Service Unavailable
        raise ServiceUnavailable()

    elif roulette < 40:
        # 504 Gateway Timeout
        raise GatewayTimeout()

    elif roulette < 50:
        # common error
        non_existence = Stock.objects.filter(id__lt=1).first()
        kr_name = non_existence.kr_name

    return Response(None, status=status.HTTP_204_NO_CONTENT)
