from django.shortcuts import render
from .models import Users
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as django_login, logout

# Create your views here.

def login(request):
    if request.method == 'POST':
        user_email = request.POST.get('user_email')
        # logger.info(user_email)
        user = User.objects.get(email=user_email)
        profile = Users.objects.get(user_email=user_email)
        user1 = authenticate(username=user.username,
                             password=request.POST.get('password'))
        # logger.error('After User authentication')
        if user1 is not None:
            django_login(request, user1)
            return HttpResponseRedirect('user/' + str(profile.user_id))
    else:
        form = RegistrationForm()
    return render(request, 'login.html', {'form': form})
