const express = require("express");
const { ObjectId } = require("mongodb");
const { restaurantService, authService, produitsService } = require("../services");
const { responseBuilder, tools } = require("../utils");
const router = express.Router();

router.get("/", async function (req, res) {
    try {
        // await authService.isValidToken(req.headers.authorization, 1);
        const token = tools.extractToken(req.headers.authorization);
        await authService.findTokenUser(token);
        restaurantService
            .findRestaurants(req.body)
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

router.get("/plats/:pageNumber/:nPerPage/:id_restaurant", async function (req, res) {
    try {
        var body = {
            crt : { id_restaurant : new ObjectId(req.params.id_restaurant) },
            pageNumber : Number(req.params.pageNumber),
            nPerPage : Number(req.params.nPerPage),
            search: ""
        };
        const token = tools.extractToken(req.headers.authorization);
        await authService.findTokenUser(token);
        produitsService
            .findProduits(body)
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

module.exports = router;
