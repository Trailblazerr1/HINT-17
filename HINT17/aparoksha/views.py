from django.utils import timezone

from .models import Users
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as django_login, logout
import json


# Create your views here.

def login(request):
    if request.method == 'POST':
        user_email = request.POST.get('user_email')
        user = User.objects.get(email=user_email)
        profile = Users.objects.get(user_email=user_email)
        user1 = authenticate(username=user.username,
                             password=request.POST.get('password'))
        if user1 is not None:
            django_login(request, user1)
            profile_details = {'success': 'True', 'username': profile.user_name, 'user_email': profile.user_email,
                               'previous_donation': [{'donation1': 'amount/Food'}, {'donation2': 'amount/Food'}],
                               'user_gender': profile.user_gender}
            return json.dumps(profile_details)
    else:
        return json.dumps({'success': 'False'})


def signup(request):
    if request.method == 'POST':
        username = clean_username(request.POST.get('username'))
        user_email = clean_user_email(request.POST.get('user_email'))
        email_exists = User.objects.get(email=user_email)
        if email_exists is not None:
            user_fname = request.POST.get('user_fname')
            user_lname = request.POST.get('user_lname')
            user_gender = request.POST.get('user_gender')
            user_password = request.POST.get('user_password')
            new_user = User(username=username, password=user_password,
                            email=user_email)
            # So that user in auth table is created only when
            # profile successfully created
            try:
                new_profile = Users(user=new_user, user_name=username,
                                    user_gender=user_gender,
                                    user_fname=user_fname,
                                    user_lname=user_lname,
                                    joining_date=timezone.now())
            except Exception as e:
                return json.dumps({'success': 'False'})
            else:
                new_profile.save()
                new_user.save()
                return json.dumps({'success': 'True'})

        else:
            return json.dumps({'success': 'False'})


def clean_username(self):
    try:
        user = User.objects.get(username__iexact=self.cleaned_data['username'])
    except User.DoesNotExist:
        return self.cleaned_data['username']
    raise User.ValidationError("The username is taken try a different one.")


# Also check that email isn't duplicate
def clean_user_email(self):
    try:
        user = User.objects.filter(email__iexact=self.cleaned_data['user_email'])
    except User.DoesNotExist:
        return self.cleaned_data['user_email']
    raise forms.ValidationError("This email is already registered.")
