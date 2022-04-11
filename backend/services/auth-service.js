const { dbconnect } = require("../utils");
const sha1 = require("sha1");
const moment = require("moment");
const profileService = require('./profile-service');
const { tools } = require("../utils");
const { ObjectId } = require("mongodb");
const { PROFILE_CLIENT } = require("../utils/constantes");

async function isValidToken(authorization, code){
    const error = new Error(`Vous n'avez pas d'authorisation, code: ${code}`);
    if (!authorization) throw error;
    const db = await dbconnect.getDb();
    const tokenExtract = tools.extractToken(authorization);
    console.log(tokenExtract);
    const token = await db.collection("token").findOne({ token: tokenExtract });
    const utilisateur = await db.collection("utilisateur").findOne({ _id: token?.id_utilisateur });
    const profile = await db.collection("profile").findOne({ _id: utilisateur?.id_profile });
    const isValid = (token && utilisateur && profile && profile?.code === code);
    if (!isValid) throw error;
}

async function inscription(utilisateur) {
    var db = await dbconnect.getDb();
    //const client = await profileService.clientProfile(db, 1);
    var tokenCollection = db.collection("utilisateur");
    await tokenCollection.insertOne({
        nomUtilisateur: utilisateur.nomUtilisateur,
        mdp: sha1(utilisateur.mdp),
        nom: utilisateur.nom,
        prenom: utilisateur.prenom,
        id_profile: new ObjectId("62516f2053388b7f31ab4aef")
    });
    return login(utilisateur.nomUtilisateur, utilisateur.mdp, db);
}

async function getCommandes(utilisateur, params){
    if(!utilisateur.id_profile.equals(PROFILE_CLIENT))
        throw new Error("Pas d'autorisation");
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

async function saveToken(db, utilisateur) {
    var token = sha1(
        utilisateur._id +
            utilisateur.mdp +
            moment().format("YYYY-MM-DD HH:mm:ss.SSS")
    );
    var tokenCollection = db.collection("token");
    await tokenCollection.insertOne({
        id_utilisateur: utilisateur._id,
        token: token,
        date_expiration: moment().add(1, "h").toDate(),
        id_profile: utilisateur.id_profile
    });
    return token;
}

async function login(nomUtilisateur, mdp, db) {
    if (db === undefined) db = await dbconnect.getDb();
    var uCollection = db.collection("utilisateur");
    var utilisateur = await uCollection.findOne({
        nomUtilisateur,
        mdp: sha1(mdp),
    });
    if (!utilisateur) {
        throw new Error("nom d'utilisateur ou mot de passe invalide");
    }
    var token = await saveToken(db, utilisateur);
    var result = {
        token: token,
        id_utilisateur: utilisateur._id,
        id_profile: utilisateur.id_profile,
    };

    return result;
}

async function logout(token) {
    var db = await dbconnect.getDb();
    var tokenCollection = db.collection("token");
    await tokenCollection.deleteOne({ token: token });
}

async function findTokenUser(token){
    var db = await dbconnect.getDb();
    var tokenCollection = db.collection('token');
    var result = await tokenCollection.findOne({token: token, date_expiration: {$gte: new Date()}});
    if(!result) throw new Error("InvalidToken");
    return result;
}

async function getUtilisateurByProfile(params){
    var db = await dbconnect.getDb();
    var produitCollection = db.collection('Utilisateur');
    var produits = await produitCollection
        .find({...params.crt})
        .toArray();
    return produits;
}

module.exports = {login, logout, getUtilisateurByProfile, inscription, isValidToken, findTokenUser}