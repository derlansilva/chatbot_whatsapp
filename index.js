const venom = require('venom-bot')

const {bank} = require('./src/bank')
const {stages} = require('./src/stages');
const userBot = require('./src/controllers/botControllers')

venom.create().then((client) => start(client))

function start(client){
    client.onMessage((message) => {
        //console.log('mensagem' , message)
        console.log(message.from)

        if(message.body){
            let resp = stages[getStage(message)].obj.execute(message.from , message.body)
            //getUser(message)
            console.log('user' , bank)

            for(let index = 0 ; index < resp.length ; index ++){
                const element = resp[index];
                console.log('elemento' , element)
                client.sendText(message.from , element)
            }

        }

    })
}

function getStage(user){
   if(bank[user.from]){
       return bank[user.from].stage
       
   }else{
       bank[user.from] = {
           stage : 0,
           itens :[]
       }
      // userBot.save(user)
       
       return bank[user.from].stage
   }
    
}
/*
function getUser(user){
    console.log('enviado para ' , user.to)
    user.map(item => {
        console.log( 'items' , item)
    })
    //console.log( 'imagem' ,  user.send.profilePicThumbObj.img)
}*/
