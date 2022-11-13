from django.forms.models import model_to_dict
from drf_spectacular.utils import extend_schema
from mystock.mock.models import Profile
from mystock.mock.serializers import ProfileSerializer
from mystock.mock.exceptions import (
    NoPermissionException,
    NoProfileException,
    InvalidProfileException,
)
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.request import Request
from rest_framework.response import Response


class ProfilePermission(permissions.BasePermission):
    def has_permission(self, request: Request, view: "ProfileViewSet") -> bool:  # type: ignore
        if view.action in ["update", "partial_update", "destroy"]:
            return request.user.is_staff

        if view.action in ["create"]:
            return request.user.is_authenticated

        return True


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all().order_by("id")
    serializer_class = ProfileSerializer
    permission_classes = [ProfilePermission]
    http_method_names = ["get", "post", "patch", "delete"]

    @extend_schema(
        description="첫 번째 프로필 갱신",
        responses={200: ProfileSerializer()},
    )
    @action(detail=False, methods=["patch"], url_path="first-one")
    def first_one(self, request: Request) -> Response:
        if not request.user.is_staff:
            raise NoPermissionException()

        first_profile = Profile.objects.all().order_by("id").first()

        if first_profile is None:
            raise NoProfileException()

        request_name = request.data.get("name")
        if request_name is not None:
            first_profile.name = request_name

        request_phone = request.data.get("phone")
        if request_phone is not None:
            first_profile.phone = request_phone

        request_email = request.data.get("email")
        if request_email is not None:
            first_profile.email = request_email

        serializer = ProfileSerializer(data=model_to_dict(first_profile))
        if not serializer.is_valid():
            raise InvalidProfileException()

        first_profile.save()

        serializer = ProfileSerializer(first_profile)
        return Response(serializer.data)

    @extend_schema(
        description="마지막 프로필 삭제",
        responses={200: ProfileSerializer()},
    )
    @action(detail=False, methods=["delete"], url_path="last-one")
    def last_one(self, request: Request) -> Response:
        if not request.user.is_staff:
            raise NoPermissionException()

        last_profile = Profile.objects.all().order_by("-id").first()

        if last_profile is None:
            raise NoProfileException()

        last_profile.delete()

        return Response(status=204)
