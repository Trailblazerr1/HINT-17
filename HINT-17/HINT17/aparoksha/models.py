from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Users(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    user_Id = models.IntegerField()
    user_name = models.CharField(max_length=25)
    user_fname = models.CharField(max_length=40, blank=True, null=True)
    user_lname = models.CharField(max_length=40, blank=True, null=True)
    user_email = models.CharField(primary_key=True, max_length=60)
    user_password = models.CharField(max_length=255)
    joining_date = models.DateTimeField()
    user_dob = models.DateField()
    user_gender = models.CharField(max_length=1)
    user_pic = models.CharField(max_length=255, blank=True, null=True)
    user_about = models.CharField(max_length=512, blank=True, null=True)

    class Meta:
        verbose_name = 'Users'
        verbose_name_plural = 'Users'
        managed = False
        db_table = 'tbl_users'

    def __unicode__(self):
        return self.user_name

    def __str__(self):
        return self.user_name

    def as_dict(self):
        return {
            "id": self.user_Id,
            "Username": self.user_name,
            "UserPic": self.user_pic,
            "UserMail": self.user_email,
            "About": self.user_about,
        }
