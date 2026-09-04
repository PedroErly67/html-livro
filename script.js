const bodyApp = document.getElementById('body-app');

// Mapeamento das transições: [id atual, proximo id, tema body]
const pages = [
  { btn: 'btn-iniciar', atual: 'inicio', proximo: 'cap1', tema: 'tema-cap1' },
  { btn: 'btn-cap1',    atual: 'cap1',   proximo: 'cap2', tema: 'tema-cap2' },
  { btn: 'btn-cap2',    atual: 'cap2',   proximo: 'cap3', tema: 'tema-cap3' },
  { btn: 'btn-cap3',    atual: 'cap3',   proximo: 'cap4', tema: 'tema-cap4' },
  { btn: 'btn-cap4',    atual: 'cap4',   proximo: 'cap5', tema: 'tema-cap5' },
  { btn: 'btn-cap5',    atual: 'cap5',   proximo: 'inicio', tema: 'tema-inicio' }
];

//troca de tela
pages.forEach(passo => {
  const botao = document.getElementById(passo.btn);
  
  if (botao) {
    botao.addEventListener('click', () => {
      // esconde a tela atual e mostra a próxima
      document.getElementById(passo.atual).classList.add('esc');
      document.getElementById(passo.proximo).classList.remove('esc');
      
      // atualiza o fundo e das paginas
      bodyApp.className = passo.tema;
    });
  }
});
