/* AULA 1 - INTRODUÇÃO AO JAVASCRIPT

var nome = "Isabela Marques"
var idade = 18
var idade2 = 21
var frase = "Japão é o melhor time do mundo"
alert(nome+" tem "+idade+" anos.")
alert(idade+idade2)

console.log(nome)
console.log(idade+idade2)
console.log(frase.replace("Japão", "Brasil"))
console.log(frase.toLowerCase())
console.log(frase.toUpperCase())
alert(frase.replace("Japão", "Brasil"))
*/

/* AULA 2 - ARRAY E DICIONÁRIO

//ARRAY
var lista = ["maça", "pêra", "laranja"]

console.log(lista)
console.log(lista[1])
//alert(lista[1])

lista.pop()
lista.push("uva")
console.log(lista)

console.log(lista.length)
console.log(lista.reverse())
console.log(lista.toString())

console.log(lista[0])
console.log(lista.toString()[0])

console.log(lista.join(" - "))

//DICIONARIO
var fruta = {nome: "Mação", cor:"Vermelha"}
console.log(fruta.nome)
console.log(fruta.cor)

//LISTA DE DICIONÁRIOS
var frutas = [{nome: "Mação", cor:"Vermelha"}, {nome: "Uva", cor:"Roxa"}]
console.log(frutas)
console.log(frutas[1].nome)
*/

/* AULA 3 - CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE
//CONDICIONAIS
var idade = prompt("Qual sua idade?")
var idade = 18

if(idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}

//LAÇOS DE REPETIÇÃO
var count = 0
while (count <= 5){
    console.log(count)
    count++
}

var count
for(count = 0; count <=5; count++){
    console.log(count)
}

//DATE

var d = new Date()
alert(d)
alert(d.getMonth()+1)
alert(d.getMinutes())
alert(d.getDay())
alert(d.getHours())

*/

/* AULA 4 - DESENVOLVA PÁGINAS WEB COM JAVASCRIPT

function soma(n1, n2){
    return n1 + n2
}

alert(soma(5, 10))

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"))

function validaIdade(idade){
    var validar
    
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt ("Qual sua idade?")
console.log(validaIdade(idade))

*/

/* AULA 5 - MANIPULANDO ELEMENTOS DA PÁGINA
function clicou(){
    //alert("Obrigado por clicar!")
    document.getElementById("agradecimento").innerHTML = "Obrigada por clicar!"
}

function redirecionar(){
    window.open("https://github.com/IsabelaMarques07/aula-javascript-dio")
    window.location.href = "https://github.com/IsabelaMarques07/aula-javascript-dio"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse"
    elemento.innerHTML = "Obrigada por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
*/