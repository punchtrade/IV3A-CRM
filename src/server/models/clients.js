const bcrypt = require("bcrypt");
const { mongoConnection } = require("./connection");

function addClient (clientData) {
    return new Promise (async (resolve, reject) => {
        try {
            let checkClientData = await checkIfClientExists ({
                email: clientData.email});
            if (checkClientData.data && checkClientData.data.length > 0) {
                return resolve ({
                    error:true,
                    message: "l'utilisateur existe déjè avec ces identifiants. Veuillez vous connecter",
                    data: [],
                });
            }
            mongoConnection
                .collection("clients")
                .insertOne(clientData, async(err, results) => {
                    if (err) {
                        console.log(err);
                        throw new Error (err);
                    }
                    resolve({
                        error: false,
                        data: results.ops[0],
                    });
                });
        } catch (e) {
            reject(e);
        }
    });
}

// verifyClient 

function verifyClient(userData) {
    return new Promise(async (resolve, reject) => {
      try {
        let userDatafromDb = await checkIfClientExists({ email: userData.email });
        if (userDatafromDb.data && userDatafromDb.data.length > 0) {
          // user already exists, verify the telephone
          let telephoneVerification = await bcrypt.compare(
            userData.telephone,
            userDatafromDb.data[0].telephone
          );
          if (!telephoneVerification) {
            // telephone mismatch
            return resolve({
              error: true,
              message: "Email ou numéro de téléphone non valide",
              data: [],
            });
          }
   // telephone verified
   return resolve({ error: false, data: userDatafromDb.data[0] });
} else {
  return resolve({
    error: true,
    message:
      "Aucun utilisateur n'existe avec ces identifiants. Veuillez créer un nouveau compte.",
    data: [],
  });
}
} catch (e) {
console.log(e);
reject(e);
}
});
}

// checkIfUserExists

function checkIfClientExists(userData) {
    return new Promise((resolve, reject) => {
      try {
        // check if user exists
        mongoConnection
          .collection("clients")
          .find({ email: userData.email })
          .toArray((err, results) => {
            if (err) {
              console.log(err);
              throw new Error(err);
            }
            resolve({ error: false, data: results });
          });
      } catch (e) {
        reject(e);
      }
    });
  }

  module.exports = {
    addClient: addClient,
    verifyClient: verifyClient,
  };