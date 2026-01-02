document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // On récupère les infos saisies
    const username = e.target[0].value;
    const email = e.target[1].value;
    
    // On simule une sauvegarde et on affiche un message de puissance
    alert("BIENVENUE DANS L'EMPIRE, " + username.toUpperCase() + " !\n\nVotre compte est en cours d'activation sur la blockchain mondiale.\nRedirection vers votre coffre-fort...");
    
    // On envoie l'utilisateur vers son tableau de bord (dashboard)
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 2000);
});
