
const database = require('./database')
const DB_product= require('./DB_product')
function getInt(chars){
    if(chars==null || chars==null) return 0;
    return parseInt(chars);
}
async function getUserBuild(userid){

    let sql= `
            SELECT * 
            FROM PC_BUILDER
            WHERE USERID=${userid} 

    `
     let ALL_ID=(await database.execute(sql, [], database.options)).rows[0];
     console.log(ALL_ID);
    //  console.log(ALL_ID.MOTHERBOARDID);
      let  MOTHERBOARD= ALL_ID.MOTHERBOARDID==null? null:await DB_product.getProductByID((ALL_ID.MOTHERBOARDID));
      let  PROCESSOR = ALL_ID.PROCESSORID==null? null:await DB_product.getProductByID((ALL_ID.PROCESSORID));
      let  GRAPHICS_CARD = ALL_ID.GRAPHICS_CARDID==null? null:await DB_product.getProductByID((ALL_ID.GRAPHICS_CARDID));
      let  RAM1 = ALL_ID.RAM1ID==null? null:await DB_product.getProductByID((ALL_ID.RAM1ID));
      let RAM2 = ALL_ID.RAM2ID==null? null:await DB_product.getProductByID((ALL_ID.RAM2ID));
      let SSD = ALL_ID.SSDID==null? null:await DB_product.getProductByID((ALL_ID.SSDID));
      let HDD = ALL_ID.HDDID==null? null:await DB_product.getProductByID((ALL_ID.HDDID));
      let POWER_SUPPLY = ALL_ID.POWER_SUPPLYID==null? null:await DB_product.getProductByID((ALL_ID.POWER_SUPPLYID));

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
async function getCompatibles(TYPE,MOTHERBOARDID){
    if(TYPE=='RAM1'|| TYPE=='RAM2')TYPE='RAM';
    let sql= `
    SELECT * 
    FROM PRODUCTS NATURAL JOIN ${TYPE}
    WHERE PRODUCTID IN (
    SELECT PRODUCTID
    FROM MOTHERBOARD_COMPATIBILITY
    WHERE MOTHERBOARDID=${MOTHERBOARDID}
    ) 

    `
     return (await database.execute(sql, [], database.options)).rows;
     
}
async function makeRecord(USERID,MOTHERBOARDID){

    let sql= `
        BEGIN
        ADD_PC_BUILDER_RECORD(${USERID},${MOTHERBOARDID});
        END;
    

    `;
     return (await database.execute(sql, [], database.options));
     
}
async function updateRecord(USERID, TYPE,PRODUCTID){
    TYPE+='ID';
    let sql= `
    UPDATE PC_BUILDER
    SET ${TID}= ${PRODUCTID}
    WHERE USERID=${USERID}
    

    `;
     return (await database.execute(sql, [], database.options));
     
}


module.exports = {
    getUserBuild,
    getCompatibles,
    makeRecord,
    updateRecord

}
