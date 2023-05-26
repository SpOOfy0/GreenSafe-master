function listenConnexion() {
    // Récupérer les valeurs des champs email et mot de passe
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Envoi des données au serveur
    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
      // Traitement de la réponse du serveur
      if (data.success) {
        // Connexion réussie, redirection vers la page principale, sauvegarder le token et les informations utilisateur dans le localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = 'Accueil.html';
      } else {
        // Affichage d'un message d'erreur
        alert('Identifiants incorrects');
      }
    })
    .catch(error => {
      console.error('Une erreur s\'est produite :', error);
    });
  }
  