var express = require('express');
var router = express.Router();

let recenzieService = require("../service/RecenzieService");

// Read All
router.get("/recenzii", (req, res) => {
    let recenziiList = recenzieService.getAllRecenzii()
    if(recenziiList != undefined && recenziiList.length != 0) {
        res.status(200).send(recenziiList);
    } else {
        res.status(404).send("No recenzii found!");
    }
});

// Create
router.post("/recenzii", (req, res) => {
    let newRecenzie = recenzieService.addRecenzie(req.body);
    //trimit raspuns catre frontend ca totul a fost ok
    res.status(200).send(newRecenzie);
});

// Read One
router.get("/recenzii/:id", (req, res) => {
    let id = req.params.id;
    let recenzie = recenzieService.getRecenzieById(id)
    if(recenzie === null) {
        res.status(404).send("No recenzie found!");
    } else {
        res.status(200).send(recenzie);
    }
});

router.get("/recenziI/user/:user", (req, res) => {
    let user = req.params.user;
    let recenzie = recenzieService.getRecenzieByUser(user);
    if(recenzie === null) {
        res.status(404).send("No recenzie found!");
    } else {
        res.status(200).send(recenzie);
    }
})


// Update
router.put("/recenziI/:id", (req, res) => {
    //iau id-ul recenziei pe care verau sa o actualizez
    let id = req.params.id;
    let recenzie = recenzieService.updateRecenzie(id, req.body);
    if(recenzie !== null) {
        res.status(200).send(recenzie);
    } else {
        //trimitem exception 404 not found
        res.status(404).send("No recenzie found!");
    }
});

// Delete
router.delete("/recenzii/:id", (req, res) => {
    let id = req.params.id;
    let deleteFlag = recenzieService.deleteRecenzie(id);
    if(deleteFlag === true) {
        res.status(200).send("recenzie deleted!");
    } else {
        res.status(404).send("recenzie not found!");
    }
});

module.exports = router;