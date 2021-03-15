const { bank } = require("../bank");
const { stages } = require("../stages");

function execute(user , msg){

    if(msg === '#'){
        //bank[user].stage = 4;
        
        bank[user].stage  = 0

        return ['Pedido finalizado  \n em breve estaremos entregando \n muito obrigado pela preferencia']

        
    }
    if(msg === '0'){
        bank[user].stage = 0
        return ['Pedido cancelado']
    }
    return [`
        Confirma endereço de entrega: \n${msg}\n
        Digite *#* para confirmar 
        e *0* para cancelar
        `]
}

exports.execute = execute