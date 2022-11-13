from rest_framework.exceptions import APIException

from mystock.core.exceptions import make_detail


class NoPermissionException(APIException):
    status_code = 403
    default_code = "Ex403_Auth"
    default_detail = make_detail(code="Ex403", title="Forbidden", message="권한이 없습니다.")


class NoProfileException(APIException):
    status_code = 404
    default_code = "Ex404_Profile"
    default_detail = make_detail(
        code="Ex404", title="Not Found", message="프로필이 존재하지 않습니다."
    )


class InvalidProfileException(APIException):
    status_code = 400
    default_code = "Ex400_Profile"
    default_detail = make_detail(
        code="Ex400", title="Bad Request", message="이름, 전화번호, 이메일은 빈 값으로 갱신할 수 없습니다."
    )
