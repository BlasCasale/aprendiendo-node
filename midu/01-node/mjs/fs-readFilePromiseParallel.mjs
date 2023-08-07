// leer archivos con promise

import { readFile } from "fs/promises";

Promise.all([
    readFile("./archivo.txt", "utf-8"),
    readFile("./archivo2.txt", "utf-8")
])
    .then((first, second) => {
        console.log(first),
            console.log(second)
    })