// Alternar entre Modo Claro e Modo Escuro
const themeToggleBtn = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeText.textContent = document.body.classList.contains('dark-mode') 
            ? 'Modo Claro' 
            : 'Modo Escuro';
    });
}

// Função para Curtir (❤️)
function handleLike(button) {
    const postActions = button.closest('.post-actions');
    const likeCountSpan = button.querySelector('.count');
    const dislikeBtn = postActions.querySelector('.dislike-btn');
    const dislikeCountSpan = dislikeBtn.querySelector('.count');

    let currentLikes = parseInt(likeCountSpan.textContent);
    let currentDislikes = parseInt(dislikeCountSpan.textContent);

    // Se já estava curtido, remove a curtida
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        likeCountSpan.textContent = currentLikes - 1;
    } else {
        // Adiciona a curtida
        button.classList.add('liked');
        likeCountSpan.textContent = currentLikes + 1;

        // Se o deslike estava ativo, cancela o deslike
        if (dislikeBtn.classList.contains('disliked')) {
            dislikeBtn.classList.remove('disliked');
            dislikeCountSpan.textContent = currentDislikes - 1;
        }
    }
}

// Função para Descurtir (👎)
function handleDislike(button) {
    const postActions = button.closest('.post-actions');
    const dislikeCountSpan = button.querySelector('.count');
    const likeBtn = postActions.querySelector('.like-btn');
    const likeCountSpan = likeBtn.querySelector('.count');

    let currentLikes = parseInt(likeCountSpan.textContent);
    let currentDislikes = parseInt(dislikeCountSpan.textContent);

    // Se já estava descurtido, remove o deslike
    if (button.classList.contains('disliked')) {
        button.classList.remove('disliked');
        dislikeCountSpan.textContent = currentDislikes - 1;
    } else {
        // Adiciona o deslike
        button.classList.add('disliked');
        dislikeCountSpan.textContent = currentDislikes + 1;

        // Se a curtida estava ativa, cancela a curtida
        if (likeBtn.classList.contains('liked')) {
            likeBtn.classList.remove('liked');
            likeCountSpan.textContent = currentLikes - 1;
        }
    }
}