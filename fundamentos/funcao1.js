// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 8, 7, 6, 4)
imprimirSoma()

// função com tetorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(3, 3))
console.log(soma(2))
console.log(soma())