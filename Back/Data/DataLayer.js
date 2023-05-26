const fs = require("fs");

const fichier = "./Data/Users.json";

let dataLayer = {

    getUsers : function (){
        const users = fs.readFileSync(fichier);
        const tableau = JSON.parse(users);
        return tableau;
    },

    addCustomers : function(newCustomer){
        // Lit le fichier JSON et ajoute à un client
        let data = fs.readFileSync(fichier, "utf-8");
        let added = JSON.parse(data);
        added.push(newCustomer);
        // Enregistre le fichier JSON
        fs.writeFileSync(fichier, JSON.stringify(added), (error) => {
            if(error) throw error;
        });
    },

    connexion : function(email, password){
        let tableau = JSON.parse(fs.readFileSync(fichier, "utf-8"));

        const user = tableau.find(c => c.email == email);

        if (user && user.password === password) {
            // Mot de passe correct, l'utilisateur est authentifié
            return true;
        }
        
        // Email ou mot de passe incorrect
        return false;
    },

};

module.exports =dataLayer;
