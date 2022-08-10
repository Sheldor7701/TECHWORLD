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
        BEGIN
        INSERT_USER(:USERNAME,:EMAIL,:PASSWORD,:ADDRESS);
        END;
        
    `
    return (await database.execute(sql, [username, email, password,address], database.options))
}


module.exports = {
    getUserByEmail,
    insertAccountIntoDB
}