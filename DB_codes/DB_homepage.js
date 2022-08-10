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
        FETCH NEXT 4 ROWS ONLY
    `
    return (await database.execute(sql, [], database.options)).rows
}


module.exports = {
    getNewlyReleasedProduct,
    getTopProducts
}