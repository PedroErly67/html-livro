// Seleciona os elementos do HTML pelos IDs
const btninicLer = document.getElementById('btninic-ler');
const inicio = document.getElementById('inicio');
const pagUm = document.getElementById('pagUm');

// Evento de clique usando os nomes exatos das variáveis declaradas acima
btninicLer.addEventListener('click', () => {
  // Oculta a tela inicial
  inicio.classList.add('esc');
  
  // Exibe a tela "pagUm"
  pagUm.classList.remove('esc');
});
