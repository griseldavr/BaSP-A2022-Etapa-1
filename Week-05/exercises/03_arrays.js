console.log ('----------EXERCISE 3 : ARRAYS----------');

/*Given the following array: ["January", "February", "March", "April", "May", "June", "July", "August", "September",
*"October", "November", "December"] display months 5 and 11 on the console (use console.log).
*/
console.log('-----EXERCISE 3.a-----');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];

console.log('Months 5th and 11th:', months[4],',', months[10]);

//Sort the month array alphabetically and display it on the console (use sort).
console.log('-----EXERCISE 3.b-----');

var monthsCopy = months.slice(0,12);
var monthsSort = monthsCopy.sort();

console.log('Sorted Months alphabetically:', monthsSort);

//Add an element to the beginning and end of the array (use unshift and push).
console.log('-----EXERCISE 3.c-----');

monthsSort.unshift('Year');
monthsSort.push('Day');

console.log('Add new item at the beginning and ending of the array:', monthsSort);

//Remove an element from the beginning and the end of the array (use shift and pop).
console.log('-----EXERCISE 3.d-----');

monthsSort.shift(0);
monthsSort.pop(monthsSort.length);

console.log('Remove first and last items from the array:', monthsSort);

//Reverse the order of the array (use reverse).
console.log('-----EXERCISE 3.e-----');

var monthsReverse = monthsSort.reverse();

console.log('Invert array order:', monthsReverse);

//Join all the elements of the array into a single string where each month is separated by a hyphen - (use join).
console.log('-----EXERCISE 3.f-----');

var monthsJoin = months.join(' - ');

console.log('Join all items separated by -:', monthsJoin);

//Create a copy of the month array containing May through November (use slice).
console.log('-----EXERCISE 3.g-----');

var monthsSlice = months.slice(4,11);

console.log('Slice array from May to November:', monthsSlice);