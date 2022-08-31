const database = require('./database')

async function getNewlyReleasedProduct() {
    let sql = `
        SELECT*
        FROM PRODUCTS
        ORDER BY RELEASE_DATE DESC
        FETCH NEXT 4 ROWS ONLY
    `
    return (await database.execute(sql, [], database.options)).rows
}


async function getTopProducts() {
    let sql = `
        SELECT *
        FROM PRODUCTS
        ORDER BY RATING DESC
        FETCH NEXT 12 ROWS ONLY
    `
    return (await database.execute(sql, [], database.options)).rows
}
async function getAllBrands() {
    let sql = `
        SELECT DISTINCT BRANDNAME
        FROM BRANDS
        ORDER BY BRANDNAME 
    
    `;
    return (await database.execute(sql, [], database.options)).rows
}
async function getBrandsByProductType(TYPE) {
    let sql = `
        SELECT DISTINCT BRANDNAME
        FROM BRANDS NATURAL JOIN PRODUCTS
        WHERE TYPE='${TYPE}'
        ORDER BY BRANDNAME 
    
    `;
    return (await database.execute(sql, [], database.options)).rows
}

module.exports = {
    getNewlyReleasedProduct,
    getTopProducts,
    getAllBrands,
    getBrandsByProductType
}