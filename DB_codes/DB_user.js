
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
    BEGIN
    USER_UPDATE(:USERID,:USERNAME,:EMAIL,:ADDRESS,:PASSWORD);
    END;
    
    `;
    (await database.execute(sql, [ userid,username, email, address, password ], database.options));
    return;
}
async function getAllUsers() {
    let sql = `
        SELECT* 
        FROM USERS
        
    `
    return (await database.execute(sql, [userid], database.options)).rows
}
async function deleteUser(userid) {
    let sql = `
    BEGIN
    DELETE_USER(:USERID);
    END;
    
    `;
     (await database.execute(sql, [userid], database.options));
     return;
}
async function banUnbanUser(userid) {
    let sql = `
    BEGIN
    BAN_UNBAN_USER(:USERID);
    END;
    
    `;
     (await database.execute(sql, [userid], database.options));
     return;
}

module.exports = {
    getAllUsers,
    deleteUser,
    banUnbanUser,
    getUserInfoByUserId,
    updateUserInfo
}
