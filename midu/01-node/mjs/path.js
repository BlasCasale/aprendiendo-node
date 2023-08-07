const path = require("node:path")

// para saber como van las barras / o \
console.log(path.sep);

// unirlas con el join

const filePath = path.join("content", "folder", "subFolder", "test.txt")
console.log(filePath)

// para conseguir el archivo
const base = path.basename("content/folder/subFolder/test.txt")
console.log(base)

// para conseguir el nombre sin la extension 
const filename = path.basename("content/folder/subFolder/test.txt", ".txt")
console.log(filename)

// conseguir la extension
const extension = path.extname("image.jgp")
console.log(extension)