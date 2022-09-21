console.log ('----------EXERCISE 6 : FUNCTIONS----------');

/*Create a sum function that receives two numeric values ​​and returns the result. Run the function and save the
result in a variable, displaying the value of said variable in the browser console.*/
console.log('-----EXERCISE 6.a-----');

function sum(a, b) {
    return a + b;
};

var sumFunction = sum(5,2);

console.log ('The sum of a + b = ', sumFunction);

/*To the sum function above, add a validation to check if any of the parameters is not a number;
if it is not a number, show an alert clarifying that one of the parameters has an error and return the NaN value as
result.*/
console.log('-----EXERCISE 6.b-----');

function sum(a,b) {
    if (typeof a !== 'number'|| typeof b !== 'number') {
        alert ('[ERROR] one of the elements contains an error');
        return NaN;
    }
    else {
        return a + b;
    }
};

var sumVar = sum('hello',5);
console.log ('The sum of a + b = ', sumVar)

/*Besides, create a validate Integer function that receives a number as a parameter and returns true if it is a
whole number.*/
console.log('-----EXERCISE 6.c-----');

function validateInt(number) {
    return Number.isInteger(number)
}

var valInt = validateInt(550.05);

console.log ('Is this an integer?:', valInt)

/*To the sum function of exercise 6b) add a call to the function of exercise 6c. and that validates that the
numbers are integers. In case there are decimals, show an alert with the error and return the number converted to
integer (rounded).*/
console.log('-----EXERCISE 6.d-----');

function invalidInt(a,b) {
    if (typeof a !=='number'|| typeof b !=='number') {
        alert ('[ERROR] one of the elements contains an error')
        return NaN;
    }
    else if (!validateInt(a)) {
        alert ('[ERROR] one of the element is not an integer');
    return Math.round(a);
    }
    else if (!validateInt(b)) {
        alert ('[ERROR] one of the element is not an integer');
    return Math.round(b);
    }
    return a + b;
};

var sumInt = invalidInt(8,10.45);

console.log ('The sum of a + b = ', sumInt)

/*Convert the validation from exercise 6d) into a separate function and call it inside the sum function testing
that everything continues to work the same.*/
console.log('-----EXERCISE 6.e-----');

function newSum(a, b) {
    var aIsInvalid = invalidInt(a);
    if (aIsInvalid || Number.isNaN(aIsInvalid)) {
        return aIsInvalid;
    }

    var bIsInvalid = invalidInt(b);
    if (bIsInvalid || Number.isNaN(bIsInvalid)) {
        return bIsInvalid;
    }
    return a + b;
};

var newSumExecution = sum(10, 'bye');

console.log("Execute new sum: " , newSumExecution);