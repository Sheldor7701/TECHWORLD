
const database = require('./database')



async function getAllBrands() {
    let sql = `
        SELECT* 
        FROM BRANDS
        ORDER BY BRANDNAME ASC
    `
    return (await database.execute(sql, [], database.options)).rows
}

async function brandInfo(brandid) {
    let sql = `
        SELECT* 
        FROM BRANDS
        WHERE BRANDID = :BRANDID
    `
    return (await database.execute(sql, [brandid], database.options)).rows[0]
}

async function getAllFromBrand(brandid) {
    let sql = `
        SELECT* 
        FROM PRODUCTS
        WHERE BRANDID = :BRANDID
        ORDER BY TYPE ASC
    `
    return (await database.execute(sql, [brandid], database.options)).rows
}

async function newBrand(name,logo, country) {
    let sql = `
    BEGIN
    ADD_BRAND(:BRANDNAME,:LOGO,:COUNTRY);
    END;
    
    `;
     (await database.execute(sql, [name,logo, country], database.options));
     return;
}
async function updateBrand(brandid,name,logo, country) {
    let sql = `
    BEGIN
    UPDATE_BRAND(:BRANDID,:BRANDNAME,:LOGO,:COUNTRY);
    END;
    
    `;
     (await database.execute(sql, [brandid,name,logo, country], database.options));
     return;
}
async function deleteBrand(brandid) {
    let sql = `
    BEGIN
    DELETE_BRAND(:BRANDID);
    END;
    
    `;
     (await database.execute(sql, [brandid], database.options));
     return;
}



module.exports = {

    getAllBrands,
    brandInfo,
    getAllFromBrand,
    newBrand,
    updateBrand,
    deleteBrand


}
