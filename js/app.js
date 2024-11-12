function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`); //recupera o elemento pelo ID onde na chamada de função é passado apenas o número
    let imagem = gameClicado.querySelector('.dashboard__item__img'); //recupera o elemento div (imagem) do jogo clicado
    let botao = gameClicado.querySelector('.dashboard__item__button'); // recupera o botão (tag <a>) do jogo clicado
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name'); //recupera o nome do jogo clicado

    alert(nomeJogo.textContent) //configura um alerta que retorna o texto da tag
}

