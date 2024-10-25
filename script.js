document.getElementById('currency-form').addEventListener('submit',function(event){
    event.preventDefault();

    // Obter valores da entrada fo formulário
    const valor = parseFloat(document.getElementById('amout').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    //definir taxa de cambio fixa
 const exchangeRates = {
    USD:{ BRL: 5.67 , EUR: 0.92 },
    BRL:{ USD: 0.18, EUR: 0.16 },
    EUR:{ USD: 1.08, BRL: 6.16 },
 };

    // Conversão simples
    let valorConvertido;
    if(daMoeda === paraMoeda){
        valorConvertido = valor;
    }else{
        valorConvertido = valor * exchangeRates[daMoeda] [paraMoeda];
    }

    // Exibir resultado

    const Conversao = document.getElementById('conversao');
    Conversao.textContent = `Resultado: ${valorConvertido}`;
})