console.log ('----------EXERCISE 1 : VARIABLES AND OPERATORS----------');
/*1.a- Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en
*una 3er variable.
*/
console.log('-----EXERCISE 1.a-----');

var x, y;
x = 500;
y = 1500;

var sum = x + y;
console.log('Sum of x + y =',sum);

//1.b-Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable
console.log('-----EXERCISE 1.b-----');

var firstName, lastName;
firstName = 'Griselda';
lastName = 'Vera';

var fullName = firstName +' '+ lastName;

console.log('Concatenate variables - Full Name:',fullName);

/*1.c-Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
*guardando el resultado de la suma en una 3er variable (utilizar length).
*/
console.log('-----EXERCISE 1.c-----')

var country1, country2;

country1 = "Uruguay";
country2 = "Venezuela";

var sumCountrylength = country1.length + country2.length;

console.log ('Sum of the lengths of Uruguay and Venezuela:',sumCountrylength);