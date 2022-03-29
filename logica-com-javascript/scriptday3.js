alert("Seja bem-vind@!");
perguntarArea();

// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
function perguntarArea(){
    var area = prompt("Em qual área você tem mais interesse de ingressar, Front-End ou Back-End?");
    verificar(area);
}

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
function verificar(area){
    if(area.toUpperCase() == "FRONT-END"){
        const framework = prompt("Que legal, a área Front-End realmente é uma ótima escolha, agora me diga, qual framework pretende aprender, React ou Vue?");
        escolhaFullStack();
    } else if(area.toUpperCase() == "BACK-END"){
        const linguagem = prompt("Que legal, a área Back-End realmente é uma ótima escolha, agora me diga, qual linguagem pretende aprender, C# ou Java?.");
        escolhaFullStack();
    } else{
        alert("Que pena, tente inserir um resultado válido da próxima vez.");
        perguntarArea();
    }
}

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
function escolhaFullStack(){
    const escolhaFinal = prompt("Então, você se sente satisfeito na sua área atual ou pretende continuar no caminho para se tornar um Fullstack? Digite SIM para estar satisfeito e NÃO para que pretende continuar se aprimorando.");
    if(escolhaFinal.toUpperCase() == "SIM"){
        alert("Que legal, é muito bom saber que você deseja continuar se aprimorando na sua área. Boa sorte!");
        escolhaTecnologia();
    } else if(escolhaFinal.toUpperCase() == "NÃO"){
        alert("Quel legal, é muito bom saber que você pretende se tornar um Fullstack, bons estudos e boa sorte!");
        escolhaTecnologia();
    } else{
        alert("Que pena, tente inserir um resultado válido da próxima vez.");
        escolhaFullStack();
    }
}

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
function escolhaTecnologia(){
    const tecnologiaEscolhida = prompt("Então, em qual tecnologia você pretende se especializar ou conhecer?");
    var tecnologias = [];
    var contadorTecnologias = 1;

    if(tecnologiaEscolhida != ""){
        tecnologias.push(tecnologiaEscolhida);
        let contadorWhile = 0;
        while (contadorWhile < contadorTecnologias){
            let proximaTecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
            if(proximaTecnologia != ""){
                contadorTecnologias++;
                contadorWhile++;
                tecnologias.push(proximaTecnologia);
            } else{
                alert(`Entendo você não ter mais escolhas, mas que legal que escolheu ${tecnologias.join(", ")}!`);
                break;
            }
        }
    } else{
        alert("Que pena você não respondeu nada.");
    }
}