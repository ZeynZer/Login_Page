// Ajoute un bouton de déconnexion
const logoutBtn = document.createElement('button');
logoutBtn.textContent = "Se déconnecter";
logoutBtn.className = "neumorphic neumorphic-button";
document.body.appendChild(logoutBtn);

logoutBtn.addEventListener('click', function() {
    // Supprimer le nom d'utilisateur du localStorage
    localStorage.removeItem('username');
    // Rediriger vers la page de login
    window.location.href = "index.html";
});
