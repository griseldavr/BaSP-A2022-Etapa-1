console.log ('----------EXERCISE 2 : STRINGS----------');
/*Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
*(utilizar toUpperCase).
*/
console.log('-----EXERCISE 2.a-----');

var placeOfBirth = 'valencia, carabobo';

console.log ('Place of Birth (Uppercase):', placeOfBirth.toUpperCase());

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
*caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
console.log('-----EXERCISE 2.b-----');

var city = 'Buenos Aires';
var substCity = city.substring(0,5);

console.log ('First 5 characters substracted from City =', substCity);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
*caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
console.log('-----EXERCISE 2.c-----');

var hairColor = 'Dark brown';
var substHairColor = hairColor.substring(hairColor.length - 3);

console.log ('Last 3 characters substracted from Hair Color:', substHairColor);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
*letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
*toUpperCase, toLowerCase y el operador +).
*/
console.log('-----EXERCISE 2.d-----');

var eyeColor = 'light brown';

var upperEyeColor = eyeColor.substring(0,1).toUpperCase() + eyeColor.substring (1).toLowerCase();
console.log('First letter of Eye Color in uppercase:',upperEyeColor);

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
*primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/
console.log('-----EXERCISE 2.e-----');

var favoriteMovie = 'The Shining';

var tabFavoriteMovie = favoriteMovie.indexOf(' ');

console.log('Blank space in Favorite Movie:',tabFavoriteMovie)

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
*Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
*palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
*operador +).
*/
console.log('-----EXERCISE 2.f-----');

var favoriteAuthor = 'ferdinands canterbury';

var upperFavoriteAuthor = favoriteAuthor.substring(0,1).toUpperCase() +
favoriteAuthor.substring(1, favoriteAuthor.indexOf(' ')).toLowerCase()+ ' ' +
favoriteAuthor.substring(11,12).toUpperCase()+
favoriteAuthor.substring(favoriteAuthor.length - 9).toLowerCase();

console.log('Favorite Author with first letters of each word in uppercase:', upperFavoriteAuthor);