window.onload = function() {

    var email = document.getElementById('email');
    email.setAttribute('value','E-mail');

    var password = document.getElementById('password');
    password.setAttribute('value','Password');

    var errorEmail = document.getElementById('error-email');

    var validateEmail = function validateEmail() {

        var isValidEmail = email.value;
        var emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (emailFormat.test(isValidEmail)) {
        email.classList.add('green-border');
        return true;
        }
        else {
        errorEmail.innerHTML = '*Please enter a valid e-mail address';
        email.classList.add('red-border');
        return false;
        }
    }
    email.onblur = validateEmail;

    email.onfocus = function() {
        email.value = '';
        email.classList.remove('red-border');
        errorEmail.innerHTML = '';
    }

    var errorPwd = document.getElementById('error-pwd');

    var validatePassword = function validatePassword() {

        var isValidPassword = password.value;
        var passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (passwordFormat.test(isValidPassword)) {
        password.classList.add('green-border');
        return true;
        }
        else {
        errorPwd.innerHTML = '*Password must be at least 8 characters long and contain letters and numbers';
        password.classList.add('red-border');
        return false;
        }
    }
    password.onblur = validatePassword;

    password.onfocus = function() {
        password.value = '';
        password.classList.remove('red-border');
        errorPwd.innerHTML = '';
        }

    var btnLogin = document.getElementById('btn-login');

    btnLogin.onclick = function (e) {
        e.preventDefault();
        var loginEmail = validateEmail();
        var loginPwd = validatePassword();
        if (loginEmail === true && loginPwd === true){
            alert ('Your email address is '+ email.value +' and your password is '+ password.value);
        }
        else if (loginEmail !== true) {
            alert (' [ERROR] Please check your e-mail address');
        }
        else if (loginPwd !== true) {
            alert (' [ERROR] Please check your password');
        }
    };
}