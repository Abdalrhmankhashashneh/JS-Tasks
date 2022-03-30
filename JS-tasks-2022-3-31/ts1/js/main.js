var letters = /^[a-zA-Z]/g;
var m = /[\. @]/g;
var p = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/;


function check() {

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var birth = document.getElementById('bth').value;
    var mail = document.getElementById('mail').value;
    var confirmMail = document.getElementById('cmail').value;
    var pass = document.getElementById('pass').value;
    var confirmPass = document.getElementById('cpass').value;


    allLetter(fname, lname);
    checkEmail(mail);
    checkEmailConf(confirmMail, mail);
    checkPass(pass);
    checkPassConf(confirmPass, pass);


}


function allLetter(fname, lname) {

    if (fname.match(letters) && lname.match(letters)) {
        alert('Your name have accepted : you can try another');

    }
    else {
        alert('Please check your name');

    }
}


function checkEmail(mail) {

    if (mail.match(m)) {

        alert('E-mail Correct');

    }
    else {
        alert('Invailed Email');
    }
}



function checkPass(pass) {
    if (pass.match(p)) {
        alert('password is correct');
    }

    else {
        alert('wrong password');
    }
}



function checkEmailConf(confirmMail, mail) {
    if (confirmMail == mail) {
        alert('Email Match');
    }
    else {
        alert('Please Confirm Email')
    }
}




function checkPassConf(confirmPass, pass) {
    if (confirmPass == pass) {
        alert('Password Match');

    }
    else {
        alert('Please Confirm Password');
    }
}