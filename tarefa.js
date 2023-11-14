let valor1 = 10;
let valor2 = 100;

function operacoesMatematicas() {
    alert(
        `Soma: ${num1 + num2}\n
        Subtração: ${num1 - num2}\n
        Divisão: ${num1 / num2}\n
        Multiplicação: ${num1 * num2}`
    );
}

let loopOutput = document.getElementById('loopOutput');
for (let i = 10; i <= 100; i++) {
    loopOutput.innerHTML += i + "<br>";
}

function mostrarTabuada() {
    let numero = document.getElementById('tabuadaInput').value;
    let tabuadaOutput = document.getElementById('tabuadaOutput');
    tabuadaOutput.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        tabuadaOutput.innerHTML += `${numero} * ${i} = ${numero * i}<br>`;
    }
}

function calcular() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operacao = document.getElementById('operacao').value;
    let resultado = document.getElementById('resultado');
    
    switch (operacao) {
        case 'soma':
            resultado.innerHTML = `Resultado: ${num1 + num2}`;
            break;
        case 'subtracao':
            resultado.innerHTML = `Resultado: ${num1 - num2}`;
            break;
        case 'multiplicacao':
            resultado.innerHTML = `Resultado: ${num1 * num2}`;
            break;
        case 'divisao':
            resultado.innerHTML = `Resultado: ${num1 / num2}`;
            break;
        default:
            resultado.innerHTML = 'Operação inválida';
    }
}

let valoresParesOutput = document.getElementById('valoresParesOutput');
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(numero => {
    if (numero % 2 === 0) {
        valoresParesOutput.innerHTML += numero + "<br>";
    }
});

function calcularCustoFinal() {
    let custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
    let percDistribuidor = parseFloat(document.getElementById('percDistribuidor').value);
    let percImpostos = parseFloat(document.getElementById('percImpostos').value);
    let valorFinal = document.getElementById('valorfinal');
    
    let custoFinal = custoFabrica + (custoFabrica * (percDistribuidor / 100)) + (custoFabrica * (percImpostos / 100));
    valorFinal.value = custoFinal;
}
