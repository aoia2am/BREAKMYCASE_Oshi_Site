from django.shortcuts import render, redirect
from .models import Schedule


def home(request):
    return render(request, "home.html")


def schedule_list(request):
    if request.method == "POST":
        title = request.POST.get("title")
        date = request.POST.get("date")
        time_type = request.POST.get("time_type")
        category = request.POST.get("category")
        memo = request.POST.get("memo")

        if time_type == "time":
            start_time = request.POST.get("start_time") or None
            end_time = request.POST.get("end_time") or None
        else:
            start_time = None
            end_time = None

        if title and date:
            Schedule.objects.create(
                title=title,
                date=date,
                start_time=start_time,
                end_time=end_time,
                category=category,
                memo=memo,
            )

        return redirect("schedule_list")

    schedules = Schedule.objects.all().order_by("date", "start_time")

    return render(request, "schedule/list.html", {
        "schedules": schedules,
    })


def memo_list(request):
    return render(request, "memo/list.html")


def memory_list(request):
    return render(request, "memory/list.html")