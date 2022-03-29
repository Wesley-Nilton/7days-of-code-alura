alert("Seja bem-vind@!");
// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo). 
// Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.
var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
var contador = 0;
perguntarNumero();

// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.
function perguntarNumero(){
    var chuteJogador = prompt("Aceita participar de um jogo? É bem simples basta adivinhar que número estou pensando de 0 a 10 e ele é inteiro.");

    if(chuteJogador < 0 || chuteJogador > 10 || isNaN(chuteJogador)){
        alert("Tente digitar algum dos números que eu disse, tente novamente.");
        perguntarNumero();
    } else if(chuteJogador == numeroSecreto){
        alert("Parabéns, você acertou o número que eu estava pensando!");
    } else if(chuteJogador != numeroSecreto && tentativas != "1"){
        contador++;
        tentativas--;
        alert(`Você infelizmente errou, só lhe restam ${tentativas} tentativas.`);
        perguntarNumero();
    } else{
        alert(`Que pena dessa vez eu ganhei, mas foi um ótimo jogo, o número secreto era ${numeroSecreto}.`);
    }
}

// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.
                    //Resposta na linha 22
