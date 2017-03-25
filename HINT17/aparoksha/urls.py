from django.conf.urls import url
from . import views

urlpatterns = [
    # url(r'^$', views.home),
    url(r'^renderLogin', views.renderLogin),
    url(r'^renderNotification', views.renderNotification),
    url(r'^login', views.login),
    url(r'^getreq', views.getrequest),
    url(r'^donate', views.donate),
    url(r'^signup$', views.signup),
    url(r'^rendersignup/$', views.renderSignup),
    # url(r'^profile/$',views.profile),
    url(r'^notifications$', views.Notifications),
    # url(r'^profile/$',views.profile),
]
