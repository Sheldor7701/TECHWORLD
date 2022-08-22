
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
async function getCart(userid){
    let sql= `
    SELECT *
    FROM CART NATURAL JOIN PRODUCTS
    WHERE USERID= :USERID 

    `
     let ppp=(await database.execute(sql, [userid], database.options)).rows;
     //console.log(ppp);
     return ppp;

}

async function cartIncreament(userid, productid) {
    let sql = `
    UPDATE CART
    SET QUANTITY = QUANTITY+1
    WHERE USERID = :USERID AND PRODUCTID= :PRODUCTID
    `
    
    return (await database.execute(sql, [ userid,productid ], database.options))
}
async function cartDecreament(userid, productid) {
    let sql = `
    BEGIN
    DECREASE_CART(:USERID,:PRODUCTID);
    END;
    
    `;
    
    return (await database.execute(sql, [ userid,productid ], database.options))
}
async function addToCart(userid, productid) {
    let sql = `
    BEGIN
    ADD_TO_CART(:USERID,:PRODUCTID);
    END;
    `;
    
    return (await database.execute(sql, [ userid,productid ], database.options))
}
async function checkCart(userid, productid) {
    let sql = `
    SELECT* 
    FROM CART
    WHERE USERID= :USERID AND PRODUCTID= :PRODUCTID
    `
    ;
    let aa= (await database.execute(sql, [ userid,productid ], database.options));
    if(aa.rows.length>0) return true;
    return false;
}
module.exports = {
    getUserInfoByUserId,
    updateUserInfo,
    deleteUser,
    getCart,
    cartIncreament,
    cartDecreament,
    addToCart,
    checkCart
}
