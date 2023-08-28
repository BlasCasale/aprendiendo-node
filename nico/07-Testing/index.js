const sumar = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number")
        throw Error("Los parametros deben ser números");

    return a + b;
};

const pares = (array) => {
    if (!Array.isArray(array)) throw Error("Debe ser un array");

    return array.filter((num) => num % 2 === 0);
};

const promisifiedFunction = () => {
    const promiseA = new Promise((res, rej) => {
        setTimeout(() => {
            res("Ok")
        }, 1000);
    });

    return promiseA;
};



// que voy a testear? saber que quiero testear

// 1) que sea una funcion
// 2) que reciba dos numeros, que pasa si le paso otra cosa?
// 3) que sume correctamente


module.exports = {
    sumar,
    pares,
    promisifiedFunction
};