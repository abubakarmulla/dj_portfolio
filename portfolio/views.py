from django.shortcuts import render
from django.core.mail import send_mail

from .models import ContactInfo

# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, "about.html")

def achieve(request):
    return render(request, "achievements.html")

def projects(request):
    return render(request, "projects.html")

def timeline(request):
    return render(request, "timeline.html")

def contacts(request):
    st = ""
    if request.method == "POST":
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        sub = request.POST.get('subject')
        gender = request.POST.get('gender')
        msg = request.POST.get('message')
        try:
            data = ContactInfo(fname=fname,lname=lname,email=email,phone=phone,sub=sub,gender=gender,msg=msg)
            data.save()
            st = "Data inserted successfully"
        except:
            st = "Invalid data entered"
        
        try:
            send_mail(
                "Mail from django-based portfolio",
                f"Name:{fname} {lname}\n\nEmail: {email}\n\nPhone no.: {phone}\n\nSubject: {sub}\n\nGender: {gender}\n\n\nMessage: {msg}",
                "mulla.devops1@gmail.com",
                ["mulla2000.abubakar@gmail.com"],
                fail_silently=False
                )
            st = st+"\nMail also sent successfully"
        except:
            pass
    return render(request, "contact.html",{
        "st":st
    })