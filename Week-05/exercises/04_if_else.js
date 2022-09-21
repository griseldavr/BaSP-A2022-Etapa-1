console.log ('----------EXERCISE 4 : IF_ELSE----------');

/*Create a random number between 0 and 1 using the Math.random() function, if the value is greater than or equal to 0.5
*display an alert with the message “Greater than 0.5” and otherwise an alert with the message “Lower than 0.5”.
*/
console.log('-----EXERCISE 4.a-----');

var randomNumber = Math.random();

if (randomNumber>= 0.5) {
    alert ('Greater than 0,5');
}
else {
    alert ('Lower than 0,5');
};

/*Create a variable “Age” that contains an integer between 0 and 100 and displays the following alert messages:
*/
console.log('-----EXERCISE 4.b-----');

var age = Math.floor(Math.random() * 101);

//3.b.I- “Baby” if the age is less than 2 years;

if (age < 2) {
    alert ('Baby');
}

//3.b.II- “Child” if the age is between 2 and 12 years;

else if (age > 2 && age < 12) {
    alert ('Child');
}

//3.b.III- “Teenager” between 13 and 19 years old.

else if (age > 13 && age <= 19) {
    alert ('Teenager');
}

//3.b.IV- “Young Adult” between 20 and 30 years old;

else if (age > 20 && age <= 30) {
    alert('Young Adult');
}

//3.b.V- “Adult” between 31 and 60 years old;

else if (age > 31 && age <= 60) {
    alert ('Adult');
}

//3.b.VI- “Senior” between 61 and 75 years old;

else if (age > 61 && age <= 75) {
    alert('Senior');
}

//3.b.VII- “Elderly” if older than 75 years.

else if (age > 75)
    {alert ('Elderly');
};