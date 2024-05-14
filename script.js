let res = document.getElementById('res');
let num = [];

function noArray(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function add(){
    let numero = document.getElementById('num').value
    let botaoVazio =  document.querySelector('input').value

        if(botaoVazio !== ''){

            if(numero > 0 && numero < 100 && !noArray(numero,num)){
                total.innerHTML = ''
                num.push(Number(numero))
                res.innerHTML += `Valor adicionado: ${numero} <br></br>`
            } else{
               window.alert('Verifique as condições e tente novamente!')}
            } else{
            window.alert('Verifique os campos e tente novamente!') 
        }
        numero = ""
        numero.focus()
}

function finalizar(){
    let total = document.getElementById('total');
    const max = num.reduce((maior,i) =>{
        return i > maior ? i : maior;
    }, num[0])

    const min = num.reduce((menor, i) => {
        return i < menor ? i : menor;
    }, num [0])

    let soma = num.reduce((somaa, i) => {      
        return somaa + i; 
    }) 

    let media = soma / num.length

    total.innerHTML = `Ao todo, temos ${num.length} elementos inseridos<br></br>`
    total.innerHTML += `${max} é o <strong>MAIOR</strong> número inserido no array.<br></br>`
    total.innerHTML += `${min} é o <strong>MENOR</strong> número inserido no array.<br></br>`
    total.innerHTML += `${soma} é a <strong>SOMA</strong> número inserido no array.<br></br>`
    total.innerHTML += `${media.toFixed(2)} é a <strong>MÉDIA</strong> de todos os números inseridos no array.`
}