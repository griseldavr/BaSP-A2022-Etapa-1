window.onload = function() {

    var firstName = document.getElementById('first-name');


    var validateName = function validateName () {
        var validName = firstName.value;
        if (validName.length<3 || typeof validName!=='string'){
            alert ('invalid name');
        }
        else {alert('valid name')}
    }
    firstName.onblur = validateName;




}