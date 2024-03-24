let numero = window.document.querySelector('input#txtn')
let lista = window.document.querySelector('select#flistagem')
let resultado = window.document.querySelector('div#resultado')
//Aqui criei uma variavel com nome atributos, para armazenar numeros digitados pelo usuario
var atributos = []

//Criei uma função, para permiti adicionar numeros somentes entre 1 e 150, caso alcontrario nao sera permitido
function eNumerico(numero){
    if(Number(numero) >= 1 && Number(numero) <= 150){
        return true
    } else{
        return false
    }
}
//Criei uma função para identificar se o numero esta na lista, caso nao esteja, sera permitindo adicionar ele.
function inumerico(numero, lista) { 
    if(lista.indexOf(Number(numero)) != -1){
        return true
    } else{
        return false
    }
}
//função adicionar permitei mostra ao usuario os numeros que ele esta adicionando e permite ele digita somentes numeros permitindos ou dara erro.
function adicionar(){
    if(eNumerico(numero.value) && !inumerico(numero.value, atributos)){
       atributos.push(Number(numero.value))
       let unidade = document.createElement('option')
       unidade.text = `número ${numero.value} adicionado`
       lista.appendChild(unidade)
       resultado.innerHTML = ``
    } else {
        window.alert(`[ERRO] Valor inválido ou ja encontra na lista!`)
    }
    //Aqui crei um foco na aba de adicionar numero, para quando o usuario adicione o curso volte limpo e pronto pra adicionar outro numero, caso usuario quiser
    numero.value = ""
    numero.focus()
}

function finalizar() {  
    if(atributos.length == 0){
        window.alert(`Digite um numero antes de finalizar!`)
    } else{
        var soma = atributos.length
        var total = atributos.length
        var maior = atributos[0]
        var menor = atributos[0]
        soma = 0
        média = 0
        for(let pos in atributos){
            soma += atributos[pos]
            if(atributos[pos] > maior){
                maior = atributos[pos]
            }
            if(atributos[pos] < menor){
                menor = atributos[pos]
            }
            
        }
        média = soma / total

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo foram digitado ${total} números </p>`
        resultado.innerHTML += `<p>O maior numero digitado foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor numero digitado foi ${menor}</p>`
        resultado.innerHTML += `<p>A soma de todos os numeros digitados é ${soma}</p>`
        resultado.innerHTML += `<p>A média dos numeros digitado é ${média}</p>`
    }
}