// par nome/valor
const saudacao = 'Opa!' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa!' //contexto léxito 2
    return saudacao
}

//Objetos são aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 34,
    peso: 92,
    endereco: {
        logradouro: 'Rua da Diversão',
        numero: 12345678
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)