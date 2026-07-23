from django.db import models

class Schedule(models.Model):
    CATEGORY_CHOICES = [
        ("event", "Event"),
        ("todo", "Todo"),
    ]

    title = models.CharField(max_length=100)
    date = models.DateField()
    start_time = models.TimeField(blank=True, null=True)
    end_time = models.TimeField(blank=True, null=True)

    category = models.CharField(
        max_length=10,
        choices=CATEGORY_CHOICES,
        default="event"
    )

    memo = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title