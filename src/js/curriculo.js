// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona os elementos
    const form = document.getElementById('cvForm');
    const formCard = document.getElementById('form-card');
    const successCard = document.getElementById('success-card');

    // Adiciona o evento de envio (submit) ao formulário
    form.addEventListener('submit', function(event) {
        
        // 1. Previne o comportamento padrão (que seria recarregar a página)
        event.preventDefault();

        // Aqui você poderia capturar os dados se quisesse salvar no futuro
        // Exemplo: const nome = document.getElementById('nome').value;

        // 2. Simula um "envio" escondendo o formulário e mostrando o sucesso
        formCard.style.display = 'none';     // Esconde o formulário
        successCard.style.display = 'block'; // Mostra a mensagem de sucesso
        
        // Opcional: Scroll suave para o topo caso a tela seja pequena
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});