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

async function insertAccountIntoDB(name, email, password, address) {
    let sql = `
    BEGIN
    INSERT_USER(:NAME,:EMAIL,:PASSWORD,:ADDRESS);
    END;
    
    `;
     (await database.execute(sql, [name, email, password, address], database.options));
     return;
}


module.exports = {
    getUserByEmail,
    insertAccountIntoDB
}