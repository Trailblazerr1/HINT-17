from django.contrib.auth.decorators import login_required
from django.db.models import Q
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
    if request.method == 'GET':
        user_email = request.GET.get('user_email')
        user = User.objects.get(email=user_email)
        profile = Users.objects.get(user_email=user_email)
        donated = profile.donations_set.all()
        donations = []
        for i in range(len(donated)):
            donations.append(donated[i].as_dict())
        user1 = authenticate(username=user.username,
                             password=request.GET.get('password'))
        if user1 is not None:
            django_login(request, user1)
            profile_details = {'success': 'True', 'username': profile.user_name, 'user_email': profile.user_email,
                               'previous_donation': donations,
                               'user_gender': profile.user_gender, 'user_type': profile.user_type}
            return HttpResponse(json.dumps(profile_details), content_type="application/json")
    else:
        return HttpResponse(json.dumps({'success': 'False'}), content_type="application/json")


@csrf_exempt
def signup(request):
    if request.method == 'GET':
        username = strip_tags(request.GET.get('username'))
        email_exists = clean_user_email(request.GET.get('user_email'))

        if email_exists is not None:
            user_fname = request.GET.get('user_fname')
            user_lname = request.GET.get('user_lname')
            user_gender = request.GET.get('user_gender')
            user_password = request.GET.get('user_password')

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


@login_required
@csrf_exempt
def Notifications(request):
    donors_pending = []
    if request.method == 'GET':
        user_email = request.user.email
        profile = Users.objects.get(user_email=user_email)
        if profile.user_type == 1:  # User
            donations = Donations.objects.all().filter(donation_email=user_email).\
                filter(~Q(donation_status='Completed'))
        else:  # NGO
            donations = Donations.objects.all().filter(donation_status='Pending')
        for i in range(len(donations)):
            donors_pending.append(donations[i].as_dict())
        return HttpResponse(json.dumps(donors_pending), content_type="application/json")


@login_required
def donate(request):
    if request.method == 'GET':
        donation_type = request.GET.get('donation_type')
        amount_people = request.GET.get('donation_amount')
        donation_date = timezone.now()
        donation_email = request.user.email
        donation_from = Users.objects.get(user_email=donation_email)
        donation_desc = request.GET.get('donation_description')

        lat = request.GET.get('lat')
        lon = request.GET.get('lon')

        if donation_type == 1 and not request.GET.get('to'):
            ngo_list = []
            ngos = Users.objects.all().filter(user_ngo_type=1)  # Send NGOs accepting money
            for i in range(len(ngos)):
                ngo_list.append(ngos.as_dict())
            return HttpResponse(json.dumps(ngo_list), content_type="application/json")
        if donation_type == 1 and request.GET.get('to'):
            donation_to = request.GET.get('to')
            new_donate = Donations(tdonation_type=donation_type, amount_people=amount_people,
                                   donation_desc=donation_desc, donation_date=donation_date,
                                   donation_from=donation_from.user_fname, donation_to=donation_to,
                                   donation_email=donation_email, donating_user=donation_from,
                                   donor_coordinates_lon=lon, donor_coordinates_lat=lat)
            new_donate.save()
            return HttpResponse(json.dumps({'success': 'False'}), content_type="application/json")
        elif donation_type >= 0:
            new_donate = Donations(donation_type=donation_type, amount_people=amount_people,
                                   donation_desc=donation_desc, donation_date=donation_date,
                                   donation_from=donation_from.user_fname, donation_email=donation_email,
                                   donating_user=donation_from, donor_coordinates_lon=lon, donor_coordinates_lat=lat)
            new_donate.save()
            return HttpResponse(json.dumps({'success': 'True'}), content_type="application/json")
        return HttpResponse(json.dumps({'success': 'False'}), content_type="application/json")


@login_required
def donate_accept(request):
    if request.method == 'GET':
        donation_reciever = request.GET.get('donation_reciever')
        donation_time = request.GET.get('time')
        donation_mobile = request.GET.get('donation_mobile')

        donation = Donations.objects.get(donation_id='donation_id')
        if donation.update(donation_Receiver=donation_reciever, donation_time=donation_time,
                           donation_mobile=donation_mobile, donation_status='Approved'):
            return HttpResponse(json.dumps({'success': 'True'}), content_type="application/json")
        else:
            return HttpResponse(json.dumps({'success': 'False'}), content_type="application/json")


def renderLogin(request):
    return render(request, 'login.html')


def renderSignup(request):
    return render(request, 'signup.html')


def renderNotification(request):
    return render(request, 'notification.html')


@login_required
def logout_user(request):
    logout(request)
    return HttpResponse(json.dumps({'success': 'True'}), content_type="application/json")
