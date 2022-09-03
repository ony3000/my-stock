from rest_framework.exceptions import APIException


def make_detail(code: str, title: str, message: str) -> dict:
    return {
        "code": code,
        "title": title,
        "message": message,
    }


class CustomException(APIException):
    status_code = 400
    default_code = "Exception code that will not be passed to the client"
    default_detail = make_detail(
        code="Ex400", title="Error title", message="Error message"
    )
