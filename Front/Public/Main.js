function checkAuthentication() {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    else{
        return false
    }

  }



  function deconnexion() {
    // Supprimer le token et les informations utilisateur du localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'Accueil.html';
  }