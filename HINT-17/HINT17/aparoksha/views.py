from django.shortcuts import render
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from .models import Users
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as django_login, logout
import json
# Create your views here.

def home(request):
	return HttpResponseRedirect('/contact/thanks/')


def login(request):
    if request.method == 'POST':
        user_email = request.POST.get('user_email')
        user = User.objects.get(email=user_email)
        profile = Users.objects.get(user_email=user_email)
        user1 = authenticate(username=user.username,
                             password=request.POST.get('password'))
        if user1 is not None:
            django_login(request, user1)
            profile_details = {'success': 'True', 'username': profile.user_name, 'user_email': profile.user_name,
                               'previous_donation': [{'donation1': 'amount/Food'}, {'donation2': 'amount/Food'}],
                               'user_gender': profile.user_gender}
            return json.dumps(profile_details)
    else:
        return json.dumps({'success': 'False'})


def signup(request):
	if request.method == 'POST':
		user_name =  request.POST.get('user_name')
		user_email = request.POST.get('user_email')	
		email_exists = User.object.get(email=user_email)
		if email_exists is None:
			user_fname = request.POST.get('user_fname')
			user_lname = request.POST.get('user_lname')
			user_gender = request.POST.get('user_gender')
			user_password = request.POST.get('password')
			user_name.save()
			user_email.save()
			user_fname.save()
			user_lname.save()
			user_gender.save()
			user_password.save()
			return json.dumps({'success': 'True'})
		else
			return json.dumps({'success': 'False'})







