alert("Seja bem-vind@ a sua lista de compras virtual!");
var listaDeCompras = {
        'FRUTAS': [],
        'LATICÍNIOS': [],
        'CONGELADOS': [],
        'DOCES': []
    }
desejaAdicionarItens();

function desejaAdicionarItens(){
    const decisao = prompt("Você deseja adicionar algo a sua lista de compras? Responda, sim ou não.").toUpperCase();

    if(decisao == "NÃO" || decisao == "NAO"){
        mostrarLista();
    } else if(decisao == "SIM"){
        pegarItem();
    } else{
        alert(`Tente inserir "SIM" ou "NÃO"`);
        desejaAdicionarItens();
    }
}

function pegarItem(){
    let item = prompt("Então, qual item você deseja inserir na sua lista?");
    verificarCategoria(item);
}

function verificarCategoria(item){
    let escolhaCategoria = prompt(`Em qual categoria você deseja inserir ${item}? Frutas, laticínios, congelados ou doces?`).toUpperCase();

    if(escolhaCategoria == "FRUTAS"){
        listaDeCompras.FRUTAS.push(item);
        desejaAdicionarItens();
    } else if(escolhaCategoria == "LATICÍNIOS"){
        listaDeCompras.LATICÍNIOS.push(item);
        desejaAdicionarItens();
    } else if(escolhaCategoria == "CONGELADOS"){
        listaDeCompras.CONGELADOS.push(item);
        desejaAdicionarItens();
    } else if(escolhaCategoria == "DOCES"){
        listaDeCompras.DOCES.push(item);
        desejaAdicionarItens();
    } else{
        alert("Tente inserir uma categoria válida.");
        verificarCategoria(item);
    }
}

// Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?
// A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.
// Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.
function mostrarLista(){
    if(listaDeCompras.FRUTAS.length === 0 && listaDeCompras.LATICÍNIOS.length === 0 && listaDeCompras.CONGELADOS.length === 0 && listaDeCompras.DOCES.length === 0){
        alert(`Sua lista de compras: \n   Frutas: ${listaDeCompras.FRUTAS.join(", ")} \n   Laticicínios: ${listaDeCompras.LATICÍNIOS.join(", ")} \n   Congelados: ${listaDeCompras.CONGELADOS.join(", ")} \n   Doces: ${listaDeCompras.DOCES.join(", ")}`);
        desejaAdicionarItens();
    } else {
        var excluirItem = prompt(`Sua lista de compras: \n   Frutas: ${listaDeCompras.FRUTAS.join(", ")} \n   Laticicínios: ${listaDeCompras.LATICÍNIOS.join(", ")} \n   Congelados: ${listaDeCompras.CONGELADOS.join(", ")} \n   Doces: ${listaDeCompras.DOCES.join(", ")}\n
Caso deseje excluir algum dos itens digite o seu respectivo nome.`);

        verificarExclusao(excluirItem);
    }
}

//Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.
//Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.
//Por fim, ele voltará para o ciclo inicial de perguntas.
function verificarExclusao(excluirItem){
    if(listaDeCompras.FRUTAS.includes(excluirItem)){
        const indice = listaDeCompras.FRUTAS.indexOf(excluirItem);
        listaDeCompras.FRUTAS.splice(indice, 1);
        mostrarLista();
    } else if(listaDeCompras.LATICÍNIOS.includes(excluirItem)){
        const indice = listaDeCompras.LATICÍNIOS.indexOf(excluirItem);
        listaDeCompras.LATICÍNIOS.splice(indice, 1);
        mostrarLista();
    } else if(listaDeCompras.CONGELADOS.includes(excluirItem)){
        const indice = listaDeCompras.CONGELADOS.indexOf(excluirItem);
        listaDeCompras.CONGELADOS.splice(indice, 1);
        mostrarLista();
    } else if(listaDeCompras.DOCES.includes(excluirItem)){
        const indice = listaDeCompras.DOCES.indexOf(excluirItem);
        listaDeCompras.DOCES.splice(indice, 1);
        mostrarLista();
    } else if(excluirItem == ""){
        desejaAdicionarItens();
    } else{
        alert("Esse item não está catalogado, verifique a escrita e tente novamente.");
        mostrarLista();
    }
}