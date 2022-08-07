from rest_framework.exceptions import APIException


class InternalServerError(APIException):
    status_code = 500
    default_code = "internal_server_error"


class BadGateway(APIException):
    status_code = 502
    default_code = "bad_gateway"


class ServiceUnavailable(APIException):
    status_code = 503
    default_code = "service_unavailable"


class GatewayTimeout(APIException):
    status_code = 504
    default_code = "gateway_timeout"
