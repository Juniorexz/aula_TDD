const somaCrush = (n1, n2) => n1 + n2

const encontraCrush = nome => {
    try {
        validacao(nome)
        return 'Crush não encontrado'
}catch(erro){
    return erro
    }


const validacao = nome =>{
    if(!nome) throw 'Campo nome esta vazio'
    if(typeof nome !== 'string') throw 'Tipo inválido'
}

module.exports = {
    somaCrush,
    encontraCrush
}