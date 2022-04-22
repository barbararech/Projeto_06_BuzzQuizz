
//Variáveis Globais
let seusQuizzes=[1]; //Adicionei uma array aleatória para testar o botão de criar quizz - Arrumar
const tela1 = document.querySelector(".telaListaQuizzes");
const tela2 = document.querySelector(".telaInfoQuiz");
const tela4 = document.querySelector(".telaCriarPerguntas");

//Adicionar botão de criar quizz dinamicamente
iniciarApp()
function iniciarApp(){
    if (seusQuizzes.length === 0){
        document.querySelector(".telaListaQuizzes").innerHTML += `
            <div class="criarQuizz">
                <div class="infoSemQuizz">Você não criou nenhum quizz ainda :(</div>
                <button type="button" onclick="abrirTelaInfo()">Criar Quizz</button> 
            </div>
        `
    } else{
        document.querySelector(".telaListaQuizzes").innerHTML += `
            <section class="seusQuizzes">
                <div class="seusQuizzesHeader">
                    <h2>Seus Quizzes</h2>
                    <ion-icon id="ButtonCriarQuizz" class= "iconCriarQuizz" name="add-circle" onclick="abrirTelaInfo()"></ion-icon>
                </div>
            </section>
        `
    }
}

//InnerHTML da Tela de Info
function abrirTelaInfo(){
    document.querySelector(".telaInfoQuiz").innerHTML =`
        <div class="conteiner_info">
            <h2>Começando pelo começo</h2>
            <div class="caixa_info">
                <input type="text" class="titulo"  placeholder="Título do Seu Quizz">
                <input type="url" class="url_Img"   placeholder="URL da imagem do seu Quizz">
                <input type="number" class="qnt_perguntas" placeholder="Quantidade de perguntas do seu Quizz">
                <input type="number" class="qnt_niveis"  placeholder="Quantidade de níveis do seu Quiz">
            </div>
            <button onclick="insertInfoQuizz()"><h4>Prosseguir pra criar perguntas</h4></button>
        </div>
    `;
    tela1.classList.add("escondido");
    tela2.classList.remove("escondido");
}

//Função de inserir as Infos do Quizz
let informacoes= {};
function insertInfoQuizz(){
    const titulo=document.querySelector("input.titulo").value
    const imgQuizz=document.querySelector("input.url_Img").value;
    const qntPergunta=document.querySelector("input.qnt_perguntas").value;
    const qntNiveis=document.querySelector("input.qnt_niveis").value;

    if(!validacaoInfos(titulo,imgQuizz,qntPergunta, qntNiveis)){
        alert("Por favor, preencha corretamente.")
        return
    }

    informacoes.titulo=titulo;
    informacoes.imagem=imgQuizz;
    informacoes.perguntas=qntPergunta;
    informacoes.niveis=qntNiveis;

    criarPerguntas()
    limparInput();
}

//Regex - Verificação de URL
let re = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
//Validação de Infos
function  validacaoInfos(title,url,numPergunta,NumNivel){

    if(title.length> 65 || title.length<20){
        alert("O título deve ter entre 20 e 65 letras!")
        return false
    }
    if(!re.test(url)){
        alert(`A imagem deve ser inserida como URL (Formato: https://www.exemplo.com)!`)
        return false
    }
    // if(numPergunta<3){
    //     alert("Para um bom Quizz, você de fazer ao menos 3 perguntas!")
    // return false
    // }
    if(NumNivel<2){
        alert("Para o seu Quizz ser mais legal, deve ter ao menos 2 níveis!")
    return false
    }
    return true
}

// Clear Input
function limparInput(){
    document.querySelector("input.titulo").value="";
    document.querySelector("input.url_Img").value="";
    document.querySelector("input.qnt_perguntas").value="";
    document.querySelector("input.qnt_niveis").value="";     
}

// Função de criar as perguntas
function criarPerguntas(){
    
    tela2.classList.add("escondido");
    tela4.classList.remove("escondido");

    let i=0;
    const qntPergunta=document.querySelector("input.qnt_perguntas").value; 
    let pergunta =`<h3>Crie suas perguntas</h3>`;
    
    do{
        i+=1;
        pergunta += `
                <div class="pergunta">
                    <button type="button" class="buttonReadMore">
                        <h3>Pergunta ${[i]}</h3>
                        <ion-icon class="iconeReadMore" name="create-outline" >
                        </ion-icon>
                    </button>
                    <div class="container">
                        <input id="inputPergunta" class="textoPergunta" type="text" placeholder="Texto da pergunta">
                        <input id="inputPergunta" class="corPergunta" type="text" placeholder="Cor de fundo da pergunta">
                        
                        <h3>Resposta correta</h3>
                        <input id="inputPergunta" class="respostaCorreta" type="text" placeholder="Resposta correta">
                        <input id="inputPergunta" type="text" class="urlRespostaCorreta" placeholder="URL da imagem">
                        
                        <h3>Respostas incorretas</h3>
                        <input id="inputPergunta" type="text" class="respostaIncorreta" placeholder="Resposta incorreta 1">
                        <input id="inputURLPergunta" type="text" class="urlRespostaIncorreta"  placeholder="URL da imagem 1">
                        <input id="inputPergunta" type="text" class="respostaIncorreta" placeholder="Resposta incorreta 2">
                        <input id="inputURLPergunta" type="text" class="urlRespostaIncorreta" placeholder="URL da imagem 2">
                        <input id="inputPergunta" type="text" class="respostaIncorreta" placeholder="Resposta incorreta 3">
                        <input id="inputURLPergunta" type="text" class="urlRespostaIncorreta" placeholder="URL da imagem 3">
                    </div>
                </div>
        `
    } while (i<qntPergunta);

    document.querySelector(".telaCriarPerguntas").innerHTML += pergunta;
    document.querySelector(".telaCriarPerguntas").innerHTML += `<button class="botaoIrParaNiveis" onclick="verificarPerguntas()">Prosseguir para criar níveis</button>`
    colapsarSecao()
}

// Para fazer surgir a seção na criação das perguntas
function colapsarSecao(){
    let collapse = document.getElementsByClassName("buttonReadMore");

    for (let i = 0; i < collapse.length; i++) {
        collapse[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling; 
            console.log(content);
                if (content.style.display === "initial") {
                    content.style.display = "none";
                } else {
                    content.style.display = "initial";
                }
        });
    }
}

function verificarPerguntas(){
    const perguntas = document.querySelectorAll(".pergunta");

    for(let j=0; j<perguntas.length; j++){

        const textoPergunta = perguntas[j].querySelector("input.textoPergunta").value;
        const corPergunta = perguntas[j].querySelector("input.corPergunta").value;
        const respostaCorreta = perguntas[j].querySelector("input.respostaCorreta").value;
        const urlRespostaCorreta = perguntas[j].querySelector("input.urlRespostaCorreta").value;
        const respostasIncorretas = perguntas[j].querySelectorAll("input.respostaIncorreta");
        const urlRespostasIncorretas = perguntas[j].querySelectorAll("input.urlRespostaIncorreta");
        
        const respostasIncorretasLength = respostasIncorretas.length;
        const urlRespostasIncorretasLength = urlRespostasIncorretas.length;

        let arrayInput = Array();
        let arrayUrlInput = Array();
        let re2 = /[0-9A-Fa-f]{6}/g; //Vrificar hexadecimal

            // Para verificar se há ao menos uma resposta incorreta
            for (let i=0; i<respostasIncorretasLength;i++){
                let input = respostasIncorretas[i].value;  

                if (input.length !== 0 ){
                    arrayInput[i]=input;
                }
            }
                // Filtrando array
            let filtered = arrayInput.filter(function (el) { 
                return el != null;
                });
            
            if(arrayInput.length === 0){
                alert("Insira ao menos uma resposta incorreta!");
            }
            
            // Para verificar se há ao menos uma resposta incorreta
            for (let i=0; i<urlRespostasIncorretasLength;i++){
                let input = urlRespostasIncorretas[i].value;  

                if (input.length !== 0 ){
                    arrayUrlInput[i]=input;

                    if (!re.test(input)){
                        alert(`A imagem deve ser inserida como URL (Formato: https://www.exemplo.jpeg)!`)
                        return false;
                    }
                } 
            }
                // Filtrando array
            let filtered2 = arrayUrlInput.filter(function (el) { 
                return el != null;
                });
            
            if(arrayUrlInput.length === 0){
                alert("Insira uma imagem para a resposta incorreta!");
            }
    

            if(textoPergunta.length<20){
                alert("O título deve ter mais de 20 letras!");
            }

            if (!re2.test(corPergunta)){
                alert("Insira uma cor em hexadecimal!");
            }

            if(respostaCorreta.length === 0 && urlRespostaCorreta.length === 0){
                alert("Insira a resposta correta!");
            }

            if(!re.test(urlRespostaCorreta)){
                    alert(`A imagem deve ser inserida como URL (Formato: https://www.exemplo.com)!`);
                    return false
                }
    }
             criarNiveis();
}


//Para criar os níveis
function criarNiveis(){
    tela4.classList.add("escondido");;
}