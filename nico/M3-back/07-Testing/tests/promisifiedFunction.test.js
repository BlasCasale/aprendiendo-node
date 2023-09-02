const {promisifiedFunction} = require('../index')

beforeAll(() => {
    console.log("Me conecto a una BDD a la que le pediré información");
});


afterAll(() => {
    console.log("Me desconecto de la BDD");
});

xdescribe("La función promisifiedFunction", () => {

    it("Debe resolver al valor de Ok", () => {
        return promisifiedFunction()
            .then((res) => expect(res).toEqual("Ok"));
    });
});