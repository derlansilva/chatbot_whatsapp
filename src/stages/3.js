
const { adress } = require("../adress");
const { update } = require("../controllers/botControllers");
const { save, consult } = require("../controllers/orderControllers");
const { itens } = require("../itens");


function execute(user , msg  , name , id){

    if(msg === '#'){
        let description  =[]
        let value = 0
        itens.map(item => {
            description.push(item.description)
            value += parseFloat(item.price)
        })

        console.log('endereço' , adress)
        let result = description.toString()
        save(id , result , value , adress )
        update(user.from.substring(0 , 12) , 4)
        return ['Digite seu nome por favor:']
        
    }

    if(msg === '0'){
        update(user.from.substring(0 , 12) , 0)
        return ['Pedido cancelado']
    }

    adress.push( msg)
    return [`
        Confirma endereço de entrega: \n${msg}\n
        Digite *#* para confirmar 
        e *0* para cancelar
        `]
}

exports.execute = execute