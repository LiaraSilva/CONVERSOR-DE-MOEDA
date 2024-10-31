# CONVERSOR-DE-MOEDA

# Descrição

Essa seção do código JavaScript é responsável por capturar a interação do usuário com o formulário de conversão de moedas e realizar os cálculos necessários para exibir o resultado.

## A Estrutura exchangeRates
O coração do código é o objeto exchangeRates. Ele armazena as taxas de câmbio entre diferentes moedas.

## Como funciona:

Chaves: Cada chave do objeto representa uma moeda (por exemplo, "USD" para dólar americano).
Valores: O valor associado a cada chave é outro objeto que contém as taxas de conversão para outras moedas.

## Exemplo:

exchangeRates['USD']['EUR'] retorna a taxa de câmbio para converter dólares americanos em euros.
O Formulário de Conversão
O código JavaScript interage com um formulário HTML que provavelmente tem campos para:

Espera por um envio de formulário:

* document.getElementById('currency-form').addEventListener('submit', ...): Essa linha adiciona um "ouvinte de eventos" ao elemento HTML com o ID 'currency-form'. Isso significa que, sempre que o usuário clicar no botão de enviar desse formulário, a função dentro do addEventListener será executada.
Impede o comportamento padrão:

* event.preventDefault();: Quando um formulário é enviado, normalmente a página é recarregada. Essa linha evita esse comportamento padrão, permitindo que a conversão seja feita sem recarregar a página.
Obtém os dados do formulário:

* const amount = parseFloat(document.getElementById('amount').value);: Pega o valor digitado no campo com o ID 'amount' e o converte para um número de ponto flutuante.
const fromCurrency = document.getElementById('from-currency').value; e const toCurrency = document.getElementById('to-currency').value;: Obtém as moedas de origem e destino selecionadas pelo usuário nos respectivos menus dropdown.

## Consulta a taxa de câmbio:

* const conversionRate = exchangeRates[fromCurrency][toCurrency];: Busca no objeto exchangeRates a taxa de câmbio correspondente à moeda de origem e destino.
Realiza a conversão:

* const convertedAmount = (amount * conversionRate).toFixed(2);: Multiplica o valor a ser convertido pela taxa de câmbio e arredonda o resultado para duas casas decimais.
Exibe o resultado:

* document.getElementById('result').textContent = ...: Atualiza o conteúdo do elemento HTML com o ID 'result' para mostrar o valor convertido, juntamente com as moedas de origem e destino.
Botão de redefinição:

* O segundo addEventListener faz com que, ao clicar no botão de reset, todos os campos do formulário sejam limpos, preparando-o para uma nova conversão.
Em resumo:

* Esse trecho de código funciona como o "cérebro" do conversor de moedas, conectando a interface do usuário (o formulário) com os dados das taxas de câmbio e realizando os cálculos necessários para fornecer o resultado final.

## Pontos importantes a destacar:

* Modularidade: O código está bem organizado e modular, com cada parte tendo uma função específica.
* Eficiência: A utilização do objeto exchangeRates para armazenar as taxas de câmbio torna o processo de conversão eficiente.
* Claridade: Os nomes das variáveis e comentários ajudam a entender o propósito de cada parte do código.
Possíveis melhorias:

* Validação de dados: Poderia ser adicionada uma validação para verificar se o valor inserido é um número válido e se as moedas selecionadas existem no objeto exchangeRates.
* Formatação de valores: O resultado poderia ser formatado de acordo com as convenções locais, utilizando vírgulas como separador de milhares e ponto como separador decimal.
* Atualização das taxas de câmbio: Poderia ser implementado um mecanismo para atualizar as taxas de câmbio periodicamente, por exemplo, utilizando uma API externa.
* Tratamento de erros: Poderia ser adicionado um tratamento de erros para lidar com situações em que a taxa de câmbio não é encontrada ou o valor inserido é inválido.
