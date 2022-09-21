console.log ('----------EXERCISE 5 : IF_ELSE----------');
/*Create an array containing 5 words and loop through that array using a JavaScript for loop to display
*an alert using each of the words.
*/
console.log('-----EXERCISE 5.a-----');

var colors = ['yellow', 'green', 'violet', 'red', 'pink'];

for (x of colors) {
    alert(x);
};

/*To the previous array, convert the first letter of each word to uppercase and show an alert for each word
*modified.
*/
console.log('-----EXERCISE 5.b-----');

colors.forEach(element => {
    alert(element.substring(0,1).toUpperCase() + element.substring (1).toLowerCase());
});

/*Create a variable called "sentence" that has an empty string, then the array from point a) loop through it with a
*for loop to save each word inside the sentence variable. At the end show a single alert with
*the complete chain.
*/
console.log('-----EXERCISE 5.c-----');

var sentence = [];

colors.forEach(element => {
    sentence.push(element);
});

alert(sentence);

/*Create an empty array and with a for loop of 10 repetitions. Fill the array with the number of the repetition, it is
*say that at the end of the execution of the for loop there should be 10 elements inside the array, starting at number 0
*up to number 9. Show the final array in the browser console (use console.log).
*/
console.log('-----EXERCISE 5.d-----');

var numbers = [];

for(var i=0; i<10; i++) {
    numbers[i]=i;
};

console.log(numbers);