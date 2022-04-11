const {dbconnect} = require('../utils');
const { ObjectId } = require('mongodb');
const { PROFILE_RESTAURANT, PROFILE_EKALY } = require('../utils/constantes');

/**la structure des données concorde avec ce qui est dans la base de donnée. 
 * nous allons prendre comme exemple la fonction createRestaurant(params) qui est souvent appelé par la methode post
 *      params = { restaurant: { _id: "", nom: "", adresse: "", img: "" } }
 *      le type de retour pour cette fonction est souvent vide.
 * nous allons prendre comme exemple la fonction getCommandes(params) qui est souvent appelé par la methode get
 *      findOne => params = { crt: { _id: "value" }, search: "value", pageNumber: 1, nPerPage: 1 }
 *      findMany => params = { crt: {}, search: "", pageNumber: value, nPerPage: value }
*/


/*-----------------------Commande-----------------------*/
/* recuperer une ou plusieurs commande en fonction des parametre*/
async function getCommandes(utilisateur, params){
    // if(!utilisateur.id_profile.equals(PROFILE_RESTAURANT))
    //     throw new Error("Pas d'autorisation");
    const db = await dbconnect.getDb();
    const commandeCollection = db.collection('commande');
    var commandes = await commandeCollection
        .find({...params.crt})
        .skip((params.pageNumber - 1) * params.nPerPage)
        .limit(params.nPerPage)
        .toArray();
        console.log(commandes);
    const utilisateurCollection = db.collection('utilisateur');
    for(let i=0; i<commandes.length; i++){
        var parametresClient = {crt: { _id: commandes[i].id_client }, search: "", pageNumber: 1, nPerPage: 1};
        var parametresLivreur = {crt: { _id: commandes[i].id_livreur }, search: "", pageNumber: 1, nPerPage: 1};
        var client = await utilisateurCollection
        .find({...parametresClient.crt, nom: {$regex: new RegExp(`.*${parametresClient.search}.*`), $options: 'i'}})
        .sort({nom: 1})
        .skip((parametresClient.pageNumber - 1) * parametresClient.nPerPage)
        .limit(parametresClient.nPerPage)
        .toArray();

        var livreur = await utilisateurCollection
        .find({...parametresLivreur.crt, nom: {$regex: new RegExp(`.*${parametresLivreur.search}.*`), $options: 'i'}})
        .sort({nom: 1})
        .skip((parametresLivreur.pageNumber - 1) * parametresLivreur.nPerPage)
        .limit(parametresLivreur.nPerPage)
        .toArray();
        commandes[i].client = client;
        commandes[i].livreur = livreur;
    }
    return commandes;
}

/**modifier une commande */
async function updateCommande(utilisateur, params){
    if(!utilisateur.id_profile.equals(PROFILE_EKALY))
        throw new Error("Pas d'autorisation");
    const db = await dbconnect.getDb();
    var myquery = params.ctr;
    var newValues = { $set: params.commande };
    const commandeCollection = db.collection('commande');
    var etat = await commandeCollection.
    updateOne(myquery, newValues);
    return etat;
}

/*-----------------------Livreur-----------------------*/
/* creer un livreur */
async function createLivreur(utilisateur, params){
    if(!utilisateur.id_profile.equals(PROFILE_EKALY))
        throw new Error("Pas d'autorisation");
    const db = await dbconnect.getDb();
    var myobj = params.livreur;
    const livreurCollection = db.collection('livreur');
    var etat = livreurCollection.insertOne(myobj);
    return etat;
}

/* modifier un livreur */
async function updateLivreur(utilisateur, params){
    if(!utilisateur.id_profile.equals(PROFILE_EKALY))
        throw new Error("Pas d'autorisation");
    const db = await dbconnect.getDb();
    var myquery = params.ctr;
    var newValues = { $set: params.livreur };
    const livreurCollection = db.collection('livreur');
    var etat = await livreurCollection.
    updateOne(myquery, newValues);
    return etat;
}

/* recuperer un ou plusieurs livreur en fonction des parametre */
async function getLivreurs(utilisateur, params){
    if(!utilisateur.id_profile.equals(PROFILE_EKALY))
        throw new Error("Pas d'autorisation");
    const db = await dbconnect.getDb();
    const livreurCollection = db.collection('livreur');
    var produits = await livreurCollection
        .find({...params.crt, nom: {$regex: new RegExp(`.*${params.search}.*`), $options: 'i'}})
        .sort({nom: 1})
        .toArray();
    return produits;
}

/**supprimer un livreur */
async function deleteLivreur(utilisateur, params){
    if(!utilisateur.id_profile.equals(PROFILE_EKALY))
        throw new Error("Pas d'autorisation");
    const db = await dbconnect.getDb();
    var myquery = params.ctr;
    const livreurCollection = db.collection('livreur');
    var etat = await livreurCollection.
    deleteOne(myquery);
    return etat;
}


/*-----------------------Restaurant-----------------------*/
/**creer un restaurant 
*/
async function createRestaurant(utilisateur, params){
    if(!utilisateur.id_profile.equals(PROFILE_EKALY))
        throw new Error("Pas d'autorisation");
    var db = await dbconnect.getDb();
    var myobj = params.restaurant;
    console.log(myobj);
    const restaurantCollection = db.collection('restaurant');
    var etat = restaurantCollection.insertOne(myobj);
    return etat;
}

/**modifier un restaurant 
*/
async function updateRestaurant(utilisateur, params){
    if(!utilisateur.id_profile.equals(PROFILE_EKALY))
        throw new Error("Pas d'autorisation");
    const db = await dbconnect.getDb();
    var myquery = params.ctr;
    var newValues = { $set: params.data };
    const restaurantCollection = db.collection('restaurant');
    var etat = await restaurantCollection.
    updateOne(myquery, newValues);
    return etat;
}

/**recuperer un ou plusieurs restaurant 
*/
async function getRestaurants(params){
    console.log('Hello world');
    const db = await dbconnect.getDb();
    const restaurantCollection = db.collection('restaurant');
    var restaurants = await restaurantCollection
        .find({...params.crt, nom: {$regex: new RegExp(`.*${params.search}.*`), $options: 'i'}})
        .sort({nom: 1})
        .skip((params.pageNumber - 1) * params.nPerPage)
        .limit(params.nPerPage)
        .toArray();
    return restaurants;
}

/**
 * supprimer un restaurant 
*/
async function deleteRestaurant(utilisateur, params){
    if(!utilisateur.id_profile.equals(PROFILE_EKALY))
        throw new Error("Pas d'autorisation");
    const db = await dbconnect.getDb();
    var myquery = params.ctr;
    const restaurantCollection = db.collection('restaurant');
    var etat = await restaurantCollection.
    deleteOne(myquery);
    return etat;
}

/**
 * Benefices
 */
async function getBenefices(utilisateur, params){
    if(!utilisateur.id_profile.equals(PROFILE_EKALY))
        throw new Error("Pas d'autorisation");
    const db = await dbconnect.getDb();
    const restaurantCollection = db.collection('commande');
    var produits = await restaurantCollection
        .aggregate({
            $unwind: "$detailCommande"
        },{
            $unwind: "$detailCommande.produit"
        },{ 
            $group : { 
                 "_id" : params.fieldGroup
                 , 
                  "benefice" : { 
                      $sum : { 
                          $multiply: [ { $subtract: ["$detailCommande.produit.prix", "$detailCommande.produit.cout"] } , .03 ] 
                        } 
                    }
            }
        })
        .skip((params.pageNumber - 1) * params.nPerPage)
        .limit(params.nPerPage)
        .toArray();
    return produits;
}


module.exports = {
    deleteRestaurant, 
    getRestaurants, 
    updateRestaurant, 
    createRestaurant, 
    deleteLivreur, 
    getLivreurs, 
    updateLivreur, 
    createLivreur,
    updateCommande,
    getCommandes,
    getBenefices
};