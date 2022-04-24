

// function listarQuizUsuario(){

// }

function listarTodosQuizzes(){
    document.querySelector(".telaListaQuizzes").innerHTML += ` <section class="todosOsQuizzes">
    <h2>Todos os Quizzes</h2>
    <div class="gradeQuizzes">
        <div class="coverQuiz" onclick="abrirTelaQuizz()">
            <span>gatoatogatogatogatogatogato gatogato</span>                    
        </div>
    </div>
</section>`
}

function abrirTelaQuizz(){
    tela1.classList.add("escondido");
    tela2.classList.remove("escondido");
}