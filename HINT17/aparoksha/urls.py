from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^renderLogin', views.renderLogin),
    url(r'^renderNotification', views.renderNotification),
    url(r'^login', views.login),
    url(r'^donate', views.donate),
    url(r'^signup$', views.signup),
    url(r'^rendersignup/$', views.renderSignup),
    url(r'^notifications$', views.Notifications),
    url(r'^logout$', views.logout_user),
]
