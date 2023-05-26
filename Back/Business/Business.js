const dataL = require("../Data/DataLayer");

const business = {
    
    getCustomers : function () {
        return dataL.getUsers();
    },

    addCustomers : function(customer){
        return dataL.addCustomers(customer);
    },

    connexion : function(email, password){
        return dataL.connexion(email, password)
    }
};

module.exports = business;