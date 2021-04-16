const mongoose = require('mongoose');

const URI = 'mongodb+srv://max:<max>@cluster0.f7ino.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
