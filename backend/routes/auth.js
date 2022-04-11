const express = require("express");
const { authService, ekalyService } = require("../services");
const { responseBuilder, tools } = require("../utils");
const { ObjectId } = require('mongodb');
const router = express.Router();

router.post("/sign-up", async function (req, res) {
    console.log(req.body.utilisateur);
    authService
        .inscription(req.body.utilisateur)
        .then((result) => {
            res.json(responseBuilder.success(result));
        })
        .catch((error) => {
            res.json(responseBuilder.error(error.message));
        });
});

router.post("/login", async function (req, res) {
    console.log(req.body);
    authService
        .login(req.body.nomUtilisateur, req.body.mdp)
        .then((result) => {
            console.log(result);
            res.json(responseBuilder.success(result));
        })
        .catch((error) => {
            res.json(responseBuilder.error(error.message));
        });
});

router.get("/logout", async function (req, res) {
    try {
        const token = tools.extractToken(req.headers.authorization);
        await authService.logout(token);
        res.json(responseBuilder.success("Utilisateur déconnecté"));
    } catch (error) {
        res.json(responseBuilder.error(error.message));
    }
});

router.get('/commandes/:pageNumber/:nPerPage/:id_client', async function(req, res){
    const token = tools.extractToken(req.headers.authorization);
    const tokenUtilisateur = await authService.findTokenUser(token);
    var params = {crt: { "id_client": new ObjectId(req.params.id_client) }, pageNumber: Number(req.params.pageNumber), nPerPage: Number(req.params.nPerPage)};
    ekalyService
    .getCommandes(tokenUtilisateur, params)
    .then((result) => {
        console.log(result);
        res.json(responseBuilder.success(result));
    })
    .catch((error) => {
        res.json(responseBuilder.error(error.message));
    })
});

module.exports = router;
