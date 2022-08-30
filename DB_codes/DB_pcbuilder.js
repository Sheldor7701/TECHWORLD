
const database = require('./database')
const DB_product= require('./DB_product')

async function getUserBuild(userid){

    let sql= `
            SELECT * 
            FROM PC_BUILDER
            WHERE USERID=${userid} 

    `
     let ALL_ID=(await database.execute(sql, [], database.options)).rows;
     console.log(ALL_ID);
      let  MOTHERBOARD= await DB_product.getProductByID(ALL_ID.MOTHERBOARDID);
      let  PROCESSOR = await DB_product.getProductByID(ALL_ID.PROCESSORID);
      let  GRAPHICS_CARD = await DB_product.getProductByID(ALL_ID.GRAPHICS_CARDID);
      let  RAM1 = await DB_product.getProductByID(ALL_ID.RAM1ID);
      let RAM2 = await DB_product.getProductByID(ALL_ID.RAM2ID);
      let SSD = await DB_product.getProductByID(ALL_ID.SSDID);
      let HDD = await DB_product.getProductByID(ALL_ID.HDDID);
      let POWER_SUPPLY = await DB_product.getProductByID(ALL_ID.POWER_SUPPLYID);

     //console.log(ppp);
     return {
                     
            MOTHERBOARD , 
            PROCESSOR , 
            GRAPHICS_CARD , 
            RAM1 , 
            RAM2 , 
            SSD , 
            HDD , 
            POWER_SUPPLY 

     };

}

async function cartIncreament(userid, productid) {
    let sql = `
    BEGIN
    INCREASE_CART(:USERID,:PRODUCTID);
    END;
    
    `;
    
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
    
    return (await database.execute(sql, [ userid,productid ], database.options));
    
}
// async function checkCart(userid, productid) {
//     let sql = `
//     SELECT* 
//     FROM CART
//     WHERE USERID= :USERID AND PRODUCTID= :PRODUCTID
//     `
//     ;
//     let aa= (await database.execute(sql, [ userid,productid ], database.options));
//     if(aa.rows.length>0) return true;
//     return false;
// }
async function checkCart(userid, productid) {
    let sql =  `
    SELECT
    ALREADY_IN_CART(:USERID,:PRODUCTID) AS CNT
    FROM DUAL
    
    `;
    return (await database.execute(sql, [ userid,productid ], database.options)).rows[0].CNT;

    // if(aa.rows.length>0) return true;
    // return false;
}
async function buyAll(userid) {
    let sql = `
    BEGIN
    BUY_ALL(:USERID);
    END;
    `;
    
    return (await database.execute(sql, [ userid ], database.options))
}

async function orderHistory(userid){
    let sql= `
    SELECT USERID,TO_CHAR(PURCHASE_DATE,'DL') PURCHASE_DATE, PRODUCTID, PRODUCT_NAME,QUANTITY, IMAGE, PRICE
    FROM BUYS NATURAL JOIN PRODUCTS
    WHERE USERID=:USERID 

    `
     let ppp=(await database.execute(sql, [userid], database.options)).rows;
     //console.log(ppp);
     return ppp;

}
async function previouslyChosen(userid){
    let sql= `
    SELECT *
    FROM PRODUCT_CHOSEN NATURAL JOIN PRODUCTS
    WHERE USERID= :USERID 

    `
     let ppp=(await database.execute(sql, [userid], database.options)).rows;
     //console.log(ppp);
     return ppp;

}

module.exports = {
    getUserBuild,
    cartIncreament,
    cartDecreament,
    addToCart,
    checkCart,
    buyAll,
    orderHistory,
    previouslyChosen
}
