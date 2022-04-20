
let seusQuizzes=[1]; //Adicionei uma array aleatória para testar o botão de criar quizz

//Adicionar botão de criar quizz dinamicamente
iniciarApp()
function iniciarApp(){
    if (seusQuizzes.length === 0){
        document.querySelector(".conteudo").innerHTML = `
            <div class="criarQuizz">
                <div class="infoSemQuizz">Você não criou nenhum quizz ainda :(</div>
                <button type="button">Criar Quizz</button> 
            </div>
        `
    } else{
        document.querySelector(".conteudo").innerHTML = `
            <section class="seusQuizzes">
                <div class="seusQuizzesHeader">
                    <h2>Seus Quizzes</h2>
                    <ion-icon id="ButtonCriarQuizz" class= "iconCriarQuizz" name="add-circle" onclick="criarQuizz()"></ion-icon>
                </div>
            </section>
        `
    }
}

function criarQuizz(){
    
}