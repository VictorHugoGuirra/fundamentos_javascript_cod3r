console.log(Math.ceil(6.1)) // arredonda para cima

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'

console.log(obj1)

function obj(nome) {
    this.nome = nome //torna a variavel pública
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new obj('cadeira')
const obj3 = new obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()