const fs = require("fs");

// Functia de citire din fisierul db.json
function readJSONFile() {
    return JSON.parse(fs.readFileSync("db.json"))["recenzii"];
  }
  
  // Functia de scriere in fisierul db.json
  function writeJSONFile(content) {
    fs.writeFileSync(
      "db.json",
      JSON.stringify({ recenzii: content }),
      "utf8",
      err => {
        if (err) {
          console.log(err);
        }
      }
    );
  }