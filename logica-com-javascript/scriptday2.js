alert("Seja bem-vind@!");
// - Qual o seu nome?
const nome = prompt("Qual o seu nome?");
// - Quantos anos você tem?
const idade = prompt("Quantos anos você tem?");
// - Qual linguagem de programação você está estudando?
const linguagem = prompt("Qual linguagem de programação você está estudando?");

// "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

// Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
const resultado = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

// 1 > Muito bom! Continue estudando e você terá muito sucesso.
// 2 > Ahh que pena... Já tentou aprender outras linguagens?
if(resultado == "1"){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if( resultado == "2"){ 
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
} else{
    alert("Tente inserir um resultado válido da próxima vez.");
}

