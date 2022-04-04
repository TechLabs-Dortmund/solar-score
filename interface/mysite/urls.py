"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include,path, re_path
from django.views.generic import TemplateView
from clients.views import clients_list, clients_detail
from users.views import load_powerchart, load_testinka, load_powertable, load_testdenise, load_testprediction

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/users/', include('users.urls')),
    #re_path('.*',TemplateView.as_view(template_name="index.html")),
    re_path(r'^api/clients/$', clients_list),
    re_path(r'^api/clients/([0-9])$', clients_detail),
    path('calc/',include('calculator.urls')),
    re_path(r'^powerchart$', load_powerchart),
    re_path(r'^powertable$', load_powertable),
    re_path(r'^testmarian$', load_powerchart),
    re_path(r'^testinka$', load_testinka),
    re_path(r'^testdenise$', load_testdenise),
    re_path(r'^testkatharina$', load_powertable),
    re_path(r'^testprediction$', load_testprediction),
    re_path('.*',TemplateView.as_view(template_name="index.html"))
]
