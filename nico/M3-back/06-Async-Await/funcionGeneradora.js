// function* countFrom(start) {
//     let num = start;

//     while (true) {
//         yield num;
//         num++;
//     };
// };

// esta funcion es generadora por el * en el final de la palabra y se pausa por el yeild
// el yield es una pausa a la funcion, retornando el num en este caso y la funcion cuando la ejecuto de nuevo, vuelve al mismo valor que tenia antes

// let generator = countFrom(5);
// console.log(generator.next().value); // 5
// console.log(generator.next().value); // 6
// console.log(generator.next().value); // 7


// fetch("https://jsonplaceholder.typicode.com/")
//     .then((res) => res.json())
//     .then((data) => console.log(data));



const myFunction = async () => {

    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    
        console.log(result.json());
    } catch (error) {
        console.log(error.message);
    };
};

myFunction();

// const myFunction = async () => {
//     const results = [];

//     const urls = [
//         "https://jsonplaceholder.typicode.com/posts/1",
//         "https://jsonplaceholder.typicode.com/posts/2",
//         "https://jsonplaceholder.typicode.com/posts/3",
//         "https://jsonplaceholder.typicode.com/posts/4",
//         "https://jsonplaceholder.typicode.com/posts/5"
//     ];

//     // for (let index = 0; index < urls.length; index++) {
//     //     const data = await fetch(urls[index]);

//     //     results.push(data.json());
//     //     console.log("Listo usuario");
//     // };
    
//     const promises = urls.map(url => fetch(url));

//     Promise.all(promises)
//     .then(responses =>{
//         responses.forEach(response => results.push(response.json()))
//     })
//     .finally(()=> console.log(results));

//     console.log("Fin");
// };