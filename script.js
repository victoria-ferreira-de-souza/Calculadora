let runningTotal = 0;
let buffer = "0";
let operadorAnterior;

const screen = document.querySelector('.screen')

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
                if(operadorAnterior === null){
                        return
                }
            flushOpertion(parseInt(buffer));
            operadorAnterior = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length ===1){
                buffer = '0';
            }else{
                buffer = buffer.toString(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }
    const intBuffer = parseInt(buffer);

    if(runningTotal === 0){
        runningTotal = intBuffer;
    }else{
        flushOpertion(intBuffer);
    }
    operadorAnterior = symbol;
    buffer = '0';
}

function flushOpertion(intBuffer){
    if(operadorAnterior === '+'){
        runningTotal += intBuffer;
    }else if(operadorAnterior === '−'){
         runningTotal -= intBuffer;
    }else if(operadorAnterior === '×'){
        runningTotal *= intBuffer;
    }else if(operadorAnterior === '÷'){
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString){
    if(buffer === '0'){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
})
}

init();

//Um buffer é um espaço de memória (tipicamente RAM) que armazena dados binários. No Node. js, podemos acessar esses espaços de memória com a classe Buffer integrada. Os buffers armazenam uma sequência de números inteiros, de maneira similar às matrizes em JavaScript.