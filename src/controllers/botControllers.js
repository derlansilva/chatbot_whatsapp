const connection = require('../models/connection')

module.exports ={
    
    insert(user ){
        return new Promise((resolve , reject ) => {
            connection.query(`
                            INSERT INTO client ( user  , status ,number ) 
                            SELECT * FROM (SELECT ?,?,?)AS tmp
                            WHERE NOT EXISTS (
                                SELECT number FROM client WHERE number = ${user.from.substring(0,12)}
                            )LIMIT 1;
                            `

                , [
                    user.sender.pushname,
                    0,
                    user.from.substring(0,12)

                ] , (error , results) => {
                    
                    if(error){
                        reject(error)
                    }else{
                        resolve(results)
                    }
            })
        })

    },

     index(user){
        return new Promise((resolve , reject) => {
            connection.query(`
            SELECT * FROM client WHERE number = ${user}
            `, (erro, results) => {
                if(erro){
                    return reject(erro)
                }else{
                    return resolve(results)
                }
            })
        })

        
    },

    update(id , status){
        return new Promise((resolve , reject) => {
            connection.query(
                `
                    UPDATE client SET status = ${status} WHERE number = ${id}
                `
            ,(erro , results) => {
                if(erro){
                    reject(erro)
                }else{
                    resolve(results)
                }
            })
        })
    }

}

 
