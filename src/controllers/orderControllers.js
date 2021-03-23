const connection = require("../models/connection");


module.exports = {
    save(fields , user){
        const params = [

        ]
        return new Promise((resolve , reject) => {
            connection.query(`
                INSERT INTO order_food (user_id , pedido , adress , pagamento)
                VALUES(?,?,?,?)
            `, params ,( error , results ) => {
                if(error){
                    reject(error)
                }else{
                    resolve(results)
                }
            })
        })
    }
}