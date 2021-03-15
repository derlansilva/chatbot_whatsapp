const connection = require('../models/connection')
const name = {
    name : 'joderlan',
    adress : 'betania'
}
module.exports ={
    save(user){
        return new Promise((resolve , reject ) => {
            connection.query(`
                INSERT INTO client (user , adress , number , photo)
                VALUES ( ? ,?,?)
            ` , [
                user.sender.pushname,
                name.adress,
                user.from,
                user.sender.img
            ] ,(error , results) => {
                if(error){
                    reject(error)
                }else{
                    resolve(results)
                }
            })
        })
    }
}
