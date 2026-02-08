async function generateSidebar() {
    const response = await fetch('menu.json');
    const data = await response.json();
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        // Insère le bandeau au-dessus de la sidebar
        sidebar.insertAdjacentHTML('beforebegin', '<div class="site-top-banner">Les blockhaus lyssois</div>');

        // Contenu de la sidebar (structure claire : ressources + actions)
        let html = '<div class="menu-wrap">';
        html += '<div class="menu-resources"><h3>Ressources :</h3>';

        // Génération des boutons de ressources
        data.ressources.forEach(item => {
            const target = item.external ? 'target="_blank"' : '';
            html += `<a href="${item.link}" ${target}><button>${item.label}</button></a>`;
        });

        html += '</div>'; // ferme .menu-resources

        // Génération des boutons d'action dans leur propre conteneur
        html += '<div class="menu-actions">';
        data.actions.forEach(item => {
            const target = item.external ? 'target="_blank"' : '';
            html += `<a href="${item.link}" ${target}><button>${item.label}</button></a>`;
        });
        html += '</div>'; // ferme .menu-actions

        html += '</div>'; // ferme .menu-wrap

        sidebar.innerHTML = html;
    }
}

document.addEventListener('DOMContentLoaded', generateSidebar);