document.addEventListener('DOMContentLoaded', () => {
    // Service Worker Registration
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/js/sw.js', {
            scope: '/'
        })
        .then(registration => {
            console.log('Service Worker registrado com sucesso:', registration);
            // Verifica se há uma nova versão disponível
            registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        // Nova versão disponível
                        if (confirm('Nova versão da Wiki disponível! Deseja atualizar agora?')) {
                            window.location.reload();
                        }
                    }
                });
            });
        })
        .catch(error => {
            console.error('Falha ao registrar Service Worker:', error);
        });
    }

    // Sidebar category toggle
    const categoryToggles = document.querySelectorAll('#sidebar .category-toggle');
    categoryToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const submenu = toggle.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.classList.toggle('open');
            }
        });
    });

    // Active link highlighting (basic)
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    sidebarLinks.forEach(link => {
        if (link.getAttribute('href').endsWith(currentPath)) {
            link.classList.add('active');
            // Open parent submenu if active link is inside
            let parentSubmenu = link.closest('.submenu');
            if (parentSubmenu) {
                parentSubmenu.classList.add('open');
            }
        }
    });
    const topNavLinks = document.querySelectorAll('#top-nav a');
     topNavLinks.forEach(link => {
        if (link.getAttribute('href').endsWith(currentPath)) {
            link.classList.add('active');
        }
    });


    // PWA Install Button
    let deferredPrompt;
    const installButton = document.getElementById('install-button');

    window.addEventListener('beforeinstallprompt', (e) => {
        // Previne o mini-infobar de aparecer no Chrome
        e.preventDefault();
        // Guarda o evento para que possa ser disparado depois.
        deferredPrompt = e;
        // Atualiza a UI para notificar o usuário que ele pode adicionar à tela inicial
        if (installButton) {
            installButton.style.display = 'block';
        }
    });

    if (installButton) {
        installButton.addEventListener('click', async () => {
            if (deferredPrompt) {
                // Mostra o prompt de instalação
                deferredPrompt.prompt();
                // Espera o usuário responder ao prompt
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response to the install prompt: ${outcome}`);
                // O prompt só pode ser usado uma vez.
                deferredPrompt = null;
                // Esconde o botão de instalação
                installButton.style.display = 'none';
            }
        });
    }
     window.addEventListener('appinstalled', () => {
        console.log('PWA foi instalada');
        if (installButton) {
            installButton.style.display = 'none';
        }
        deferredPrompt = null;
    });

    // Basic Search (Client-Side - Very Simple)
    // Este é um exemplo muito rudimentar. Para uma busca real, você precisaria de algo mais robusto.
    // Ele apenas esconde/mostra itens da lista de navegação da sidebar.
    const searchBar = document.getElementById('search-bar');
    if (searchBar) {
        searchBar.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            const navItems = document.querySelectorAll('#sidebar ul li a'); // Apenas links diretos
            
            navItems.forEach(item => {
                const itemText = item.textContent.toLowerCase();
                const parentLi = item.parentElement;
                if (itemText.includes(term)) {
                    parentLi.style.display = '';
                } else {
                    parentLi.style.display = 'none';
                }
            });
            // Certifique-se de que os toggles de categoria ainda são visíveis se eles não forem links 'a'
            const categoryToggles = document.querySelectorAll('#sidebar .category-toggle');
            categoryToggles.forEach(toggle => {
                const parentLi = toggle.parentElement;
                 if (term === "") { // Se a busca estiver vazia, mostre tudo
                    parentLi.style.display = '';
                } else if (!parentLi.querySelector('a[href*="' + term + '"]')) { // Se nenhum link filho corresponder
                    // A lógica aqui pode precisar ser mais sofisticada para manter a estrutura
                    // Por ora, vamos simplificar e não esconder o toggle em si, apenas os 'a'
                }
            });
        });
    }
});