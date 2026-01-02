document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = e.target[0].value;
    const email = e.target[1].value;
    
    // Simulation d'enregistrement
    alert("Félicitations " + user + " ! Votre accès à l'Empire BabiCoin est en cours de déploiement sur le réseau mondial.");
    
    // Redirection vers le dashboard après 2 secondes
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 2000);
});
