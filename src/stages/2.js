const {bank}  = require('../bank')
const { update } = require('../controllers/botControllers')


function execute(user , msg){
    if(msg === '0'){
        update(user.from.substring(0 , 12) , 0)
        //bank[user.from].stage = 0
        return ['Pedido cancelado']
    }

    if(msg === '#'){

        update(user.from.substring(0 , 12) , 3)
        //bank[user.from].stage = 3
        return ['Digite o  endereço por favor']
    }

    let resumo = "RESUMO \n"

    let total = 0

    bank[user.from].itens.forEach(value => {
        resumo += `${value.description} --- ${value.price}\n`
        total += value.price
    });

    resumo += '------------------------\n'
    resumo += `TOTAL = R$ ${total}`
    return [resumo , 'Para confirmar digite "#" , ou cancelar digite 0']
}

exports.execute = execute