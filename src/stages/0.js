const { menu } =  require('../menu')
const { update } = require('../controllers/botControllers');

function execute(user , msg , name){
    let message = "CARDAPIO \n\ncodigo|descrição|preço \n\n" ;

    Object.keys(menu).forEach(value => {
        let element = menu[value]

        message += `${value} - ${element.description}  R$ ${element.price} \n`
    })

    update(user.from.substring(0 , 12) , 1)


    return [message,`Olá ${name} sou um assistente virtual.\nDigite o codigo para  fazer o pedido` ]
}

exports.execute = execute;