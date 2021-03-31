const venom = require('venom-bot')

const {stages} = require('./src/stages');
const { index, insert } = require('./src/controllers/botControllers');

venom.create().then((client) => start(client))

function start(client){
    client.onMessage((message) => {

        if(message.body){

            insert(message).then(result => {
            })
            console.log(message.body)
            
            index(message.from.substring(0 ,12)).then(result => {
                result.map(item => {                       
                    renderMessage(client , item.status  , message , message.body , item.user , item.id )  
                })
            })

        }

    })
}


function renderMessage(client , status , message , body , name , id){
    let resp = stages[status].obj.execute(message , body , name ,id )            

    for(let index = 0 ; index < resp.length ; index ++){
        const element = resp[index];
        console.log(element)
        client.sendText(message.from , element)
    }

}


