const uuid = require("uuid");

let recenzieRepository = require("../repository/RecenzieRepository");

module.exports.getAllRcenzii = () => {
    const recenziiList = recenzieRepository.readJSONFile();
    return recenziiList;
}

module.exports.addRecenzie = (newRecenzie) => {
    //aduc un arry cu toate recenziile deja existente in db.json
    const recenziiList = recenzieRepository.readJSONFile();
    //creez o recenzie noua folosind datele venite din frontend pe body
    newRecenzie.id = uuid.v4.apply();

    //introducem recenzia noua in lista tuturor 
    recenziiList.push(newRecenzie)
    //suprascriu db.json cu noua lista de recenzii
    recenzieRepository.writeJSONFile(recenziiList);

    return newRecenzie;
}

module.exports.getRecenzieById = (id) => {
    const recenziiList = recenzieRepository.readJSONFile();
    let foundRecenzie = null;
    recenziiList.forEach(recenzie => {
        if(recenzie.id === id) {
            foundRecenzie = recenzie;
        }
    })
    return foundRecenzie;
}

module.exports.getRecenzieByUser = (user) => {
    const recenziiList = recenzieRepository.readJSONFile();
    let foundRecenzie = null;
    recenziiList.forEach(recenzie => {
        if(recenzie.user === user) {
            foundRecenzie = recenzie;
        }
    })
    return foundRecenzie;
}

module.exports.updateRecenzie = (id, recenzie) => {
    const recenziiList = recenzieRepository.readJSONFile();
    let updateRecenzie = null;
    for(let i = 0; i < recenziiList.length; i++) {
        if(recenziiList[i].id === id) {
            //in cazul in care cainele este gasit, ii actualizam datele
            if(recenzie.user) {
              recenziiList[i].user = recenzie.user;
            }
  
            if(recenzie.recenzie) {
                recenziiList[i].recenzie = recenzie.recenzie;
            }
            updateRecenzie = recenziiList[i];
            break;
        }
    }
    //rescriem db.json cu datele cainelui actualizate;
    recenzieRepository.writeJSONFile(recenziiList);
    return updateRecenzie;
}

module.exports.deleteRecenzie = (id) => {
    const recenziiList = recenzieRepository.readJSONFile();
    let checkIfRecenzieExists = false;
    for(let i = 0; i < recenziiList.length; i++) {
        if(recenziiList[i].id === id) {
            checkIfRecenzieExists = true;
            //sterg cinele de pe pozitia i
            // splice sterge de la indexul i atatea elemente cate indica al doilea argument
            recenziIList.splice(i, 1);
            break;
        }
    }
    recenzieRepository.writeJSONFile(recenziIList);
    return checkIfRecenzieExists;
}