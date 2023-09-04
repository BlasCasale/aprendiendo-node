// config del ORM

const { Sequelize, DataTypes } = require('sequelize');
const DB_USER = 'postgres';
const DB_PASS = 'eminem97.';
const DB_PORT = 'localhost:5432';
const DB_NAME = 'socialclub';

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASS}@${DB_PORT}/${DB_NAME}`,
    { logging: false } // esto hace que no nos traiga toda la info de las tablas que tengamos
);

// tengo users disciplines workshops

/*
recibe 3 argumentos sequelize.define("NameModel", 
{atributs}, 
timeStamp(puede estar o no)(para dejar la hora de creacion del dato ingresado))
*/

const Workshops = sequelize.define("Workshop", {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING,
        set(value) {
            const data = this.setDataValue("description", value.toLowerCase());
            return data;
        }
    },
    otra: {
        type: DataTypes.VIRTUAL,
        get() {
            const data = this.getDataValue("name"); // con el this.getDataValue accedo a los datos de mas arriba ("name")
            return data + "siiii";
        }
    }
});

const Disciplines = sequelize.define("Discipline", {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
});


const Users = sequelize.define("User", { // objeto => model => tabla
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true // regex | Validate
        }
    }
});


// { esto va como tercer argumento, sirve para guardar y pedir o no estos datos, se puede cambiar por msj personalizados
//     timestamps: true,
//     createdAt: true,
//     updatedAt: false
// }

const { User, Discipline, Workshop } = sequelize.models; // aca extraemos los modelos creados
// SET
Discipline.hasOne(Workshop); // cada discipline tiene un workshop    work.setDiscipline(idDis)
Workshop.belongsTo(Discipline); // la Foranean Key va en la ultima columna cuando se lo coloca aca
// SET
Workshop.hasMany(User); // un workshop tiene varios user setWorkshop  user.setWorkshop(idWork)
User.belongsTo(Workshop); // y un user tiene un workshop
// ADD
User.belongsToMany(Discipline, { through: 'UserDiscipline' }); // se crea la tabla intermedia UserDiscipline
Discipline.belongsToMany(User, { through: 'UserDiscipline' }); // no importa el orden obvio setUser() addUsers([])

/*
user.addDiscipline(idDis)
user.addDisciplines([varios id])

discipline.addUser(idUser)
discipline.addUsers([varios id])
*/

// sequelize.models.User.create({name, email})

module.exports = {
    ...sequelize.models, // exporto users disciplines workshops
    db: sequelize
};

/*
    sequelize = {
        config
        define      => es una func para crear las tablas con los models
        models: {
            User: {
                name:
                email:
                esto es automatico
                create: func()
                findOne: func()
                findAll: func()
                update: func()
            },
            Discipline: {

            },
            Workshop: {

            }
        }
        sync      => es una func que sincroniza el server y este archivo
    }


    * Relacionar tablas

    - One to one
    User.hasOne(Profile);
    Profile.belongsTo(User);

    - One to many
    Team.hasMany(Player);
    Player.belongsTo(Team);

    - Many to many
    Movie.belongsToMany(Actor, { through: 'ActorMovies'});
    Actor.belongsToMany(Movie, { through: 'ActorMovies'});
*/