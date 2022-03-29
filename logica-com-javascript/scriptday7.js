// Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.
alert("Seja bem-vind@ a sua calculadora virtual!");
escolherOperacao();

// Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.
function escolherOperacao(){
    var operacaoSelecionada = prompt("Então, qual operação você deseja realizar? Somar, subtrair, multiplicar ou dividir?").toLowerCase();

    if(operacaoSelecionada == "somar"){
        entradaDeValor1(operacaoSelecionada);
    } else if(operacaoSelecionada == "subtrair"){
        entradaDeValor1(operacaoSelecionada);
    } else if(operacaoSelecionada == "multiplicar"){
        entradaDeValor1(operacaoSelecionada);
    } else if(operacaoSelecionada == "dividir"){
        entradaDeValor1(operacaoSelecionada);
    } else{
        alert("Teste inserir uma operação válida.");
        escolherOperacao();
    }
}

// Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.
function entradaDeValor1(operacao){
    var primeiroValor = parseFloat(prompt("Qual o primeiro valor que você deseja inserir?"));

    if(!isNaN(primeiroValor)){
        entradaDeValor2(primeiroValor, operacao);
    } else{
        alert("Insira apenas um valor númerico.");
        entradaDeValor1(operacao);
    }
}

function entradaDeValor2(primeiroValor, operacao){
    var segundoValor = parseFloat(prompt(`Por qual valor você deseja ${operacao} ${primeiroValor}?`));

    if(!isNaN(segundoValor)){
        if(operacao == "somar"){
            somar(primeiroValor, segundoValor);
        } else if(operacao == "subtrair"){
            subtrair(primeiroValor, segundoValor);
        } else if(operacao == "multiplicar"){
            multiplicar(primeiroValor, segundoValor);
        } else if(operacao == "dividir"){
            dividir(primeiroValor, segundoValor);
        }
    } else{
        alert("Insira apenas um valor númerico.");
        entradaDeValor2(primeiroValor, operacao);
    }
}

// As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".
function somar(primeiroValor, segundoValor){
    const valorFinal = primeiroValor + segundoValor;
    let decisao = prompt(`O resultado final da sua soma foi: ${valorFinal}\nVocê deseja realizar outra operação? Responda com sim ou não`);
    verificacaoFinal(decisao);
}

function subtrair(primeiroValor, segundoValor){
    const valorFinal = primeiroValor - segundoValor;
    let decisao = prompt(`O resultado final da sua subtração foi: ${valorFinal}\n Você deseja realizar outra operação? Responda com sim ou não`);
    verificacaoFinal(decisao);
}

function multiplicar(primeiroValor, segundoValor){
    const valorFinal = primeiroValor * segundoValor;
    let decisao = prompt(`O resultado final da sua multiplicação foi: ${valorFinal}\n Você deseja realizar outra operação? Responda com sim ou não`);
    verificacaoFinal(decisao);
}

function dividir(primeiroValor, segundoValor){
    const valorFinal = primeiroValor / segundoValor;
    let decisao = prompt(`O resultado final da sua divisão foi: ${valorFinal}\n Você deseja realizar outra operação? Responda com sim ou não`);
    verificacaoFinal(decisao);
}

function verificacaoFinal(decisao){
    if(decisao.toLowerCase() == "sim"){
        escolherOperacao();
    } else if(decisao.toLowerCase() == "não" || decisao.toLowerCase() == "nao"){
        alert("Até a próxima.");
    }
}