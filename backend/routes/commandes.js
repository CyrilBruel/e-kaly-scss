const express = require("express");
const { ObjectId } = require('mongodb');
const { commandeService, authService, ekalyService } = require("../services");
const { responseBuilder, tools } = require("../utils");
const router = express.Router();

router.post("/", async function (req, res) {
    try {
        await authService.isValidToken(req.headers.authorization, 1);
        commandeService
            .creationCommande(req.body)
            .then((result) => {
                res.json(responseBuilder.success(result));
            })
            .catch((error) => {
                res.json(responseBuilder.error(error.message));
            });
    } catch (error) {
        res.json(responseBuilder.error(error.message));
    }
});


router.get('/:pageNumber/:nPerPage/:id_restaurant', async function(req, res){
    const token = tools.extractToken(req.headers.authorization);
    const tokenUtilisateur = await authService.findTokenUser(token);
    var params = {crt: { "detailCommande.produit.id_restaurant": new ObjectId(req.params.id_restaurant) }, pageNumber: Number(req.params.pageNumber), nPerPage: Number(req.params.nPerPage)};
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

router.post('/commander', async function(req, res){
    try{
        const token = tools.extractToken(req.headers.authorization);
        const tokenUtilisateur = await authService.findTokenUser(token);
        // console.log(req.body.data);
        const result = await commandeService.creationCommande(tokenUtilisateur, req.body.data);
        res.json(responseBuilder.success(result));
    } catch(error){
        res.json(responseBuilder.error(error.message));
    }
});



module.exports = router;
