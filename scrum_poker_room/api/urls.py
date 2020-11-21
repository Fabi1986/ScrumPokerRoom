from django.urls import path
from .views import RoomView, RoomViewList

urlpatterns = [
    path('', RoomView.as_view()),
    path('rooms', RoomViewList.as_view())
]
