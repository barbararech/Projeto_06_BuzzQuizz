
function getQuizUser(id){
    const promise = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${id}`);
    promise.then(inserirQuizzUser);
}