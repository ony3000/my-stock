from rest_framework.exceptions import APIException


def make_detail(code: str, title: str, message: str) -> dict:
    return {
        "code": code,
        "title": title,
        "message": message,
    }


class Custom400(APIException):
    status_code = 400
    default_code = "internal_code_400"
    default_detail = make_detail(
        code="Ex400", title="Error title", message="Error message"
    )


class Custom401(APIException):
    status_code = 401
    default_code = "internal_code_401"
    default_detail = make_detail(
        code="Ex401", title="Error title", message="Error message"
    )


class Custom403(APIException):
    status_code = 403
    default_code = "internal_code_403"
    default_detail = make_detail(
        code="Ex403", title="Error title", message="Error message"
    )


class Custom404(APIException):
    status_code = 404
    default_code = "internal_code_404"
    default_detail = make_detail(
        code="Ex404", title="Error title", message="Error message"
    )


class Custom406(APIException):
    status_code = 406
    default_code = "internal_code_406"
    default_detail = make_detail(
        code="Ex406", title="Error title", message="Error message"
    )


class InternalServerError(APIException):
    status_code = 500
    default_code = "internal_server_error"
    default_detail = make_detail(
        code="Ex500", title="Error title", message="Error message"
    )


class BadGateway(APIException):
    status_code = 502
    default_code = "bad_gateway"
    default_detail = make_detail(
        code="Ex502", title="Error title", message="Error message"
    )


class ServiceUnavailable(APIException):
    status_code = 503
    default_code = "service_unavailable"
    default_detail = make_detail(
        code="Ex503", title="Error title", message="Error message"
    )


class GatewayTimeout(APIException):
    status_code = 504
    default_code = "gateway_timeout"
    default_detail = make_detail(
        code="Ex504", title="Error title", message="Error message"
    )
