const {menu} = require('../menu')
const {bank } = require('../bank');
const { update } = require('../controllers/botControllers');

function renderMenu(){

    let message = "CARDAPIO \n\ncodigo|descrição|preço \n\n" ;

        Object.keys(menu).forEach(value => {
            let element = menu[value]

            message += `${value} - ${element.description}  R$ ${element.price} \n`
        })

    return message;
}

function execute(user , msg){

    if(msg === 'mais' || msg === 'Mais'){

        return [renderMenu() ,' Digite o codigo para  fazer o pedido' ]
        
    }

    if(msg === '0'){
        update(user.from.substring(0 , 12) , 0)
        return ["Pedido cancelado com sucesso"]
    }

    if(msg ==='Ok'|| msg === 'ok'){
        update(user.from.substring(0 , 12) , 2)
        return ["Estamos finalizando seu pedido , digite *seguir* para proseguir"];
    }

    if(!menu[msg] && msg !== 'Ok' && msg !== 'ok' && msg !== 0){
        
        return [
                `codigo invalido\nEscolha alguma opção do Cardapio\n${renderMenu()}\n ou Digite *#* para Finalizar o pedido \nou *0* para cancelar`
                ]
    }
    //update(user.from.substring(0 , 12) , 2)
    //bank[user.from].itens.push(menu[msg])
    return [
             `Item *${menu[msg].description}* adicionado com sucesso\nSe deseja adicionar mais algum item digite *"mais"*\nDigite *Ok* para Finalizar o pedido ou *0* para cancelar
             `
            ]
}

exports.execute = execute