const venom = require('venom-bot')

const {stages} = require('./src/stages');
const { index, insert } = require('./src/controllers/botControllers');
const { bank } = require('./src/bank');

venom.create().then((client) => start(client))

function start(client){
    client.onMessage((message) => {


        if(message.body){

        
            insert(message).then(result => {
                console.log('result' , result)
            })

            index(message.from.substring(0 ,12)).then(result => {
                result.map(item => {  
                    getStage(item)                       
                    renderMessage(client , item.status  , message , message.body , item.user )
                    
                })
            })

        }

    })
}


function renderMessage(client , status , message , body , name){
    let resp = stages[status].obj.execute(message , body , name )            

    for(let index = 0 ; index < resp.length ; index ++){
        const element = resp[index];
        client.sendText(message.from , element)
    }

}


 function getStage(user){
    
      bank[user.id] = {
           stage : user.status,
           adress : '',
           name : '',
           itens :[]
       }
       console.log('usuario' , bank)
       return bank[user.id].stage
    
}

