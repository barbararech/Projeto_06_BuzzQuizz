
//Variáveis Globais
let seusQuizzes=[1]; //Adicionei uma array aleatória para testar o botão de criar quizz - Arrumar
const tela1 = document.querySelector(".telaListaQuizzes");
const tela3 = document.querySelector(".telaCriarQuizz");
const tela4 = document.querySelector(".telaCriarPerguntas");

//Adicionar botão de criar quizz dinamicamente
iniciarApp()
function iniciarApp(){
    if (seusQuizzes.length === 0){
        document.querySelector(".telaListaQuizzes").innerHTML += `
            <div class="criarQuizz">
                <div class="infoSemQuizz">Você não criou nenhum quizz ainda :(</div>
                <button type="button">Criar Quizz</button> 
            </div>
        `
    } else{
        document.querySelector(".telaListaQuizzes").innerHTML += `
            <section class="seusQuizzes">
                <div class="seusQuizzesHeader">
                    <h2>Seus Quizzes</h2>
                    <ion-icon id="ButtonCriarQuizz" class= "iconCriarQuizz" name="add-circle" onclick="criarQuizz()"></ion-icon>
                </div>
            </section>
        `
    }
}

//Função de criar Quizz - Informações Básicas
function criarQuizz(){
    // Criei um botao só pra testar - Arrumar
    document.querySelector(".telaCriarQuizz").innerHTML += `
        <button onclick="criarPerguntas()">clica</button>
        `
    tela1.classList.add("escondido");
    tela3.classList.remove("escondido");
}

// Função de criar as perguntas
function criarPerguntas(){
    console.log(tela1);
    
    tela3.classList.add("escondido");
    tela4.classList.remove("escondido");

    let i=0;
    let pergunta =`<h3>Crie suas perguntas</h3>`;
    const numPerguntas=8; //Arrumar (só joguei valor aleatório para testar)
    
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
                        <input id="inputPergunta" type="text" placeholder="Texto da pergunta">
                        <input id="inputPergunta" type="text" placeholder="Cor de fundo da pergunta">
                        
                        <h3>Resposta correta</h3>
                        <input id="inputPergunta" type="text" placeholder="Resposta correta">
                        <input id="inputPergunta" type="text" placeholder="URL da imagem">
                        
                        <h3>Respostas incorretas</h3>
                        <input id="inputPergunta" type="text" placeholder="Resposta incorreta 1">
                        <input id="inputURLPergunta" type="text" placeholder="URL da imagem 1">
                        <input id="inputPergunta" type="text" placeholder="Resposta incorreta 2">
                        <input id="inputURLPergunta" type="text" placeholder="URL da imagem 2">
                        <input id="inputPergunta" type="text" placeholder="Resposta incorreta 3">
                        <input id="inputURLPergunta" type="text" placeholder="URL da imagem 3">
                    </div>
                </div>
        `
    } while (i<numPerguntas);

    document.querySelector(".telaCriarPerguntas").innerHTML += pergunta;
    document.querySelector(".telaCriarPerguntas").innerHTML += `<button class="botaoIrParaNiveis" onclick="criarNiveis()">Prosseguir para criar níveis</button>`
    colapsarSecao()
}

// Para fazer surgir a seção na criação das perguntas
function colapsarSecao(){
    let collapse = document.getElementsByClassName("buttonReadMore");
    let i;
    console.log(collapse)
    for (i = 0; i < collapse.length; i++) {
        collapse[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling; 
            console.log(content);
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
        });
    }
}

//Para criar os níveis

function criarNiveis(){

}