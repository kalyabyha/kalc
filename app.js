const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const btn1 = document.querySelector('#add')
const btn2 = document.querySelector('#sub')
const btn3 = document.querySelector('#x')
const btn4 = document.querySelector('#dilena')
const output = document.querySelector('#output')
const more = document.querySelector('#more')
const clear = document.querySelector('#clear')
const cube = document.querySelector('#xx')
const sqrt = document.querySelector('#sqrt')

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

function xxHandler(){
    const values = getInputValues()
    const result = values[0] ** values[1]
    output.innerHTML = `Результат [**] = ${result}`
}

function sqrtHandler(){
    const values = getInputValues()
    const result = Math.sqrt(values[0])
    output.innerHTML = `Результат по 1[sqrt] = ${result}`
}

function Clear(){
    output.innerHTML = ``
}

btn1.addEventListener('click', addHandler)
btn2.addEventListener('click', subHandler)
btn3.addEventListener('click', xHandler)
btn4.addEventListener('click', dilenaHandler)
cube.addEventListener('click', xxHandler)
sqrt.addEventListener('click', sqrtHandler)
clear.addEventListener('click', Clear)