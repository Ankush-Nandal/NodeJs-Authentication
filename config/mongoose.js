const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/auth_db');


mongoose.connect('mongodb+srv://Ankush-Nandal:SCgfLrK04ggeI9PJ@cluster0.pcz4rwn.mongodb.net/test?retryWrites=true&w=majority');


//acquire the connection
const db = mongoose.connection;


//error
db.on('error', console.error.bind(console, 'error in connecting to db'));

//up and running
db.once('open', function() {
    console.log("successfully connected to the database");
});