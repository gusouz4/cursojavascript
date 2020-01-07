axios.get('https://api.github.com/users/gusouz4')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
