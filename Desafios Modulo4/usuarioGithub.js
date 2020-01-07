var buttonElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');
var listElement = document.querySelector('#app ul');

var buscaGit = function () {
    return new Promise(function (resolve, reject) {
        axios.get('https://api.github.com/users/'+ inputElement.value +'/repos')
            .then(function (response) {
                listElement.innerHTML = '';
                console.log(response);
                for(repo of response.data){
                    var repoElement = document.createElement('li');
                    var repoText = document.createTextNode(JSON.stringify(repo.name));

                    repoElement.appendChild(repoText);

                    listElement.appendChild(repoElement);
                }
            })
            .catch(function (error) {
                console.warn(error);
            });

    });
}