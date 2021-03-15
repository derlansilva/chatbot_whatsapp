//'Pedido finalizado  em breve estaremos entregando'

const { bank } = require("../bank")

function execute (user , msg){

    bank[user].stage  = 0

    return ['Pedido finalizado  \n em breve estaremos entregando \n muito obrigado pela preferencia']

}

exports.execute = execute