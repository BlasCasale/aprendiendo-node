const app = require('./src/app');
const PORT = 8001;
const { db } = require('./db');
// const { User } = require('./db'); => me traigo este solo para sincronizarlo

app.listen(PORT, async () => {
    console.log(`Escuchando en el puerto http://localhost:${PORT}`);
    await db.sync({ force: false }); // con esto sincroniza todas las tablas que tenga
    // await User.sync();
});


/*
Para modificar models (tablas)
{ force: true } => (reset) => busca y hace DROP(delete) a todas las tablas y vuelve a crearse las tablas segun lo que tengamos aca

Para crear datos, eliminar y modificar datos
{ force: false } => mantiene todo igual y persistente 

Intermedio entre los dos
{ alter: true } => (update) => tabla name, edad y agrega email (ej) y no pierdo datos
*/