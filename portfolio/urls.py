from django.urls import path

from . import views

urlpatterns = [
    path("", views.index),
    path("about",views.about),
    path("achievements",views.achieve),
    path("projects",views.projects),
    path("timeline",views.timeline),
    path("contact-us",views.contacts)
]

