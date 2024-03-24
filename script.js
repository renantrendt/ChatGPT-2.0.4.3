// script.js

// Função para salvar o conteúdo da textarea no LocalStorage
function salvarNotaAutomaticamente() {
    const nota = document.getElementById('notepad').value;
    localStorage.setItem('minhaNota', nota);
}

// Quando o conteúdo da textarea muda, salva automaticamente
document.getElementById('notepad').addEventListener('input', salvarNotaAutomaticamente);

// Quando a página carrega, carrega a nota salva e coloca na textarea
document.addEventListener('DOMContentLoaded', (event) => {
    const notaSalva = localStorage.getItem('minhaNota');
    if (notaSalva) {
        document.getElementById('notepad').value = notaSalva;
    }
});
