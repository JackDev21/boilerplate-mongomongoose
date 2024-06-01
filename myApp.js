// Cargar el módulo dotenv para poder usar variables de entorno guardadas en un archivo .env
require('dotenv').config();

// Requerir el módulo mongoose, que es una biblioteca para trabajar con MongoDB
const mongoose = require("mongoose");

// Obtener la URI de conexión a MongoDB desde las variables de entorno
const MONGO_URI = process.env.MONGO_URI;

// Conectar a MongoDB usando la URI obtenida y configurar opciones para evitar advertencias de deprecación
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Crear un esquema de Mongoose que define la estructura de los documentos de Person en la base de datos
const schema = mongoose.Schema;
const personSchema = new schema({
  name: { type: String, require: true }, // El campo 'name' es de tipo String y es requerido
  age: Number, // El campo 'age' es de tipo Number
  favoriteFoods: [String] // 'favoriteFoods' es un arreglo de Strings
});

// Crear un modelo de Mongoose basado en el esquema definido anteriormente
const Person = mongoose.model("Person", personSchema);

// Función para crear y guardar una nueva instancia de Person en la base de datos
const createAndSavePerson = (done) => {
  const newPerson = new Person({
    name: "Jack", // Nombre de la persona
    age: 35, // Edad de la persona
    favoriteFoods: ["rice", "Sushi"] // Comidas favoritas de la persona
  });

  // Guardar la nueva persona en la base de datos y manejar posibles errores
  newPerson.save((error, data) => {
    if (error) {
      return done(error); // Si hay un error, llamar a done con el error
    }
    done(null, data); // Si no hay errores, llamar a done con los datos de la nueva persona
  });
};

// Las demás funciones a continuación siguen un patrón similar:
// toman un callback 'done' y luego deberían realizar una operación de base de datos usando Mongoose.
// Después de la operación, deberían llamar a 'done' con los resultados.

// Función para crear muchas personas en la base de datos
const createManyPeople = (arrayOfPeople, done) => {
  // Lógica para crear muchas personas
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {

  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
