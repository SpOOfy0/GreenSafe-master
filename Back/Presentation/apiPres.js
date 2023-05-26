const express = require("express");
const business = require("../Business/Business");
const cors =require("cors");
const bodyParser = require("body-parser");


const app = express();


const apiServ = {

    start : function(port) {

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(cors());

        app.use(function(req,res,next){
            res.header("Access-Control-Allow-Origin","*");
            next();
        });

        app.post("/api/customers", async function(req, res) {
            const cours = Array(5).fill(0);
            // Préparation du nouveau client
            const newCustomer ={
                email : req.body.email,
                password : req.body.password,
                first : req.body.first,
                last : req.body.last,
                cours : cours,
            };
            // Ajout du client
            res = business.addCustomers(newCustomer);
        });

        app.post("/api/login", async function(req, res) {
            const email = req.body.email;
            const password = req.body.password;
          
            // Vérification des identifiants dans votre système de gestion des utilisateurs
            const authenticated = business.connexion(email, password);
          
            if (authenticated) {
                const token = 'sample-token';
                const user = { email: email };
                res.json({ success: true, token: token, user: user });
            } else {
              // Identifiants incorrects
              res.json({ success: false });
            }
          });

        app.listen(port, function(){ console.log("Serveur lancé sur le port " +port);});
    }
};


module.exports = apiServ;