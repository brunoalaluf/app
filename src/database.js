const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-tasks';
// CONECTAR CON BASE DE DATOS
//mongoose.connect('mongo "mongodb+srv://cluster0.cd7ks.mongodb.net/myFirstDatabase" --username max');
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;