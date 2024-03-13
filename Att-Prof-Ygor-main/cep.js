document.getElementById('cepForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const cep = document.getElementById('cep').value;
    fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('endereco').innerText = `Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
        });
});