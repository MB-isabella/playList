 // ================================
    // Função principal: carregar a playlist do localStorage
    // ================================
    function carregarPlaylist() {
        // Recupera a string salva no localStorage e converte para array
        const dadosSalvos = localStorage.getItem('playlist');
        const playlist = dadosSalvos ? JSON.parse(dadosSalvos) : [];
  
        // Limpa a lista antes de renderizar novamente
        const lista = document.getElementById('listaMusicas');
        lista.innerHTML = '';
  
        // Para cada música na playlist, cria um item de lista (li)
        playlist.forEach((musica, index) => {
          const item = document.createElement('li');
          item.textContent = `${musica.nome} - ${musica.artista} - ${musica.album}`;
  
          // Cria um botão para remover a música
          const botaoRemover = document.createElement('button');
          botaoRemover.textContent = 'Remover';
          botaoRemover.onclick = () => removerMusica(index);
  
          // Adiciona o botão ao item e o item à lista
          item.appendChild(botaoRemover);
          lista.appendChild(item);
        });
      }
  
      // ================================
      // Adiciona uma nova música à playlist
      // ================================
      function adicionarMusica() {
        // Recupera os valores digitados nos campos de input
        const nome = document.getElementById('nomeMusica').value.trim();
        const artista = document.getElementById('artistaMusica').value.trim();
        const album = document.getElementById('albumMusica').value.trim();
  
        // Validação: não permite campos vazios
        if (!nome || !artista) {
          alert('Por favor, preencha o nome da música, do artista e do álbum.');
          return;
        }
  
        // Cria um objeto representando a música
        const novaMusica = { nome: nome, artista: artista, album: album};
  
        // Recupera a playlist atual do localStorage
        const dadosAtuais = localStorage.getItem('playlist');
        const playlist = dadosAtuais ? JSON.parse(dadosAtuais) : [];
  
        // Adiciona a nova música à playlist
        playlist.push(novaMusica);
  
        // Salva a playlist atualizada no localStorage
        localStorage.setItem('playlist', JSON.stringify(playlist));
  
        // Limpa os campos de input
        document.getElementById('nomeMusica').value = '';
        document.getElementById('artistaMusica').value = '';
        document.getElementById('albumMusica').value = '';
  
        // Atualiza a exibição da lista
        carregarPlaylist();
      }
  
      // ================================
      // Remove uma música da playlist
      // ================================
      function removerMusica(indice) {
        // Recupera a playlist do localStorage
        const dadosAtuais = localStorage.getItem('playlist');
        const playlist = dadosAtuais ? JSON.parse(dadosAtuais) : [];
  
        // Remove a música no índice informado
        playlist.splice(indice, 1);
  
        // Atualiza o localStorage com a nova lista
        localStorage.setItem('playlist', JSON.stringify(playlist));
  
        // Atualiza a lista na tela
        carregarPlaylist();
      }
  
      // ================================
      // Inicializa a playlist quando a página for carregada
      // ================================
      window.onload = carregarPlaylist;
    
      // ================================
      // Alternância de tema claro/escuro
      // ================================
      document.getElementById('alternarTema').addEventListener('click', function () {
      document.body.classList.toggle('tema-escuro');
    
        // Salvar o estado no localStorage
        const modoClaroAtivo = document.body.classList.contains('tema-escuro');
        localStorage.setItem('modoEscuro', modoEscuroAtivo);
      });

      // ================================
      // Aplicar tema salvo ao carregar a página
      // ================================
      window.onload = function () {
      // Carrega tema
      const modoEscuroSalvo = localStorage.getItem('modoEscuro') === 'true';
      if (modoClaroSalvo) {
        document.body.classList.add('tema-escuro');
      }

      // Carrega playlist
      carregarPlaylist();
};