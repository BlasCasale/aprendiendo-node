const { sumar } = require('../index');

beforeEach(() => {
    console.log("Esto lo hago antes de cada test");
});

xdescribe("La función sumar", () => {
    it("Debe ser una función", () => {
        expect(typeof sumar).toBe("function");
        expect(typeof sumar).not.toBe("number");
    });

    // en este caso tengo que probar las diferentes cosas que pueden llegar y demas para ver donde puede haber errores y sanearlos antes
    it("Debe arrojar un error en caso de recibir algo que no sea un número", () => {
        expect(() => sumar("holis", "tukis").toThrow("Los parametros deben ser números"));
        expect(() => sumar(5, "tukis").toThrow("Los parametros deben ser números"));
        expect(() => sumar("holis", 10).toThrow("Los parametros deben ser números"));
    });

    it("Debe retornar el resultado de la suma correctamente", () => {
        expect(() => sumar(2, 10).toBe(12));
        expect(() => sumar(0, 10).toBe(10));
        expect(() => sumar(2, 1).toBe(3));
        expect(() => sumar(5, 60).toBe(65));
        expect(() => sumar(30, 6).toBe(36));
        expect(() => sumar(10, -10).toBe(0));
    });
});