const mongoose = require('mongoose');

const DatabaseConnection = () => mongoose.connect(process.env.CONNECTION,
    {useNewUrlParser:true},
    {useUnifiedTopology:true},
    )
    .then((data)=> console.log(`Database connected with ${data.connection.host}`))
    .catch((err) => console.log(err.message));


module.exports = DatabaseConnection