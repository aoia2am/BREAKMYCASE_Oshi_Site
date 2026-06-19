from django.shortcuts import render


def home(request):
    return render(request, "home.html")


def schedule_list(request):
    return render(request, "schedule/list.html")


def memo_list(request):
    return render(request, "memo/list.html")


def memory_list(request):
    return render(request, "memory/list.html")