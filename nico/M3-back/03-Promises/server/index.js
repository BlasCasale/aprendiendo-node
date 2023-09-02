const axios = require('axios')

const myPromise = new Promise((resolve, reason) => {
    resolve('salio todo 200 master'),
    reason('malio sal')
})

myPromise
    .then(
        (value) => console.log(value), // successHandler
        (reason) => console.log(reason) // errorHandler
    )


const url = "https://rickandmortyapi.com/api/character"

axios.get(url)
.then(res=> res.data)
.then(data => data.results)
.then(result => console.log(result))
.catch(error => console.error(error))
.finally(() => console.log("Se termino la promesa"))