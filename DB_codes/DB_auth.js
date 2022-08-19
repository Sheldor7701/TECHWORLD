const database = require('./database')


//GET SQL FUNCTIONS FOR ID AND PASSWORDS

async function getUserByEmail(email) {
    let sql = `
        SELECT *
        FROM USERS
        WHERE EMAIL = :EMAIL
    `
    return (await database.execute(sql, [email], database.options)).rows
}

async function insertAccountIntoDB(username, email, password, address) {
    let sql = `
    INSERT INTO
    USERS(USERNAME,EMAIL,PASSWORD,ADDRESS)       
             VALUES(
                    
        :USERNAME,
        :EMAIL,
        :PASSWORD,
        :ADDRESS
       ) ;
    `
    return (await database.execute(sql, [username, email, password,address], database.options))
}


module.exports = {
    getUserByEmail,
    insertAccountIntoDB
}