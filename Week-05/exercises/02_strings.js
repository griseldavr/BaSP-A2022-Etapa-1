console.log ('----------EXERCISE 2 : STRINGS----------');
/*Create a variable of type string with at least 10 characters and convert all text to uppercase
*(use toUpperCase).
*/
console.log('-----EXERCISE 2.a-----');

var placeOfBirth = 'valencia, carabobo';

console.log ('Place of Birth (Uppercase):', placeOfBirth.toUpperCase());

/*Create a variable of type string with at least 10 characters and generate a new string with the first 5
*characters saving the result in a new variable (use substring).
*/
console.log('-----EXERCISE 2.b-----');

var city = 'Buenos Aires';
var substCity = city.substring(0,5);

console.log ('First 5 characters substracted from City =', substCity);

/*Create a variable of type string with at least 10 characters and generate a new string with the last 3
*characters saving the result in a new variable (use substring).
*/
console.log('-----EXERCISE 2.c-----');

var hairColor = 'Dark brown';
var substHairColor = hairColor.substring(hairColor.length - 3);

console.log ('Last 3 characters substracted from Hair Color:', substHairColor);

/*Create a variable of type string with at least 10 characters and generate a new string with the first
* uppercase letter and the rest in lowercase. Save the result in a new variable (use substring,
* toUpperCase, toLowerCase and the + operator).
*/
console.log('-----EXERCISE 2.d-----');

var eyeColor = 'light brown';

var upperEyeColor = eyeColor.substring(0,1).toUpperCase() + eyeColor.substring (1).toLowerCase();
console.log('First letter of Eye Color in uppercase:',upperEyeColor);

/*Create a variable of type string with at least 10 characters and some white space. Find the position of
*first white space and store it in a variable (use indexOf).
*/
console.log('-----EXERCISE 2.e-----');

var favoriteMovie = 'The Shining';

var tabFavoriteMovie = favoriteMovie.indexOf(' ');

console.log('Blank space in Favorite Movie:',tabFavoriteMovie)

/*Create a variable of type string with at least 2 words long (10 characters and some space in between).
*Use the methods of the previous exercises to generate a new string that has the first letter of both
*words in uppercase and the other letters in lowercase (use indexOf, substring, toUpperCase, toLowerCase and the
*operator +).
*/
console.log('-----EXERCISE 2.f-----');

var favoriteAuthor = 'ferdinands canterbury';

var upperFavoriteAuthor = favoriteAuthor.substring(0,1).toUpperCase() +
favoriteAuthor.substring(1, favoriteAuthor.indexOf(' ')).toLowerCase()+ ' ' +
favoriteAuthor.substring(11,12).toUpperCase()+
favoriteAuthor.substring(favoriteAuthor.length - 9).toLowerCase();

console.log('Favorite Author with first letters of each word in uppercase:', upperFavoriteAuthor);