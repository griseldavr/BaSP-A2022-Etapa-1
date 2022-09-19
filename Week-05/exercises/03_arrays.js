console.log ('----------EXERCISE 3 : ARRAYS----------');

/*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
*"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/
console.log('-----EXERCISE 3.a-----');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];

console.log('Months 5th and 11th:', months[4],',', months[10]);

//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('-----EXERCISE 3.b-----');

var monthsCopy = months.slice();
var monthsSort = monthsCopy.sort();

console.log('Sorted Months alphabetically:', monthsSort);

//Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('-----EXERCISE 3.c-----');

monthsSort.unshift('Year');
monthsSort.push('Day');

console.log('Add new item at the beginning and ending of the array:', monthsSort);

//Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('-----EXERCISE 3.d-----');

monthsSort.shift(0);
monthsSort.pop(monthsSort.length);

console.log('Remove first and last items from the array:', monthsSort);

//Invertir el orden del array (utilizar reverse).
console.log('-----EXERCISE 3.e-----');

var monthsReverse = monthsSort.reverse();

console.log('Invert array order:', monthsReverse);

//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('-----EXERCISE 3.f-----');

var monthsJoin = months.join(' - ');

console.log('Join all items separated by -:', monthsJoin);

//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('-----EXERCISE 3.g-----');

var monthsSlice = months.slice(4,11);

console.log('Slice array from May to November:', monthsSlice);