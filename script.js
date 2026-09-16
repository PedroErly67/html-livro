const bodyApp = document.getElementById('body-app');

// Mapeamento das transições: [botão, tela atual, próxima tela, tema do body]
const pages = [
  { btn: 'btn-iniciar', atual: 'inicio', proximo: 'cap1', tema: 'tema-cap1' },
  { btn: 'btn-cap1',    atual: 'cap1',   proximo: 'cap2', tema: 'tema-cap2' },
  { btn: 'btn-cap2',    atual: 'cap2',   proximo: 'cap3', tema: 'tema-cap3' },
  { btn: 'btn-cap3',    atual: 'cap3',   proximo: 'cap4', tema: 'tema-cap4' },
  { btn: 'btn-cap4',    atual: 'cap4',   proximo: 'cap5', tema: 'tema-cap5' },
  { btn: 'btn-cap5',    atual: 'cap5',   proximo: 'inicio', tema: 'tema-inicio' },
  { btn: 'voltar',    atual: 'cap1',   proximo: 'inicio', tema: 'tema-inicio' },
  { btn: 'voltar',    atual: 'cap2',   proximo: 'inicio', tema: 'tema-inicio' },
  { btn: 'voltar',    atual: 'cap3',   proximo: 'inicio', tema: 'tema-inicio' },
  { btn: 'voltar',    atual: 'cap4',   proximo: 'inicio', tema: 'tema-inicio' },
  { btn: 'voltar',    atual: 'cap5',   proximo: 'inicio', tema: 'tema-inicio' },
];

// Troca de tela
pages.forEach(passo => {
  const botao = document.getElementById(passo.btn);
  
  if (botao) {
    botao.addEventListener('click', () => {
      // 1. Esconde a tela atual
      const telaAtual = document.getElementById(passo.atual);
      if (telaAtual) telaAtual.classList.add('esc');

      // 2. Mostra a próxima tela
      const proximaTela = document.getElementById(passo.proximo);
      if (proximaTela) proximaTela.classList.remove('esc');
      
      // 3. Atualiza o tema do body sem apagar outras classes fixas (se houver)
      bodyApp.className = passo.tema;
    });
  }
});