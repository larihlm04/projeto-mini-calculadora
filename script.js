function ExecutarSoma() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let soma = num1 + num2

    document.getElementById("resultado").value = soma
}

function ExecutarSubtracao() {
    
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let subtracao = num1 - num2

    document.getElementById("resultado").value = subtracao
}
    


function ExecutarMultiplicacao() {

    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let multiplicacao = num1 * num2

    document.getElementById("resultado").value = multiplicacao
}
    


function ExecutarDivisao() {
        
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let divisao = num1 / num2

    document.getElementById("resultado").value = divisao
    
}


function ExecutarPorcentagem() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let porcentagem = num1 * num2 / 100

    document.getElementById("resultado").value = porcentagem
}

function Limpar() {
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
    document.getElementById("resultado").value = ""

}