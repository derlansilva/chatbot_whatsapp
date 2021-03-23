const { bank } = require("../bank");
const { update } = require("../controllers/botControllers");
const { stages } = require("../stages");

function execute(user , msg){

    if(msg === '#'){
        //bank[user].stage = 4;
        
        update(user.from.substring(0 , 12) , 4)
        //bank[user.from].stage  = 4

        return ['Digite seu nome por favor:']

        
    }
    if(msg === '0'){
        update(user.from.substring(0 , 12) , 0)
        //bank[user.from].stage = 0
        return ['Pedido cancelado']
    }
    bank[user.from].adress = msg;
    return [`
        Confirma endereço de entrega: \n${msg}\n
        Digite *#* para confirmar 
        e *0* para cancelar
        `]
}

exports.execute = execute