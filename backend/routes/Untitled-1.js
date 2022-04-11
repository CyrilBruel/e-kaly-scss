const { ekaly } = require("../../routes");

db.getCollection("commande").aggregate({
        $unwind: "$detailCommande"
    },{
        $unwind: "$detailCommande.produit"
    },{ 
        $group : { 
             "_id" : ""
             , 
              "total" : { 
                  $sum : { 
                      $multiply: [ { $subtract: ["$detailCommande.produit.prix", "$detailCommande.produit.cout"] } , .03 ] 
                    } 
                }
        }
    }
);

db.getCollection("commande").find({ "detailCommande.produit.cout": 12000 });

db.getCollection("andrana").aggregate({
    $unwind: "$arr"
}, {
    $unwind: "$arr.votes"
}, {
    $group: {
        "_id": {
            "_id": "$_id",
            "arrId": "$arr._id",
            "mallId": "$arr.votes.mallId"
        },
        "totalCount": {
            $sum: "$arr.votes.count"
        }
    }
});