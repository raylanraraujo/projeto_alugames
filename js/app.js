function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`); //recupera o elemento pelo ID onde na chamada de função é passado apenas o número
    let imagem = gameClicado.querySelector('.dashboard__item__img'); //recupera o elemento div (imagem) do jogo clicado
    let botao = gameClicado.querySelector('.dashboard__item__button'); // recupera o botão (tag <a>) do jogo clicado
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name'); //recupera o nome do jogo clicado --> foi usado somente para teste. Pode ser apagado

    //eu tinha feito 2 if/else ( um para a image e outro para o botao)
    //mas é possível colocar tudo junto
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {  //para os jogos que estavam alugados
        let confirmarDevolucao = confirm('Deseja realmente devolver?');
        if (confirmarDevolucao == true) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'Alugar'
        }
    } else {    //para os jogos que estavam disponíveis
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver'
    }
}