// Alternar entre Modo Claro e Modo Escuro
const themeToggleBtn = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeText.textContent = 'Modo Claro';
    } else {
        themeText.textContent = 'Modo Escuro';
    }
});

// Função para Curitir (Coração ❤️)
function handleLike(button) {
    const countSpan = button.querySelector('.count');
    let currentCount = parseInt(countSpan.textContent);
    
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        countSpan.textContent = currentCount - 1;
    } else {
        button.classList.add('liked');
        countSpan.textContent = currentCount + 1;
        
        // Se o botão de deslike estiver marcado no mesmo post, desmarca ele automaticamente
        const parentActions = button.parentElement;
        const dislikeBtn = parentActions.querySelector('.dislike-btn');
        if (dislikeBtn.classList.contains('disliked')) {
            handleDislike(dislikeBtn);
        }
    }
}

// Função para Descurtir (Joia para baixo 👎)
function handleDislike(button) {
    const countSpan = button.querySelector('.count');
    let currentCount = parseInt(countSpan.textContent);
    
    if (button.classList.contains('disliked')) {
        button.classList.remove('disliked');
        countSpan.textContent = currentCount - 1;
    } else {
        button.classList.add('disliked');
        countSpan.textContent = currentCount + 1;
        
        // Se o botão de curtir estiver marcado no mesmo post, desmarca ele automaticamente
        const parentActions = button.parentElement;
        const likeBtn = parentActions.querySelector('.like-btn');
        if (likeBtn.classList.contains('liked')) {
            handleLike(likeBtn);
        }
    }
}