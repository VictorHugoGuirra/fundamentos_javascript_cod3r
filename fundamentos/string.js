const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna o caracter que está no número do indice

console.log(escola.charAt(5)) //retorna uma string vazia

console.log(escola.codePointAt(3)) //retorna o valor no caracter na tabela unicode

console.log(escola.indexOf('3')) //retorna o valor do indice caso esteja na string

console.log(escola.substring(1)) //retorna o valor da string do indice em diante

console.log(escola.substring(0, 3)) //retorna o valor da string do número do indice até o segundo número do indice

console.log('Escola '.concat(escola).concat("!")) //retorna uma concatenação
console.log('Escola ' + (escola) + ("!")) //retorna uma concatenação

console.log(escola.replace(3, 'e')) //retorna uma substituição do caracter na posição do indice e depois pelo valor do indice

console.log('Ana, Maria, Pedro'.split(',')) //transforma uma string em uma array e no indice informa o que deseja fazer o separador