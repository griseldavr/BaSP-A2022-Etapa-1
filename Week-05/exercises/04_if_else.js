console.log ('----------EXERCISE 4 : IF_ELSE----------');

/*Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
*mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
*/
console.log('-----EXERCISE 3.a-----');

var randomNumber = Math.random();

if (randomNumber>= 0.5) {
    alert ('Greater than 0,5');
}
else {
    alert ('Lower than 0,5');
};

/*Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
*/
console.log('-----EXERCISE 3.b-----');

var age = Math.floor(Math.random() * 101);

//3.b.I- “Bebe” si la edad es menor a 2 años;

if (age < 2) {
    alert ('Baby');
}

//3.b.II- “Niño” si la edad es entre 2 y 12 años;

else if (age > 2 && age < 12) {
    alert ('Child');
}

//3.b.III- “Adolescente” entre 13 y 19 años;

else if (age > 13 && age <= 19) {
    alert ('Teenager');
}

//3.b.IV- “Joven” entre 20 y 30 años;

else if (age > 20 && age <= 30) {
    alert('Young Adult');
}

//3.b.V- “Adulto” entre 31 y 60 años;

else if (age > 31 && age <= 60) {
    alert ('Adult');
}

//3.b.VI- “Adulto mayor” entre 61 y 75 años;

else if (age > 61 && age <= 75) {
    alert('Senior');
}

//3.b.VII- “Anciano” si es mayor a 75 años.

else if (age > 75)
    {alert ('Elderly');
};