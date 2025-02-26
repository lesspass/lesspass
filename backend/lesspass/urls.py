from django.urls import include, path
from django.contrib import admin

admin.site.site_header = "LessPass"
admin.site.site_title = "LessPass"
admin.site.index_title = "Admin LessPass"

urlpatterns = [
    path("", include("api.urls")),
    path("api/", include("api.urls")),
    path("admin/", admin.site.urls),
]
