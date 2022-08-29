const database = require('./database')

function getInt(chars){
    if(chars=='') return 0;
    return parseInt(chars);
}
// ${getInt(PRODUCT.PRICE)},
// ${getInt(PRODUCT.STOCK)},
// ${getInt(PRODUCT.WARRANTY)},
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
                ${getInt(PRODUCT.PRICE)},
                '${PRODUCT.IMAGE}',
                ${getInt(PRODUCT.STOCK)},
                ${getInt(PRODUCT.WARRANTY)},
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
                    ${getInt(PRODUCT.PRICE)},
                    '${PRODUCT.IMAGE}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
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
            case 'GRAPHICS_CARD':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(
                    ${getInt(PRODUCT.PRICE)},
                    '${PRODUCT.IMAGE}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${PRODUCT.PRODUCT_NAME}',
                    '${PRODUCT.TYPE}',
                    '${PRODUCT.DETAILS}',                
                    '${PRODUCT.GTYPE}'  ,
                    '${PRODUCT.GSIZE}'  ,
                    '${PRODUCT.RESOLUTION}'  ,
                    '${PRODUCT.BOOST_CLOCK}'  ,
                    '${PRODUCT.GAME_CLOCK}'  ,
                    '${PRODUCT.CLOCK_INFO}'  ,
                    '${PRODUCT.MEMORY_CLOCK}'  ,
                    '${PRODUCT.MEMORY_INTERFACE}'  ,
                    '${PRODUCT.STREAM_PROCESSORS}'  ,
                    '${PRODUCT.DISPALY_PORT}'  ,
                    '${PRODUCT.HDMI}'  ,
                    '${PRODUCT.CONNECTORS}'  ,
                    '${PRODUCT.RECOMMENDED_PSU}'  ,
                    '${PRODUCT.CONSUMPTION}'  ,
                    '${PRODUCT.MULTI_DISPLAY}'  ,
                    '${PRODUCT.DITERCTX}'  ,
                    '${PRODUCT.DIMENSION1}'  ,
                    '${PRODUCT.DIMENSION2}'  ,
                    '${PRODUCT.DIMENSION3}'  ,
                    '${PRODUCT.OTHERS1}'  ,
                    '${PRODUCT.OTHERS2}'  ,
                    '${PRODUCT.OTHERS3}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                } 
                
                case 'HDD':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(
                    ${getInt(PRODUCT.PRICE)},
                    '${PRODUCT.IMAGE}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${PRODUCT.PRODUCT_NAME}',
                    '${PRODUCT.TYPE}',
                    '${PRODUCT.DETAILS}',                
                    '${PRODUCT.INTERFACE_TYPE}'  ,
                    '${PRODUCT.CAPACITY}'  ,
                    '${PRODUCT.RPM}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                } 
                case 'HEADPHONE':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(
                    ${getInt(PRODUCT.PRICE)},
                    '${PRODUCT.IMAGE}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${PRODUCT.PRODUCT_NAME}',
                    '${PRODUCT.TYPE}',
                    '${PRODUCT.DETAILS}',                
                    '${PRODUCT.HEADPHONE_TYPE}'  ,
                    '${PRODUCT.FREQUENCY}'  ,
                    '${PRODUCT.WEIGHT}'  ,
                    '${PRODUCT.COLOR}'  ,
                    '${PRODUCT.USB_TYPE}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }
                case 'KEYBOARD':
                    {
                        let sql = `
                        BEGIN
                        ${FUNC}(
                        ${getInt(PRODUCT.PRICE)},
                        '${PRODUCT.IMAGE}',
                        ${getInt(PRODUCT.STOCK)},
                        ${getInt(PRODUCT.WARRANTY)},
                        ${PRODUCT.BRANDID},
                        '${PRODUCT.PRODUCT_NAME}',
                        '${PRODUCT.TYPE}',
                        '${PRODUCT.DETAILS}',                
                        '${PRODUCT.KEYBOARD_TYPE}'  ,
                        '${PRODUCT.LIGHT}'  ,
                        '${PRODUCT.KEYS}'  ,
                        '${PRODUCT.DIMENTION}'  ,
                        '${PRODUCT.COLOR}');
                        END;
                        `;
                        return (await database.execute(sql, [], database.options));
                         
                    }
                    case 'LAPTOP':
                        {
                            let sql = `
                            BEGIN
                            ${FUNC}(
                            ${getInt(PRODUCT.PRICE)},
                            '${PRODUCT.IMAGE}',
                            ${getInt(PRODUCT.STOCK)},
                            ${getInt(PRODUCT.WARRANTY)},
                            ${PRODUCT.BRANDID},
                            '${PRODUCT.PRODUCT_NAME}',
                            '${PRODUCT.TYPE}',
                            '${PRODUCT.DETAILS}',                
                            '${PRODUCT.DISPLAY}'  ,
                            '${PRODUCT.GRAPHICS}'  ,
                            '${PRODUCT.STORAGE}'  ,
                            '${PRODUCT.MEMORY}'  ,
                            '${PRODUCT.PROCESSOR}'  ,
                            '${PRODUCT.ADAPTER}'  ,
                            '${PRODUCT.BATTERY}'  ,
                            '${PRODUCT.OPERATING_SYSTEM}'  ,
                            '${PRODUCT.NETWORKING}'  ,
                            '${PRODUCT.KEYBOARD}'  ,
                            '${PRODUCT.BLUETOOTH}'  ,
                            '${PRODUCT.AUDIO}'  ,
                            '${PRODUCT.WEBCAM}'  ,
                            '${PRODUCT.PORTS_CONNECTORS}'  ,
                            '${PRODUCT.COLOR}'  ,
                            '${PRODUCT.WEIGHT}');
                            END;
                            `;
                            return (await database.execute(sql, [], database.options));
                             
                        } 
                        
                        case 'MONITOR':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(
                    ${getInt(PRODUCT.PRICE)},
                    '${PRODUCT.IMAGE}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${PRODUCT.PRODUCT_NAME}',
                    '${PRODUCT.TYPE}',
                    '${PRODUCT.DETAILS}',                
                    '${PRODUCT.SCREEN_SIZE}'  ,
                    '${PRODUCT.REFRESH_RATE}'  ,
                    '${PRODUCT.DISPLAY_TYPE}'  ,
                    '${PRODUCT.RESOLUTION}'  ,
                    '${PRODUCT.BRIGHTNESS}'  ,
                    '${PRODUCT.CONTRAST_RATIO}'  ,
                    '${PRODUCT.ASPECT_RATIO}'  ,
                    '${PRODUCT.COLOR}'  ,
                    '${PRODUCT.I_O_PORTS}'  ,
                    '${PRODUCT.RESPONSE_TIME}'  ,
                    '${PRODUCT.VIEWING_ANGLE}'  ,
                    '${PRODUCT.AUDIO_FEATURES}'  ,
                    '${PRODUCT.VIDEO_FEATURES}'  ,
                    '${PRODUCT.POWER}'  ,
                    '${PRODUCT.WEIGHT}'  ,
                    '${PRODUCT.DIMENSIONS}');
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
                ${getInt(PRODUCT.PRICE)},
                '${PRODUCT.IMAGE}',
                ${getInt(PRODUCT.STOCK)},
                ${getInt(PRODUCT.WARRANTY)},
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
                    ${getInt(PRODUCT.PRICE)},
                    '${PRODUCT.IMAGE}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
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
            case 'GRAPHICS_CARD':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCT.PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${PRODUCT.IMAGE}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${PRODUCT.PRODUCT_NAME}',
                    '${PRODUCT.TYPE}',
                    '${PRODUCT.DETAILS}',                
                    '${PRODUCT.GTYPE}'  ,
                    '${PRODUCT.GSIZE}'  ,
                    '${PRODUCT.RESOLUTION}'  ,
                    '${PRODUCT.BOOST_CLOCK}'  ,
                    '${PRODUCT.GAME_CLOCK}'  ,
                    '${PRODUCT.CLOCK_INFO}'  ,
                    '${PRODUCT.MEMORY_CLOCK}'  ,
                    '${PRODUCT.MEMORY_INTERFACE}'  ,
                    '${PRODUCT.STREAM_PROCESSORS}'  ,
                    '${PRODUCT.DISPALY_PORT}'  ,
                    '${PRODUCT.HDMI}'  ,
                    '${PRODUCT.CONNECTORS}'  ,
                    '${PRODUCT.RECOMMENDED_PSU}'  ,
                    '${PRODUCT.CONSUMPTION}'  ,
                    '${PRODUCT.MULTI_DISPLAY}'  ,
                    '${PRODUCT.DITERCTX}'  ,
                    '${PRODUCT.DIMENSION1}'  ,
                    '${PRODUCT.DIMENSION2}'  ,
                    '${PRODUCT.DIMENSION3}'  ,
                    '${PRODUCT.OTHERS1}'  ,
                    '${PRODUCT.OTHERS2}'  ,
                    '${PRODUCT.OTHERS3}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                } 
                
                case 'HDD':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCT.PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${PRODUCT.IMAGE}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${PRODUCT.PRODUCT_NAME}',
                    '${PRODUCT.TYPE}',
                    '${PRODUCT.DETAILS}',                
                    '${PRODUCT.INTERFACE_TYPE}'  ,
                    '${PRODUCT.CAPACITY}'  ,
                    '${PRODUCT.RPM}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }
                case 'HEADPHONE':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCT.PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${PRODUCT.IMAGE}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${PRODUCT.PRODUCT_NAME}',
                    '${PRODUCT.TYPE}',
                    '${PRODUCT.DETAILS}',                
                    '${PRODUCT.HEADPHONE_TYPE}'  ,
                    '${PRODUCT.FREQUENCY}'  ,
                    '${PRODUCT.WEIGHT}'  ,
                    '${PRODUCT.COLOR}'  ,
                    '${PRODUCT.USB_TYPE}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }

                case 'KEYBOARD':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCT.PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${PRODUCT.IMAGE}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${PRODUCT.PRODUCT_NAME}',
                    '${PRODUCT.TYPE}',
                    '${PRODUCT.DETAILS}',                
                    '${PRODUCT.KEYBOARD_TYPE}'  ,
                    '${PRODUCT.LIGHT}'  ,
                    '${PRODUCT.KEYS}'  ,
                    '${PRODUCT.DIMENTION}'  ,
                    '${PRODUCT.COLOR}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }
                case 'LAPTOP':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCT.PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${PRODUCT.IMAGE}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${PRODUCT.PRODUCT_NAME}',
                    '${PRODUCT.TYPE}',
                    '${PRODUCT.DETAILS}',                
                    '${PRODUCT.DISPLAY}'  ,
                    '${PRODUCT.GRAPHICS}'  ,
                    '${PRODUCT.STORAGE}'  ,
                    '${PRODUCT.MEMORY}'  ,
                    '${PRODUCT.PROCESSOR}'  ,
                    '${PRODUCT.ADAPTER}'  ,
                    '${PRODUCT.BATTERY}'  ,
                    '${PRODUCT.OPERATING_SYSTEM}'  ,
                    '${PRODUCT.NETWORKING}'  ,
                    '${PRODUCT.KEYBOARD}'  ,
                    '${PRODUCT.BLUETOOTH}'  ,
                    '${PRODUCT.AUDIO}'  ,
                    '${PRODUCT.WEBCAM}'  ,
                    '${PRODUCT.PORTS_CONNECTORS}'  ,
                    '${PRODUCT.COLOR}'  ,
                    '${PRODUCT.WEIGHT}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }

                case 'MONITOR':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCT.PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${PRODUCT.IMAGE}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${PRODUCT.PRODUCT_NAME}',
                    '${PRODUCT.TYPE}',
                    '${PRODUCT.DETAILS}',                
                    '${PRODUCT.SCREEN_SIZE}'  ,
                    '${PRODUCT.REFRESH_RATE}'  ,
                    '${PRODUCT.DISPLAY_TYPE}'  ,
                    '${PRODUCT.RESOLUTION}'  ,
                    '${PRODUCT.BRIGHTNESS}'  ,
                    '${PRODUCT.CONTRAST_RATIO}'  ,
                    '${PRODUCT.ASPECT_RATIO}'  ,
                    '${PRODUCT.COLOR}'  ,
                    '${PRODUCT.I_O_PORTS}'  ,
                    '${PRODUCT.RESPONSE_TIME}'  ,
                    '${PRODUCT.VIEWING_ANGLE}'  ,
                    '${PRODUCT.AUDIO_FEATURES}'  ,
                    '${PRODUCT.VIDEO_FEATURES}'  ,
                    '${PRODUCT.POWER}'  ,
                    '${PRODUCT.WEIGHT}'  ,
                    '${PRODUCT.DIMENSIONS}');
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