const flag = true;

const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        flag ? resolve('todo bien papurri') : reject('que hiciste nabolerto?')
    }, 1000);
});

promiseA
.then(value => console.log(value)) // retorna undefined porque el log retorna undefined
.then(value => console.log(value)) // el output es undefined por lo que retorna la promesa anterior (then)
.then() // si no tiene un successHandler, se resuelve al VALOR de la PROMESA ANTERIOR
.catch(error => console.log(error));

// Un then es una PROMESA que:
// Se resuelve el valor que retorna su success handler