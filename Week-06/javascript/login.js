window.onload = function() {

    var email = document.getElementById('email');
    email.setAttribute('value','E-mail');

    var password = document.getElementById('password');
    password.setAttribute('value','Password');

    email.onfocus = function() {
        email.value='';
    }
    password.onfocus = function() {
        password.value='';
    }

    email.onblur = function() {
        if (email.value==='') {
            alert('E-mail must be filled out');
            return email.classList.add('border-blur-error');
        }
        else {
            return email.classList.add('border-blur')
        }
    }

}


// function validate(){
//     var username = document.getElementsByClassName("username").value;
//     var password = document.getElementsByClassName("password").value;
//     if ( username == "" && password == "formget#123"){
//     alert ("Login successfully");
//     window.location = "success.html"; // Redirecting to other page.
//     return false;
//     }
//     else{
//     attempt --;// Decrementing by one.
//     alert("You have left "+attempt+" attempt;");
//     // Disabling fields after 3 attempts.
//     if( attempt == 0){
//     document.getElementById("username").disabled = true;
//     document.getElementById("password").disabled = true;
//     document.getElementById("submit").disabled = true;
//     return false;
//     }
//     }
//     }