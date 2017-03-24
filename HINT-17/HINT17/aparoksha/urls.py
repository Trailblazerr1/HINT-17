from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.home),
    # url(r'^login',views.login),
    # url(r'^signup/$',views.signup),
    # url(r'^profile/$',views.profile),
    # url(r'^donate/$',views.profile),
    #url(r'^profile/$',views.profile),

]