document.getElementById('currency-form').addEventListener('submit',function(event){
    event.preventDefault();

    // Obter valores da entrada fo formulário
    const valor = parseFloat(document.getElementById('amout').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    // Conversão simples
    let valorConvertido;
    if(daMoeda === paraMoeda){
        valorConvertido = valor;
    }else{
        valorConvertido = valor * exchangeRates[daMoeda] [paraMoeda];
    }

    // Exibir resultado

    const Conversao = document.getElementById('conversao');
    Conversao.textContent = 'Resultado: $(valorConvertido)';
})