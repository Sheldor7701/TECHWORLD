const database = require('./database')

async function allProduct() {
    let sql = `
    SELECT *
     FROM PRODUCTS
       `
    return (await database.execute(sql, [], database.options)).rows

}
async function getProductByID(productid) {
    let sql1 = `
        SELECT TYPE
        FROM PRODUCTS 
        WHERE PRODUCTID = :PRODUCTID
    `
    const typ = (await database.execute(sql1, [productid], database.options)).rows[0].TYPE;
    //console.log(typ);

    let sql2 = `
        SELECT*
        FROM PRODUCTS NATURAL JOIN ${typ}
        WHERE PRODUCTID = :PRODUCTID
    `

    return (await database.execute(sql2, [productid], database.options)).rows[0];

}

async function getProductBySearch(string) {
    let sql = `
    SELECT *
     FROM PRODUCTS
      WHERE UPPER(TYPE) LIKE '${string[0]}' OR UPPER(PRODUCT_NAME) LIKE '${string[0]}' `
    for (let i = 1; i < string.length; i++) {
        sql += ` OR UPPER(TYPE) LIKE '${string[i]}' OR UPPER(PRODUCT_NAME) LIKE '${string[i]}'`;
    }
    return (await database.execute(sql, [], database.options)).rows
}
async function getProductByType(type) {
    let sql = `
    SELECT *
     FROM PRODUCTS
      WHERE TYPE= :TYPE `
    return (await database.execute(sql, [type], database.options)).rows
}

async function addProduct(PRODUCT) {
    let FUNC = 'ADD_' + PRODUCT.TYPE;

    switch (PRODUCT.TYPE) {
        case 'MOTHERBOARD':
            {
                let sql = `
            BEGIN
            ${FUNC}(
                ${PRODUCT.PRICE},
                '${PRODUCT.IMAGE}',
                ${PRODUCT.STOCK},
                ${PRODUCT.WARRANTY},
                ${PRODUCT.BRANDID},
                '${PRODUCT.PRODUCT_NAME}',
                '${PRODUCT.TYPE}',
                '${PRODUCT.DETAILS}',                
                '${PRODUCT.CHIPSET}' ,
                '${PRODUCT.FORM_FACTOR}' ,
                '${PRODUCT.AUDIO}' ,
                '${PRODUCT.PCI}',
                '${PRODUCT.SUPPORTED_SOFTWARE}' ,
                '${PRODUCT.SLOTS}' ,
                '${PRODUCT.SUPPORTED_MEMORY}' ,
                '${PRODUCT.MAXIMUM_MEMORY}' ,
                '${PRODUCT.GRAPHICS}' ,
                '${PRODUCT.HDMI}' ,
                '${PRODUCT.USB_TYPE}' ,
                '${PRODUCT.LAN_PORTS}');
            END;
            `;
            return (await database.execute(sql, [], database.options));
            
            }
        case 'PROCESSOR':
            {
                let sql = `
                BEGIN
                ${FUNC}(
                    ${PRODUCT.PRICE},
                    '${PRODUCT.IMAGE}',
                    ${PRODUCT.STOCK},
                    ${PRODUCT.WARRANTY},
                    ${PRODUCT.BRANDID},
                    '${PRODUCT.PRODUCT_NAME}',
                    '${PRODUCT.TYPE}',
                    '${PRODUCT.DETAILS}',                
                    '${PRODUCT.BASE_FREQUENCY}' ,
                    '${PRODUCT.MAXIMUM_TURBO_FREQUENCY}' ,
                    '${PRODUCT.CACHE}' ,
                    '${PRODUCT.CORES}',
                    '${PRODUCT.THREADS}' ,
                    '${PRODUCT.PROCESSOR_BASE_POWER}' ,
                    '${PRODUCT.MAXIMUM_TURBO_POWER}' ,
                    '${PRODUCT.MAXIMUM_SIZE}' ,
                    '${PRODUCT.TYPE1}' ,
                    '${PRODUCT.TYPE2}' ,
                    '${PRODUCT.MAX_NUMBER_OF_CHANNELS}' ,
                    '${PRODUCT.PROCESSOR_GRAPHICS}');
                END;
                `;
                return (await database.execute(sql, [], database.options));
                 
            }
        

    }

    
}

async function updateProduct(PRODUCTID, PRODUCT) {
    let FUNC = 'UPDATE_' + PRODUCT.TYPE;
    
    switch (PRODUCT.TYPE) {
        case 'MOTHERBOARD':
            {
                let sql = `
            BEGIN
            ${FUNC}(${PRODUCTID},
                ${PRODUCT.PRICE},
                '${PRODUCT.IMAGE}',
                ${PRODUCT.STOCK},
                ${PRODUCT.WARRANTY},
                ${PRODUCT.BRANDID},
                '${PRODUCT.PRODUCT_NAME}',
                '${PRODUCT.TYPE}',
                '${PRODUCT.DETAILS}',                
                '${PRODUCT.CHIPSET}' ,
                '${PRODUCT.FORM_FACTOR}' ,
                '${PRODUCT.AUDIO}' ,
                '${PRODUCT.PCI}',
                '${PRODUCT.SUPPORTED_SOFTWARE}' ,
                '${PRODUCT.SLOTS}' ,
                '${PRODUCT.SUPPORTED_MEMORY}' ,
                '${PRODUCT.MAXIMUM_MEMORY}' ,
                '${PRODUCT.GRAPHICS}' ,
                '${PRODUCT.HDMI}' ,
                '${PRODUCT.USB_TYPE}' ,
                '${PRODUCT.LAN_PORTS}');
            END;
            `;
            return (await database.execute(sql, [], database.options));
            
            }
            case 'PROCESSOR':
            {
                let sql = `
                BEGIN
                ${FUNC}(${PRODUCTID},
                    ${PRODUCT.PRICE},
                    '${PRODUCT.IMAGE}',
                    ${PRODUCT.STOCK},
                    ${PRODUCT.WARRANTY},
                    ${PRODUCT.BRANDID},
                    '${PRODUCT.PRODUCT_NAME}',
                    '${PRODUCT.TYPE}',
                    '${PRODUCT.DETAILS}',                
                    '${PRODUCT.BASE_FREQUENCY}' ,
                    '${PRODUCT.MAXIMUM_TURBO_FREQUENCY}' ,
                    '${PRODUCT.CACHE}' ,
                    '${PRODUCT.CORES}',
                    '${PRODUCT.THREADS}' ,
                    '${PRODUCT.PROCESSOR_BASE_POWER}' ,
                    '${PRODUCT.MAXIMUM_TURBO_POWER}' ,
                    '${PRODUCT.MAXIMUM_SIZE}' ,
                    '${PRODUCT.TYPE1}' ,
                    '${PRODUCT.TYPE2}' ,
                    '${PRODUCT.MAX_NUMBER_OF_CHANNELS}' ,
                    '${PRODUCT.PROCESSOR_GRAPHICS}');
                END;
                `;
                return (await database.execute(sql, [], database.options));
                 
            }

    }

   
}

module.exports = {
    allProduct,
    getProductByID,
    getProductBySearch,
    getProductByType,
    addProduct,
    updateProduct
}