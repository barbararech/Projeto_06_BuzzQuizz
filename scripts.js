
//Variáveis Globais
let seusQuizzes=[1]; //Adicionei uma array aleatória para testar o botão de criar quizz - Arrumar
const tela1 = document.querySelector(".telaListaQuizzes");
const tela2 = document.querySelector(".telaInfoQuiz");
const tela3 = document.querySelector(".telaCriarQuizz");
const tela4 = document.querySelector(".telaCriarPerguntas");
const tela5 = document.querySelector(".telaCriarNivel");

//Adicionar botão de criar quizz dinamicamente
iniciarApp()
function iniciarApp(){
    if (seusQuizzes.length === 0){
        document.querySelector(".telaListaQuizzes").innerHTML += `
            <div class="criarQuizz">
                <div class="infoSemQuizz">Você não criou nenhum quizz ainda :(</div>
                <button name="" type="button">Criar Quizz</button> 
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
        <button onclick="abrirTelaInfo()">clica</button>
        `
    tela1.classList.add("escondido");
    tela3.classList.remove("escondido");
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
    tela3.classList.add("escondido");
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

//Validação de Infos
function  validacaoInfos(title,url,numPergunta,NumNivel){
let re = RegExp("^((http(s?):\/\/(www.)?[a-z]+.com\/)|(magnet:\?xt=urn:btih:))")
if(title.length> 65 || title.length<20){
    alert("O título deve ter entre 20 e 65 letras!")
    return false
}
if(!re.test(url)){
    alert(`A imagem deve ser inserida como URL (Formato: https://www.exemplo.com)!`)
    return false
}
if(numPergunta<3){
    alert("Para um bom Quizz, você de fazer ao menos 3 perguntas!")
return false
}
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
    
    
    tela2.classList.add("escondido");;
    tela4.classList.remove("escondido");
 
    console.log(tela2);

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
    document.querySelector(".telaCriarPerguntas").innerHTML += `<button class="botaoIrParaNiveis" onclick="abrirTelaNiveis()">Prosseguir para criar níveis</button>`
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

function abrirTelaNiveis(){
    tela4.classList.add("escondido")
    tela5.classList.remove("escondido")
    let numeroNiveis= Number(informacoes.niveis);
    for(let i = 1 ; i<=numeroNiveis;i++){
        console.log("rodeos")
tela5.innerHTML += `
        <div class="nivel">
            <button type="button" class="buttonReadMore">
                <h3>Nivel ${i}</h3>
            </button>
        <div class="container">
            <input id="inputPergunta" name="titulo" type="text" placeholder="Título do nível">
            <input id="inputPergunta" name="porcentagem" type="number" placeholder="% de acerto mínima"> 
            <input id="inputPergunta" name="imgNivel" type="url" placeholder="URL da imagem do nível">
            <input id="inputPergunta" name="descNivel" type="text" placeholder="Descrição do nível"> 
        </div>
        </div>

       
`}
colapsarSecao()
const nodeNivel=document.querySelectorAll(".nivel")
nodeNivel.map(insertNivel)
}
const arrNivel=[]
function insertNivel(nivel){
    const tituloNivel = nivel. getElementsByTagName("titulo").value
    const porcentagemAcerto= nivel. getElementsByTagName("porcentagem").value
    const imgNivel= nivel. getElementsByTagName("imgNivel").value
    const descNivel= nivel. getElementsByTagName("descNivel").value

    arrNivel.push({
        title:tituloNivel,
        min_Acerto:porcentagemAcerto,
        imagem:imgNivel,
        descricao:descNivel
    })
    console.log(arrNivel)
}