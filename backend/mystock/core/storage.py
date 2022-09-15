import os
from typing import Optional

from django.core.files.storage import FileSystemStorage


class UniqueFilenameStorage(FileSystemStorage):
    def get_available_name(self, name: str, max_length: Optional[int] = None) -> str:
        (root, ext) = os.path.splitext(name)
        unique_filename = super().get_alternative_name(root, ext)

        return unique_filename
