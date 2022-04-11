const { dbconnect } = require("../utils");
const { ObjectId } = require('mongodb');
const { PROFILE_CLIENT } = require('../utils/constantes');

async function creationCommande(utilisateur, params) {
    console.log(utilisateur);
    if(!utilisateur.id_profile.equals(PROFILE_CLIENT))
        throw new Error("Pas d'autorisation");
    var db = await dbconnect.getDb();
    var commandeCollection = db.collection("commande");
    console.log(params);
    var result = await commandeCollection.insertOne({
        dateCommande: new Date(),
        id_client: new ObjectId(params.id_client),
        detailCommande: params.detailsCommande,
        etat : params.etat
    });
    return result.insertedId;
}



module.exports = { creationCommande };
