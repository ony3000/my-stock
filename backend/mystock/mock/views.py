from mystock.mock.models import Profile
from mystock.mock.serializers import ProfileSerializer
from rest_framework import viewsets, permissions
from rest_framework.request import Request


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
