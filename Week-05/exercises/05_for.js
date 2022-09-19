console.log ('----------EXERCISE 5 : IF_ELSE----------');
/*Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
*una alerta utilizando cada una de las palabras.
*/
console.log('-----EXERCISE 5.a-----');

var colors = ['yellow', 'green', 'violet', 'red', 'pink'];

for (x of colors) {
    alert(x);
}

/*Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
*modificada.
*/
console.log('-----EXERCISE 5.b-----');

colors.forEach(element => {
    alert(element.substring(0,1).toUpperCase() + element.substring (1).toLowerCase());
});

/*Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
*bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con
*la cadena completa.
*/
console.log('-----EXERCISE 5.c-----');

var sentence = [];

colors.forEach(element => {
    sentence.push(element);
});
alert(sentence);

/*Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es
*decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0
*hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
*/
console.log('-----EXERCISE 5.d-----');

var numbers = [];

for(var i=0; i<10; i++){
    numbers[i]=i;
};
console.log(numbers);