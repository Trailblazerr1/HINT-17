from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render
from django.utils import timezone
from django.utils.html import strip_tags
from django.views.decorators.csrf import csrf_exempt

from .models import Users, Donations
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as django_login, logout
import json


# Create your views here.
@csrf_exempt
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
            return HttpResponse(json.dumps(profile_details), content_type="application/json")
    else:
        return HttpResponse(json.dumps({'success': 'False'}), content_type="application/json")


@csrf_exempt
def signup(request):
    if request.method == 'POST':
        username = strip_tags(request.POST.get('username'))
        email_exists = clean_user_email(request.POST.get('user_email'))

        if email_exists is not None:
            user_fname = request.POST.get('user_fname')
            user_lname = request.POST.get('user_lname')
            user_gender = request.POST.get('user_gender')
            user_password = request.POST.get('user_password')

            new_user = User.objects.create_user(username=username, password=user_password,
                                                email=email_exists)
            new_user.save()
            # So that user in auth table is created only when
            # profile successfully created
            try:
                new_profile = Users.objects.create(user=new_user, user_name=username, user_email=email_exists,
                                                   user_gender=user_gender,
                                                   user_fname=user_fname,
                                                   user_lname=user_lname,
                                                   joining_date=timezone.now())
            except Exception as e:
                return HttpResponse("Exception : " + str(e))
            else:
                new_profile.save()
                return HttpResponse(json.dumps({'success': 'True'}), content_type="application/json")

        else:
            return HttpResponse(json.dumps({'success': 'False'}), content_type="application/json")


# Also check that email isn't duplicate
def clean_user_email(user_email):
    try:
        user = User.objects.get(email=user_email)
    except User.DoesNotExist:
        return user_email


# @login_required
@csrf_exempt
def Notifications(request):
    donors_pending = []
    if request.method == 'POST':
        user_email = request.POST.get('user_email', None)
        profile = Users.objects.get(user_email=user_email)
        if profile.user_type == 1:  # User
            donations = Donations.objects.all().filter(donation_email=user_email)
        else:  # NGO
            donations = Donations.objects.all().filter(donation_status='Pending')
        for i in range(len(donations)):
            donors_pending.append(donations[i].as_dict())
        return HttpResponse(json.dumps(donors_pending), content_type="application/json")


def donate(request):
    if request.method == 'POST':
        donation_type = request.POST.get('type')
        amount_people = request.POST.get('amount')
        donation_date = timezone.now()
        donation_email = request.user.email
        donation_from = Users.objects.get(user_email=donation_email)
        donation_desc = request.POST.get('description')
        if donation_type == 1 and not request.POST.get('to'):
            ngo_list = []
            ngos = Users.objects.all().filter(user_ngo_type=1)  # Send NGOs accepting money
            for i in range(len(ngos)):
                ngo_list.append(ngos.as_dict())
            return HttpResponse(json.dumps(ngo_list), content_type="application/json")
        if donation_type == 1 and request.POST.get('to'):
            donation_to = request.POST.get('to')
            new_donate = Donations(type=donation_type, amount_people=amount_people, donation_desc=donation_desc,
                                   donation_date=donation_date, donation_from=donation_from, donation_to=donation_to,
                                   donation_email=donation_email)
            new_donate.save()
            return HttpResponse(json.dumps({'success': 'False'}), content_type="application/json")
        elif donation_type == 1 and request.POST.get('to'):
            new_donate = Donations(type=donation_type, amount_people=amount_people, donation_desc=donation_desc,
                                   donation_date=donation_date, donation_from=donation_from,
                                   donation_email=donation_email, )
            new_donate.save()
            return HttpResponse(json.dumps({'success': 'False'}), content_type="application/json")
        return HttpResponse(json.dumps({'success': 'False'}), content_type="application/json")


def getrequest(request):
    return HttpResponse('This is a get request')


def renderLogin(request):
    return render(request, 'login.html')


def renderSignup(request):
    return render(request, 'signup.html')


def renderNotification(request):
    return render(request, 'notification.html')
