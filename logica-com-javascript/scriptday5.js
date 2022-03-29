alert("Seja bem-vind@ a sua lista de compras virtual!");
var listaDeCompras = {
        'FRUTAS': [],
        'LATICÍNIOS': [],
        'CONGELADOS': [],
        'DOCES': []
    }
desejaAdicionarItens();

// Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.
function desejaAdicionarItens(){
    const decisao = prompt("Você deseja adicionar algo a sua lista de compras? Responda, sim ou não.");

    if(decisao.toUpperCase() == "NÃO" || decisao.toUpperCase == "NAO"){
        mostrarLista();
    } else if(decisao.toUpperCase() == "SIM"){
        pegarItem();
    } else{
        alert(`Tente inserir "SIM" ou "NÃO"`);
        desejaAdicionarItens();
    }
}

// Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.
function pegarItem(){
    let item = prompt("Então, qual item você deseja inserir na sua lista?");
    verificarCategoria(item);
}

// Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.
function verificarCategoria(item){
    let escolhaCategoria = prompt(`Em qual categoria você deseja inserir ${item}? Frutas, laticínios, congelados ou doces?`);

    if(escolhaCategoria.toUpperCase() == "FRUTAS"){
        listaDeCompras.FRUTAS.push(item);
        desejaAdicionarItens();
    } else if(escolhaCategoria.toUpperCase() == "LATICÍNIOS"){
        listaDeCompras.LATICÍNIOS.push(item);
        desejaAdicionarItens();
    } else if(escolhaCategoria.toUpperCase() == "CONGELADOS"){
        listaDeCompras.CONGELADOS.push(item);
        desejaAdicionarItens();
    } else if(escolhaCategoria.toUpperCase() == "DOCES"){
        listaDeCompras.DOCES.push(item);
        desejaAdicionarItens();
    } else{
        alert("Tente inserir uma categoria válida.");
        verificarCategoria(item);
    }
}

// Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados.
function mostrarLista(){
    alert(`Sua lista de compras: \n   Frutas: ${listaDeCompras.FRUTAS.join(", ")} \n   Laticicínios: ${listaDeCompras.LATICÍNIOS.join(", ")} \n   Congelados: ${listaDeCompras.CONGELADOS.join(", ")} \n   Doces: ${listaDeCompras.DOCES.join(", ")}`);
}