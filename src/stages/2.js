const {bank}  = require('../bank')


function execute(user , msg){
    if(msg === '0'){
        bank[user].stage = 0
        return ['Pedido cancelado']
    }

    if(msg === '#'){

        bank[user].stage = 3
        return ['Digite o  endereço por favor']
    }

    let resumo = "RESUMO \n"

    let total = 0

    bank[user].itens.forEach(value => {
        resumo += `${value.description} --- ${value.price}\n`
        total += value.price
    });

    resumo += '------------------------\n'
    resumo += `TOTAL = R$ ${total}`
    return [resumo , 'Para confirmar digite "#" , ou cancelar digite 0']
}

exports.execute = execute