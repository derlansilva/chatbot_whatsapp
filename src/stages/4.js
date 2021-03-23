//'Pedido finalizado  em breve estaremos entregando'
const {insert, index } =  require('../controllers/botControllers')
const { bank } = require("../bank")

function execute (user , msg ){

    bank[user.from].stage  = 0

    bank[user.from].name = msg

    if(!index(user.from.substring(0 , 12))){

        insert(user , msg  )

    }

    return [`
    ${msg} seu       
    Pedido finalizado  \n 
    em breve estaremos entregando \n 
    muito obrigado pela preferencia']
    `
 ]

}

exports.execute = execute