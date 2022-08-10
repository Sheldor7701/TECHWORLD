
const database = require('./database')


async function getUserInfoByUserId(userid) {
    let sql = `
        SELECT* 
        FROM USERS
        WHERE USERID = :USERID
    `
    return (await database.execute(sql, [userid], database.options)).rows[0]
}



async function updateUserInfo(userid,username, email,password, address) {
    let sql = `
    UPDATE USERS
    SET EMAIL = :EMAIL, ADDRESS = :ADDRESS, NAME= :USERNAME, PASSWORD= :PASSWORD
    WHERE USERID = :USERID
    `
    
    return (await database.execute(sql, [ email, address, username, password, userid ], database.options))
}

async function deleteUser(userid){
    let sql = `
    DELETE FROM USERS 
    WHERE USERID = :USERID
    `
    await database.execute(sql, [ userid ], database.options)
}
module.exports = {
    getUserInfoByUserId,
    updateUserInfo,
    deleteUser
}