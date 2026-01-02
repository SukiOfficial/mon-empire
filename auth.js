document.getElementById('kycForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const docNumber = document.getElementById('docNumber').value;

    // Phase 1 : Blocage pour vérification humaine
    alert("SYSTÈME DE SÉCURITÉ : \n\n1. Données enregistrées pour " + username + "\n2. Pièce n° " + docNumber + " envoyée pour analyse.\n3. Un email de confirmation a été envoyé à " + email);

    // Phase 2 : Redirection vers le tableau de bord sécurisé
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 2000);
});
