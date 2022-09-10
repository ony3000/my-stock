import os

from django.core.files.storage import FileSystemStorage


class UniqueFilenameStorage(FileSystemStorage):
    def get_available_name(self, name, max_length=None):
        (root, ext) = os.path.splitext(name)
        unique_filename = super().get_alternative_name(root, ext)

        return unique_filename
