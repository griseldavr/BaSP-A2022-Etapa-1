console.log ('----------EXERCISE 1 : VARIABLES AND OPERATORS----------');
/*1.a- Create two numeric variables and use the sum operator to store the value of the sum of both numbers in
*a 3rd variable.
*/
console.log('-----EXERCISE 1.a-----');

var x, y;

x = 500;
y = 1500;

var sum = x + y;

console.log('Sum of x + y =',sum);

//1.b-Create two variables of type String and concatenate them saving the result in a 3rd variable.
console.log('-----EXERCISE 1.b-----');

var firstName, lastName;

firstName = 'Griselda';
lastName = 'Vera';

var fullName = firstName +' '+ lastName;

console.log('Concatenate variables - Full Name:',fullName);

/*1.c-Create two variables of type String and add the length of each variable (number of letters in the string)
*saving the result of the sum in a 3rd variable (use length).
*/
console.log('-----EXERCISE 1.c-----')

var country1, country2;

country1 = "Uruguay";
country2 = "Venezuela";

var sumCountrylength = country1.length + country2.length;

console.log ('Sum of the lengths of Uruguay and Venezuela:',sumCountrylength);