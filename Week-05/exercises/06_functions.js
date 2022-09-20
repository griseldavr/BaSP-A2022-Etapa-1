console.log ('----------EXERCISE 6 : FUNCTIONS----------');

/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
console.log('-----EXERCISE 6.a-----');

function mySum(a, b) {
    return a + b;
}
var sumFunction = mySum(5,2);
console.log ('The sum of a + b = ', sumFunction);

/*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como
resultado.*/
console.log('-----EXERCISE 6.b-----');

function mySum(a,b) {
    if (typeof a === 'number'&& typeof b === 'number') {
        return a + b;
    }
    else {
        alert ('[ERROR] one of the elements contains an error');
        return NaN;
    }
}

var sumVar = mySum('hello',5);
console.log ('The sum of a + b = ', sumVar)

/*Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un
número entero.*/
console.log('-----EXERCISE 6.c-----');

function validateInt(number) {
    return Number.isInteger(number)
}

var valInt = validateInt(550.05);
console.log ('Is this an integer?:', valInt)

/*A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a
entero (redondeado).*/
console.log('-----EXERCISE 6.d-----');

function mySum(a,b) {
    if (validateInt(a) === true && validateInt(b) === true) {
        if (typeof a ==='number' && typeof b === 'number') {
            return a + b;
        }
        else {
            alert ('[ERROR] one of the elements contains an error');
            return NaN;
        }
    }
    else  {
        alert ('[ERROR] one of the element is not an integer');
        return Math.round(a)&&Math.round(b);
    }
}
var sumVar = mySum(5.5,9.5);
console.log ('The sum of a + b = ', sumVar)

/*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
que todo siga funcionando igual.*/
console.log('-----EXERCISE 6.e-----');
