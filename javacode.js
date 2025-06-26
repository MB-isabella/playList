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
          item.textContent = `${musica.nome} - ${musica.artista}`;
  
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
  
        // Validação: não permite campos vazios
        if (!nome || !artista) {
          alert('Por favor, preencha o nome da música e do artista.');
          return;
        }
  
        // Cria um objeto representando a música
        const novaMusica = { nome: nome, artista: artista };
  
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