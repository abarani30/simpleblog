from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
import uuid

class Tag(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = True)
    name = models.CharField(max_length = 100, null = False, blank = False)

    # to display the tag name in the admin panel
    def __str__(self) -> str:
        return self.name


class Post(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length = 200, null = False, blank = False)
    slug = models.SlugField(unique = True, editable = False)
    body = models.TextField(max_length = 500, null = False, blank = False)
    tags = models.ManyToManyField(Tag, related_name = "tags")
    likes = models.ManyToManyField(User, related_name = "likes")
    is_active = models.BooleanField(default = True)
    created_at = models.DateTimeField(auto_now_add = True)

    # to generate the slug from title when e're saving the post
    def save(self, *args, **kwargs):
        self.slug=slugify(self.title)
        super(Post, self).save(*args, **kwargs)

    # to display the slug in the admin panel
    def __str__(self) -> str:
        return str(self.slug)

