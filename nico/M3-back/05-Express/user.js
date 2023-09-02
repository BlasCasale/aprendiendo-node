const express = require('express')
const userRouter = express.Router()

const characters = [];
let id = 1;

userRouter.get("/", (req, res) => {
    res.status(200).json(characters);
});

userRouter.post("/", (req, res) => {
    const { body } = req;
    characters.push({ ...body, id: id++ });
    res.status(200).json(characters);
});


userRouter.delete("/:id", (req, res) => {
    const { id } = req.params;

    const numberId = JSON.parse(id);

    const updatedCharacters = characters.filter(char => char.id !== numberId);

    if (updatedCharacters) {
        while(characters.length) {
            characters.shift();
        };

        for (const char of updatedCharacters) {
            characters.push(char);
        };

        res.status(200).send(characters);
    };

});

module.exports= userRouter