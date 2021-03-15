const { menu } =  require('../menu')
const { bank } = require('../bank')

function execute(user , msg ){
    let message = "CARDAPIO \n\ncodigo|descrição|preço \n\n" ;

    Object.keys(menu).forEach(value => {
        let element = menu[value]

        message += `${value} - ${element.description}  R$ ${element.price} \n`
    })

    bank[user].stage =  1;

    console.log(bank[user].stage)

    return [message ,`Olá sou um assistente virtual\nDigite o codigo para  fazer o pedido` ]
}

exports.execute = execute;