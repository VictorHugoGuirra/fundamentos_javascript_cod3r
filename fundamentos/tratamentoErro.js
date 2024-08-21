function tratarErrorELancar(erro) {
    //throw new error('...')
    //throw 10
    //throw true
    //throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimindoNomeGritado(obj) {
    try{
        console.log(obj.name.toUppercase() + '!!!')
    } catch (e) {
        tratarErrorELancar (e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Roberto' }
imprimindoNomeGritado(obj)