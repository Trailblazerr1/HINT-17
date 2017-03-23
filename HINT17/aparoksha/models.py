from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models


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
    donations = models.ForeignKey(Donations)

    class Meta:
        verbose_name = 'Users'
        verbose_name_plural = 'Users'
        managed = True
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


class NGO(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    user_Id = models.IntegerField()
    user_name = models.CharField(max_length=25)
    user_pic = models.CharField(max_length=255, blank=True, null=True)
    user_about = models.CharField(max_length=512, blank=True, null=True)
    donations = models.ForeignKey(Donations)

    class Meta:
        verbose_name = 'NGO'
        verbose_name_plural = 'NGO'
        managed = True
        db_table = 'tbl_ngo'

    def __unicode__(self):
        return self.user_name

    def __str__(self):
        return self.user_name


class Donations(models.Model):
    type = models.IntegerField()  # 1: Money  2: Food  3: Clothes   4.Books etc
    donation_from = models.CharField(max_length=255, null=False)
    donation_to = models.CharField(max_length=255, null=False)
    donation_date = models.DateTimeField()
    donation_status = models.CharField()    # Pending/Approved

    class Meta:
        verbose_name = 'Donations'
        verbose_name_plural = 'Donations'
        managed = True
        db_table = 'tbl_donations'

    def __unicode__(self):
        return self.donation_from

    def __str__(self):
        return self.donation_from
