const { MongoClient } = require('mongodb');

//const connectionString = "mongodb://localhost:27017";
const connectionString = "mongodb+srv://crud_tuto:crud_tuto@cluster0.6nvil.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const url= "mongodb://localhost:27017/ekaly"
async function getDb(){
    return MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('ekaly')
        return db;
    })
}

module.exports = {getDb}