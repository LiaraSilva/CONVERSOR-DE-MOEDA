# CONVERSOR-DE-MOEDA

# Descrição

Essa seção do código JavaScript é responsável por capturar a interação do usuário com o formulário de conversão de moedas e realizar os cálculos necessários para exibir o resultado.

## A Estrutura exchangeRates
O coração do código é o objeto exchangeRates. Ele armazena as taxas de câmbio entre diferentes moedas.

* Como funciona:
Chaves: Cada chave do objeto representa uma moeda (por exemplo, "USD" para dólar americano).
Valores: O valor associado a cada chave é outro objeto que contém as taxas de conversão para outras moedas.

## Exemplo:

exchangeRates['USD']['EUR'] retorna a taxa de câmbio para converter dólares americanos em euros.
O Formulário de Conversão
O código JavaScript interage com um formulário HTML que provavelmente tem campos para:

* document.getElementById('currency-form'): Essa linha busca o elemento HTML com o ID "currency-form". Esse elemento é provavelmente um formulário onde o usuário insere o valor a ser convertido e seleciona as moedas.

* .addEventListener('submit', function(event) { ... }): Adiciona um "ouvinte de eventos" ao formulário. Isso significa que, sempre que o usuário clicar no botão de enviar desse formulário (ou pressionar Enter), a função dentro do addEventListener será executada.

* event.preventDefault();: Quando um formulário é enviado, normalmente a página é recarregada. Essa linha evita esse comportamento padrão, permitindo que a conversão seja feita sem recarregar a página.

* const amount = parseFloat(document.getElementById('amount').value);: Busca o valor digitado no campo com o ID "amount" (provavelmente um input de texto) e o converte para um número de ponto flutuante usando parseFloat.

* const fromCurrency = document.getElementById('from-currency').value; e const toCurrency = document.getElementById('to-currency').value;: Obtém o valor selecionado nos menus dropdown com os IDs "from-currency" e "to-currency", respectivamente. Esses valores representam as moedas de origem e destino.

* const conversionRate = exchangeRates[fromCurrency][toCurrency];: Busca a taxa de câmbio correspondente às moedas selecionadas no objeto exchangeRates. Por exemplo, se o usuário escolheu converter de dólar americano (USD) para euro (EUR), essa linha buscará exchangeRates['USD']['EUR'].

* const convertedAmount = (amount * conversionRate).toFixed(2);: Multiplica o valor a ser convertido pela taxa de câmbio e arredonda o resultado para duas casas decimais usando toFixed(2)

* document.getElementById('result').textContent = ...: Atualiza o conteúdo do elemento HTML com o ID "result" (provavelmente uma div ou span) para mostrar o resultado da conversão. A string dentro do textContent formata a saída para mostrar o valor original, a moeda de origem, o valor convertido e a moeda de destino.

