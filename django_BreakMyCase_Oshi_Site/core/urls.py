from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("schedule/", views.schedule_list, name="schedule_list"),
    path("memo/", views.memo_list, name="memo_list"),
    path("memory/", views.memory_list, name="memory_list"),
]