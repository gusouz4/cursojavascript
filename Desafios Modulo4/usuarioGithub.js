var buttonElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');
var listElement = document.querySelector('#app ul');

var buscaGit = function () {
    return new Promise(function (resolve, reject) {
        renderLoading();
        axios.get('https://api.github.com/users/'+ inputElement.value +'/repos')
            .then(function (response) {
                listElement.innerHTML = '';
        
                for(repo of response.data){
                    var repoElement = document.createElement('li');
                    var repoText = document.createTextNode(repo.name);

                    repoElement.appendChild(repoText);

                    listElement.appendChild(repoElement);

                }
            })
            .catch(function (error) {
                if(axios.get('https://api.github.com/users'+ inputElement.value + '/repos' == false)){
                    alert('Erro 404: Usuário do GitHub não existente');
                }
                console.warn(error);
            });

    });
}

function renderLoading(loading) {
    listElement.innerHTML = "";
    var textElement = document.createTextNode("Carregando...");
    var loadingElement = document.createElement("li");
    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
  }