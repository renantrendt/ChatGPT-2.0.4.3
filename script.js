// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Quando a página carregar, verifique se já existe alguma nota salva
    const notaSalva = localStorage.getItem('minhaNota');
    if (notaSalva) {
        document.getElementById('notepad').value = notaSalva;
    }
});

function salvarNota() {
    // Salvar a nota no armazenamento local quando o botão é clicado
    const nota = document.getElementById('notepad').value;
    localStorage.setItem('minhaNota', nota);
}
