fetch('https://blockchain.info/ticker')
            .then(response => response.json())
            .then(data => {
                const bitcoinPrice = data.BRL.buy;
                document.getElementById('bitcoinValue').innerText = `Valor da compra do Bitcoin em reais: R$ ${bitcoinPrice}`;
            })
            .catch(error => {
                console.error('Erro ao obter valor do Bitcoin:', error);
            });