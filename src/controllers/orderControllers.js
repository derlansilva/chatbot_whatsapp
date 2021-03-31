const connection = require("../models/connection");

module.exports = {
    save(user , order , value , adress , name){
        const params = [
            user , 
            order , 
            value,
            adress ,
            name
        ]
        return new Promise((resolve , reject) => {
            connection.query(`
                INSERT INTO food (user_id , pedido, total , adress , name )
                VALUES(?,?,?,?,?)
            `, params ,( error , results ) => {
                if(error){
                    reject(error)
                }else{
            
                    resolve(results)
        
                }
            })
        })
    },

    render(){
        return new Promise((resolve , reject) => {
            connection.query(`
                SELECT * FROM food
            ` , (error , results) => {
                if(error){
                    reject(error)
                }else{
                    resolve(results)
                }
            })
        }) 
    },

    consult(id){
        return new Promise((resolve , reject) => {
            connection.query(`
                SELECT * FROM food WHERE id_order = ${id}
            `, (error , results) => {
                if(error){
                    reject(error)
                }else{
                    resolve(results)
                }
            })
        })
    }
}