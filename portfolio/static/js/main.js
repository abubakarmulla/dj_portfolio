// mouse events ==> onclick,onmouseover,onmouseout,ondblclick
// oncontextmenu applied in contact.html
// mouseenter and mouseleave applied on Name in index.html

// navbar animation using onclick
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.navbar').classList.toggle('navbar-go');

    if (document.querySelector('.navbar').classList.contains('navbar-go')) {
        setTimeout(() => {
            document.querySelector('.ham').style.display = 'inline';
        }, 500);
        document.querySelector('.cross').style.display = 'none';
    }
    else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 500);
    }
})
// confirmation of mail sent using onclick
document.querySelector('.send').addEventListener("click", () => {
    alert("Mail has been sent to Abubakar Mulla\nFor further process he may get connected with you very soon\nSo stay tuned :)");
})
// changing font-family using ondblclick
function dblclick(element) {
    element.style.fontFamily = 'Ubuntu, sans-serif';
}
// mouseover and mouseout events
function mouse_over_event1(element) {
    element.style.transform = 'scale(1.1)';
    // var m_over = document.getElementById('education-table');
    // m_over.style.transform = 'scale(1.1)';
    document.querySelector('.edu-table-body').querySelector('.edu-row1').style.backgroundColor = 'brown';
    document.querySelector('.edu-table-body').querySelector('.edu-row2').style.backgroundColor = 'brown';
    document.querySelector('.edu-table-head').querySelector('.edu-row').style.backgroundColor = 'fuchsia';
    document.querySelector('.active-row').style.backgroundColor = 'greenyellow';
}
function mouse_out_event1(element) {
    element.style.transform = 'scale(1)';
    // var m_over = document.getElementById('education-table');
    // m_over.style.transform = 'scale(1)';
    document.querySelector('.edu-table-body').querySelector('.edu-row1').style.backgroundColor = 'black';
    document.querySelector('.edu-table-body').querySelector('.edu-row2').style.backgroundColor = 'black';
    document.querySelector('.edu-table-head').querySelector('.edu-row').style.backgroundColor = '#009879';
    document.querySelector('.active-row').style.backgroundColor = 'white';
}

function mouse_over_event2(element) {
    element.style.transform = 'scale(1.1)';
    // var m_over2 = document.getElementById('experience-table');
    // m_over2.style.transform = 'scale(1.1)';
    document.querySelector('.exp-table-body').querySelector('.exp-row').style.backgroundColor = 'brown';
    document.querySelector('.exp-table-head').querySelector('.exp-row').style.backgroundColor = 'fuchsia';
}
function mouse_out_event2(element) {
    element.style.transform = 'scale(1)';
    // var m_over2 = document.getElementById('experience-table');
    // m_over2.style.transform = 'scale(1)';
    document.querySelector('.exp-table-body').querySelector('.exp-row').style.backgroundColor = 'black';
    document.querySelector('.exp-table-head').querySelector('.exp-row').style.backgroundColor = '#009879';
}
function mouse_enter(element) {
    element.style.color = 'aqua';
}
function mouse_leave(element) {
    element.style.color = '';
}


// validations of few fields onsubmit-form-event
function validate_data() {
    let msgs = [];

    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');


    if (fname.value == "" || fname.value == null) {
        msgs.push('First name cannot be empty');
    }
    else if (isNaN(parseInt(fname.value)) == false) {
        msgs.push('First name cannot be a number');
    }


    if (lname.value == "" || lname.value == null) {
        msgs.push('Last name cannot be empty');
    }
    else if (isNaN(parseInt(lname.value)) == false) {
        msgs.push('Last name cannot be a number');
    }


    if (email.value == "" || email.value == null) {
        msgs.push('Email cannot be empty');
    }
    else if ((email.value.includes("@") == false)) {
        msgs.push("Invalid Email entered");
    }


    if (phone.value == "" || phone.value == null) {
        msgs.push('Phone number cannot be empty');
    }
    else if (phone.value.length > 10 || phone.value.length < 10) {
        msgs.push("Invalid length of phone number");
    }

    if (msgs.length > 0) {
        alert(msgs.join('  ,  '));
        // if (msgs.length > 1) {
        //     msgs.forEach(element => {
        //         alert(element);
        //     });
        // }
        return false;
    }
    else {
        return true;
    }
}



// form events onfocus and onblur and onchange
// onsubmit is in validation
function focusevent(element) {
    element.style.background = "gold";
}
function blurevent(element) {
    element.style.background = "";
}
function changeit(element) {
    var val = (element.value.split('-')).join(' ');
    document.getElementById('message-label').innerHTML = val;
}