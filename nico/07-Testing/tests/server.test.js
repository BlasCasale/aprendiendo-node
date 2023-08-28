const request = require('supertest');
const server = require('../server');

const array = [
    {
        id: 1,
        name: "Blas"
    },
    {
        id: 2,
        name: "Agostina"
    },
    {
        id: 3,
        name: "Nico"
    }
];

describe("El servidor que levantamos recien", () => {

    it("Debe responder con un status 200 al hacer una req GET a '/' ", async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toEqual(200);
    });

    it("Debe responder con un status 404 al hacer una req GET a '/sarasa' ", async () => {
        const response = await request(server).get('/sarasa');
        expect(response.statusCode).toEqual(404);
    });

    it("Debe enviar información de los alumnos al hacer req GET a '/students' ", async () => {
        const response = await request(server).get('/students');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(array);
    });
});