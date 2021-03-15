const {menu} = require('../menu')
const {bank } = require('../bank')

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
        bank[user].stage = 0
        return ["Pedido cancelado com sucesso"]
    }

    if(msg ==='Ok'|| msg === 'ok'){
        bank[user].stage = 2;
        return ["Estamos finalizando seu pedido , digite *seguir* para proseguir"];
    }

    if(!menu[msg] && msg !== 'Ok' && msg !== 'ok' && msg !== 0){
        
        return [
                `codigo invalido \n
                Escolha alguma opção do Cardapio\n
                ${renderMenu()}\n 
                ou Digite *#* para Finalizar o pedido \n
                ou *0* para cancelar`
                ]
    }

    bank[user].itens.push(menu[msg])
    return [
             `Item *${menu[msg].description}* adicionado com sucesso\n
             Se deseja adicionar mais algum item digite *"mais"*\n
             Digite *Ok* para Finalizar o pedido ou *0* para cancelar
             `
            ]
}

exports.execute = execute