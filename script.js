function MudarImagem(){
    console.log(aux);
    switch (aux){
        case 0:
        imagem.src = 'exemplo1.jpg';
        aux++;
        break;
        case 1:
        imagem.src = 'exemplo2.jpg';
        aux--;
    }
}
let aux = 0;
//Pega o objeto 'img' e 'button' da página HTML e coloca num const
const button = document.querySelector('button')
const imagem = document.querySelector('img')
//Adiciona um Event Listener para reconhecer o 'click' e executar a função MudarImagem
button.addEventListener('click', MudarImagem);
