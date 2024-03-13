function getChuckNorrisJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('chuckNorrisJoke').innerText = data.value;
        })
        .catch(error => {
            console.error('Erro ao obter piada do Chuck Norris:', error);
        });
}

getChuckNorrisJoke();