//'Pedido finalizado  em breve estaremos entregando'

const { adress } = require("../adress");
const { update } = require("../controllers/botControllers");
const { updateName } = require("../controllers/botControllers");
const { itens } = require("../itens");

function execute (user , msg  , name , id){
    itens.pop();
    adress.pop();
    //updateName(user.from.substring(0 , 12) , msg)
    update(user.from.substring(0 , 12) , 0)

    return [`${msg} seu     
    Pedido foi finalizado  \n 
    em breve estaremos entregando \n 
    assim que for enviado entraremos em contato.
    muito obrigado pela preferencia'
    `
 ]

}

exports.execute = execute