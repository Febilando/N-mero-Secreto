let listaDeNumeroSorteados = [];
let numeroLimite = 30 ;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto) {
    let campo  = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() { 
        exibirTextoNaTela('h1', 'Jogo do número secreto'); 
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 30'); I
    }
    
    exibirMensagemInicial()
    
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTenativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTenativas = `você descobriu o número secretro com ${tentativas} ${palavraTenativa}!`;
          exibirTextoNaTela('p', mensagemTenativas);
          document.getElementById('reiniciar').removeAttribute ('disabled');
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('p', 'O número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
                tentativas++;
                limparCampo ();
        }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt( Math.random() * numeroLimite + 1 );
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;


    if (quantidadeDeElementosNaLista == 30 ){
        listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes()) {
        return gerarNumeroAleatorio ();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log (listaDeNumeroSorteados)
        return numeroEscolhido;
    }
}

function limparCampo () {
        chute = document.querySelector ('input');
        chute.value = '';
}


function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas =1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true)
    }
    