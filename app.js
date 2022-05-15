const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const btn1 = document.querySelector('#add')
const btn2 = document.querySelector('#sub')
const btn3 = document.querySelector('#x')
const btn4 = document.querySelector('#dilena')
const output = document.querySelector('#output')
const btn5 = document.querySelector('#fun')
const more = document.querySelector('#more')

function getInputValues(){
    const value1 = +num1.value
    const value2 = +num2.value
    return [value1, value2]
}

function addHandler(){
    const values = getInputValues()
    const result = values[0] + values[1]
    output.innerHTML = `Результат [+] = ${result}`
}

function subHandler(){
    const values = getInputValues()
    const result = values[0] - values[1]
    output.innerHTML = `Результат [-] = ${result}`
}

function xHandler(){
    const values = getInputValues()
    const result = values[0] * values[1]
    output.innerHTML = `Результат [*] = ${result}`
}

function dilenaHandler(){
    const values = getInputValues()
    const result = values[0] / values[1]
    output.innerHTML = `Результат [/] = ${result}`
}


function More(){
    more.innerHTML = 'hz nahyja ja to zrobuv) POpriKoly hahahahahahahahaha Bydyt obnovu)'
}

btn1.addEventListener('click', addHandler)
btn2.addEventListener('click', subHandler)
btn3.addEventListener('click', xHandler)
btn4.addEventListener('click', dilenaHandler)
btn5.addEventListener('click', More)