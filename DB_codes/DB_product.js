const database = require('./database')

function getInt(chars){
    if(chars=='' || chars==null) return 0;
    return parseInt(chars);
}
function getString(chars){
    if(chars==null ) {
        // console.log("here");

        return '';
    }
    //console.log(chars);
    return chars;
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
      WHERE UPPER(TYPE) LIKE '${getString(string[0])}' OR UPPER(PRODUCT_NAME) LIKE '${getString(string[0])}' `
    for (let i = 1; i < string.length; i++) {
        sql += ` OR UPPER(TYPE) LIKE '${getString(string[i])}' OR UPPER(PRODUCT_NAME) LIKE '${getString(string[i])}'`;
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
                '${getString(PRODUCT.IMAGE)}',
                ${getInt(PRODUCT.STOCK)},
                ${getInt(PRODUCT.WARRANTY)},
                ${PRODUCT.BRANDID},
                '${getString(PRODUCT.PRODUCT_NAME)}',
                '${getString(PRODUCT.TYPE)}',
                '${getString(PRODUCT.DETAILS)}',                
                '${getString(PRODUCT.CHIPSET)}' ,
                '${getString(PRODUCT.FORM_FACTOR)}' ,
                '${getString(PRODUCT.AUDIO)}' ,
                '${getString(PRODUCT.PCI)}',
                '${getString(PRODUCT.SUPPORTED_SOFTWARE)}' ,
                '${getString(PRODUCT.SLOTS)}' ,
                '${getString(PRODUCT.SUPPORTED_MEMORY)}' ,
                '${getString(PRODUCT.MAXIMUM_MEMORY)}' ,
                '${getString(PRODUCT.GRAPHICS)}' ,
                '${getString(PRODUCT.HDMI)}' ,
                '${getString(PRODUCT.USB_TYPE)}' ,
                '${getString(PRODUCT.LAN_PORTS)}');
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
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.BASE_FREQUENCY)}' ,
                    '${getString(PRODUCT.MAXIMUM_TURBO_FREQUENCY)}' ,
                    '${getString(PRODUCT.CACHE)}' ,
                    '${getString(PRODUCT.CORES)}',
                    '${getString(PRODUCT.THREADS)}' ,
                    '${getString(PRODUCT.PROCESSOR_BASE_POWER)}' ,
                    '${getString(PRODUCT.MAXIMUM_TURBO_POWER)}' ,
                    '${getString(PRODUCT.MAXIMUM_SIZE)}' ,
                    '${getString(PRODUCT.TYPE1)}' ,
                    '${getString(PRODUCT.TYPE2)}' ,
                    '${getString(PRODUCT.MAX_NUMBER_OF_CHANNELS)}' ,
                    '${getString(PRODUCT.PROCESSOR_GRAPHICS)}');
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
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.GTYPE)}'  ,
                    '${getString(PRODUCT.GSIZE)}'  ,
                    '${getString(PRODUCT.RESOLUTION)}'  ,
                    '${getString(PRODUCT.BOOST_CLOCK)}'  ,
                    '${getString(PRODUCT.GAME_CLOCK)}'  ,
                    '${getString(PRODUCT.CLOCK_INFO)}'  ,
                    '${getString(PRODUCT.MEMORY_CLOCK)}'  ,
                    '${getString(PRODUCT.MEMORY_INTERFACE)}'  ,
                    '${getString(PRODUCT.STREAM_PROCESSORS)}'  ,
                    '${getString(PRODUCT.DISPALY_PORT)}'  ,
                    '${getString(PRODUCT.HDMI)}'  ,
                    '${getString(PRODUCT.CONNECTORS)}'  ,
                    '${getString(PRODUCT.RECOMMENDED_PSU)}'  ,
                    '${getString(PRODUCT.CONSUMPTION)}'  ,
                    '${getString(PRODUCT.MULTI_DISPLAY)}'  ,
                    '${getString(PRODUCT.DITERCTX)}'  ,
                    '${getString(PRODUCT.DIMENSION1)}'  ,
                    '${getString(PRODUCT.DIMENSION2)}'  ,
                    '${getString(PRODUCT.DIMENSION3)}'  ,
                    '${getString(PRODUCT.OTHERS1)}'  ,
                    '${getString(PRODUCT.OTHERS2)}'  ,
                    '${getString(PRODUCT.OTHERS3)}');
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
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.INTERFACE_TYPE)}'  ,
                    '${getString(PRODUCT.CAPACITY)}'  ,
                    '${getString(PRODUCT.RPM)}');
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
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.HEADPHONE_TYPE)}'  ,
                    '${getString(PRODUCT.FREQUENCY)}'  ,
                    '${getString(PRODUCT.WEIGHT)}'  ,
                    '${getString(PRODUCT.COLOR)}'  ,
                    '${getString(PRODUCT.USB_TYPE)}');
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
                        '${getString(PRODUCT.IMAGE)}',
                        ${getInt(PRODUCT.STOCK)},
                        ${getInt(PRODUCT.WARRANTY)},
                        ${PRODUCT.BRANDID},
                        '${getString(PRODUCT.PRODUCT_NAME)}',
                        '${getString(PRODUCT.TYPE)}',
                        '${getString(PRODUCT.DETAILS)}',                
                        '${getString(PRODUCT.KEYBOARD_TYPE)}'  ,
                        '${getString(PRODUCT.LIGHT)}'  ,
                        '${getString(PRODUCT.KEYS)}'  ,
                        '${getString(PRODUCT.DIMENTION)}'  ,
                        '${getString(PRODUCT.COLOR)}');
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
                            '${getString(PRODUCT.IMAGE)}',
                            ${getInt(PRODUCT.STOCK)},
                            ${getInt(PRODUCT.WARRANTY)},
                            ${PRODUCT.BRANDID},
                            '${getString(PRODUCT.PRODUCT_NAME)}',
                            '${getString(PRODUCT.TYPE)}',
                            '${getString(PRODUCT.DETAILS)}',                
                            '${getString(PRODUCT.DISPLAY)}'  ,
                            '${getString(PRODUCT.GRAPHICS)}'  ,
                            '${getString(PRODUCT.STORAGE)}'  ,
                            '${getString(PRODUCT.MEMORY)}'  ,
                            '${getString(PRODUCT.PROCESSOR)}'  ,
                            '${getString(PRODUCT.ADAPTER)}'  ,
                            '${getString(PRODUCT.BATTERY)}'  ,
                            '${getString(PRODUCT.OPERATING_SYSTEM)}'  ,
                            '${getString(PRODUCT.NETWORKING)}'  ,
                            '${getString(PRODUCT.KEYBOARD)}'  ,
                            '${getString(PRODUCT.BLUETOOTH)}'  ,
                            '${getString(PRODUCT.AUDIO)}'  ,
                            '${getString(PRODUCT.WEBCAM)}'  ,
                            '${getString(PRODUCT.PORTS_CONNECTORS)}'  ,
                            '${getString(PRODUCT.COLOR)}'  ,
                            '${getString(PRODUCT.WEIGHT)}');
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
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.SCREEN_SIZE)}'  ,
                    '${getString(PRODUCT.REFRESH_RATE)}'  ,
                    '${getString(PRODUCT.DISPLAY_TYPE)}'  ,
                    '${getString(PRODUCT.RESOLUTION)}'  ,
                    '${getString(PRODUCT.BRIGHTNESS)}'  ,
                    '${getString(PRODUCT.CONTRAST_RATIO)}'  ,
                    '${getString(PRODUCT.ASPECT_RATIO)}'  ,
                    '${getString(PRODUCT.COLOR)}'  ,
                    '${getString(PRODUCT.I_O_PORTS)}'  ,
                    '${getString(PRODUCT.RESPONSE_TIME)}'  ,
                    '${getString(PRODUCT.VIEWING_ANGLE)}'  ,
                    '${getString(PRODUCT.AUDIO_FEATURES)}'  ,
                    '${getString(PRODUCT.VIDEO_FEATURES)}'  ,
                    '${getString(PRODUCT.POWER)}'  ,
                    '${getString(PRODUCT.WEIGHT)}'  ,
                    '${getString(PRODUCT.DIMENSIONS)}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }

                case 'MOUSE':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(
                    ${getInt(PRODUCT.PRICE)},
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.MOUSE_TYPE)}'  ,
                    '${getString(PRODUCT.BUTTONS)}'  ,
                    '${getString(PRODUCT.WEIGHT)}'  ,
                    '${getString(PRODUCT.DPI)}' );
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }

                case 'POWER_SUPPLY':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(
                    ${getInt(PRODUCT.PRICE)},
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.EFFICIENCY)}'  ,
                    '${getString(PRODUCT.CERTIFICATION)}'  ,
                    '${getString(PRODUCT.FAN_SIZE)}'  ,
                    '${getString(PRODUCT.MODULAR_TYPE)}'  ,
                    '${getString(PRODUCT.TOTAL_POWER)}'  ,
                    '${getString(PRODUCT.PEAK_POWER)}'  ,
                    '${getString(PRODUCT.AC_INPUT)}'  ,
                    '${getString(PRODUCT.DC_OUTPUT)}'  ,
                    '${getString(PRODUCT.MAIN_POWER)}'  ,
                    '${getString(PRODUCT.CPU)}'  ,
                    '${getString(PRODUCT.PCI_E)}'  ,
                    '${getString(PRODUCT.SATA)}'  ,
                    '${getString(PRODUCT.MOLEX)}' );
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }

                case 'RAM':
                    {
                        let sql = `
                        BEGIN
                        ${FUNC}(
                        ${getInt(PRODUCT.PRICE)},
                        '${getString(PRODUCT.IMAGE)}',
                        ${getInt(PRODUCT.STOCK)},
                        ${getInt(PRODUCT.WARRANTY)},
                        ${PRODUCT.BRANDID},
                        '${getString(PRODUCT.PRODUCT_NAME)}',
                        '${getString(PRODUCT.TYPE)}',
                        '${getString(PRODUCT.DETAILS)}',                
                        '${getString(PRODUCT.RTYPE)}'  ,
                        '${getString(PRODUCT.CAPACITY)}'  ,
                        '${getString(PRODUCT.FREQUENCY)}'  ,
                        '${getString(PRODUCT.OPERATING_VOLTAGE)}'  ,
                        '${getString(PRODUCT.LATENCY)}'  ,
                        '${getString(PRODUCT.HEAT_SINK_COLOR)}'  ,
                        '${getString(PRODUCT.PIN)}'  );
                        END;
                        `;
                        return (await database.execute(sql, [], database.options));
                         
                    }
                    case 'SPEAKER':
                        {
                            let sql = `
                            BEGIN
                            ${FUNC}(${PRODUCTID}  ,
                            ${getInt(PRODUCT.PRICE)},
                            '${getString(PRODUCT.IMAGE)}',
                            ${getInt(PRODUCT.STOCK)},
                            ${getInt(PRODUCT.WARRANTY)},
                            ${PRODUCT.BRANDID},
                            '${getString(PRODUCT.PRODUCT_NAME)}',
                            '${getString(PRODUCT.TYPE)}',
                            '${getString(PRODUCT.DETAILS)}',                
                            '${getString(PRODUCT.SPEAKER_TYPE)}'  ,
                            '${getString(PRODUCT.FREQUENCY)}'  ,
                            '${getString(PRODUCT.NOISE)}');
                            END;
                            `;
                            return (await database.execute(sql, [], database.options));
                             
                        }

                        case 'SSD':
                            {
                                let sql = `
                                BEGIN
                                ${FUNC}(
                                ${getInt(PRODUCT.PRICE)},
                                '${getString(PRODUCT.IMAGE)}',
                                ${getInt(PRODUCT.STOCK)},
                                ${getInt(PRODUCT.WARRANTY)},
                                ${PRODUCT.BRANDID},
                                '${getString(PRODUCT.PRODUCT_NAME)}',
                                '${getString(PRODUCT.TYPE)}',
                                '${getString(PRODUCT.DETAILS)}',                
                                '${getString(PRODUCT.CAPACITY)}'  ,
                                '${getString(PRODUCT.FORM_FACTOR)}'  ,
                                '${getString(PRODUCT.FLASH_TYPE)}'  ,
                                '${getString(PRODUCT.INTERFACE)}'  ,
                                '${getString(PRODUCT.SEQ_READS)}'  ,
                                '${getString(PRODUCT.SEQ_WRITES)}'  ,
                                '${getString(PRODUCT.DIMENSION)}'  ,
                                '${getString(PRODUCT.WEIGHT)}'  );
                                END;
                                `;
                                return (await database.execute(sql, [], database.options));
                                 
                            }

                            case 'UPS':
                                {
                                    let sql = `
                                    BEGIN
                                    ${FUNC}(
                                    ${getInt(PRODUCT.PRICE)},
                                    '${getString(PRODUCT.IMAGE)}',
                                    ${getInt(PRODUCT.STOCK)},
                                    ${getInt(PRODUCT.WARRANTY)},
                                    ${PRODUCT.BRANDID},
                                    '${getString(PRODUCT.PRODUCT_NAME)}',
                                    '${getString(PRODUCT.TYPE)}',
                                    '${getString(PRODUCT.DETAILS)}',                
                                    '${getString(PRODUCT.UPS_TYPE)}'  ,
                                    '${getString(PRODUCT.CAPACITY)}'  ,
                                    '${getString(PRODUCT.BATTERY)}'  ,
                                    '${getString(PRODUCT.BACKUP_TIME)}'  ,
                                    '${getString(PRODUCT.PORTS)}' );
                                    END;
                                    `;
                                    return (await database.execute(sql, [], database.options));
                                     
                                }
                                case 'WEBCAM':
                                    {
                                        let sql = `
                                        BEGIN
                                        ${FUNC}(
                                        ${getInt(PRODUCT.PRICE)},
                                        '${getString(PRODUCT.IMAGE)}',
                                        ${getInt(PRODUCT.STOCK)},
                                        ${getInt(PRODUCT.WARRANTY)},
                                        ${PRODUCT.BRANDID},
                                        '${getString(PRODUCT.PRODUCT_NAME)}',
                                        '${getString(PRODUCT.TYPE)}',
                                        '${getString(PRODUCT.DETAILS)}',                
                                        '${getString(PRODUCT.WEBCAM_TYPE)}'  ,
                                        '${getString(PRODUCT.RESOLUTION)}'  ,
                                        '${getString(PRODUCT.WEIGHT)}'  ,
                                        '${getString(PRODUCT.MICROPHONE)}'  ,
                                        '${getString(PRODUCT.ZOOM)}' );
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
                '${getString(PRODUCT.IMAGE)}',
                ${getInt(PRODUCT.STOCK)},
                ${getInt(PRODUCT.WARRANTY)},
                ${PRODUCT.BRANDID},
                '${getString(PRODUCT.PRODUCT_NAME)}',
                '${getString(PRODUCT.TYPE)}',
                '${getString(PRODUCT.DETAILS)}',                
                '${getString(PRODUCT.CHIPSET)}' ,
                '${getString(PRODUCT.FORM_FACTOR)}' ,
                '${getString(PRODUCT.AUDIO)}' ,
                '${getString(PRODUCT.PCI)}',
                '${getString(PRODUCT.SUPPORTED_SOFTWARE)}' ,
                '${getString(PRODUCT.SLOTS)}' ,
                '${getString(PRODUCT.SUPPORTED_MEMORY)}' ,
                '${getString(PRODUCT.MAXIMUM_MEMORY)}' ,
                '${getString(PRODUCT.GRAPHICS)}' ,
                '${getString(PRODUCT.HDMI)}' ,
                '${getString(PRODUCT.USB_TYPE)}' ,
                '${getString(PRODUCT.LAN_PORTS)}');
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
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.BASE_FREQUENCY)}' ,
                    '${getString(PRODUCT.MAXIMUM_TURBO_FREQUENCY)}' ,
                    '${getString(PRODUCT.CACHE)}' ,
                    '${getString(PRODUCT.CORES)}',
                    '${getString(PRODUCT.THREADS)}' ,
                    '${getString(PRODUCT.PROCESSOR_BASE_POWER)}' ,
                    '${getString(PRODUCT.MAXIMUM_TURBO_POWER)}' ,
                    '${getString(PRODUCT.MAXIMUM_SIZE)}' ,
                    '${getString(PRODUCT.TYPE1)}' ,
                    '${getString(PRODUCT.TYPE2)}' ,
                    '${getString(PRODUCT.MAX_NUMBER_OF_CHANNELS)}' ,
                    '${getString(PRODUCT.PROCESSOR_GRAPHICS)}');
                END;
                `;
                return (await database.execute(sql, [], database.options));
                 
            }
            case 'GRAPHICS_CARD':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.GTYPE)}'  ,
                    '${getString(PRODUCT.GSIZE)}'  ,
                    '${getString(PRODUCT.RESOLUTION)}'  ,
                    '${getString(PRODUCT.BOOST_CLOCK)}'  ,
                    '${getString(PRODUCT.GAME_CLOCK)}'  ,
                    '${getString(PRODUCT.CLOCK_INFO)}'  ,
                    '${getString(PRODUCT.MEMORY_CLOCK)}'  ,
                    '${getString(PRODUCT.MEMORY_INTERFACE)}'  ,
                    '${getString(PRODUCT.STREAM_PROCESSORS)}'  ,
                    '${getString(PRODUCT.DISPALY_PORT)}'  ,
                    '${getString(PRODUCT.HDMI)}'  ,
                    '${getString(PRODUCT.CONNECTORS)}'  ,
                    '${getString(PRODUCT.RECOMMENDED_PSU)}'  ,
                    '${getString(PRODUCT.CONSUMPTION)}'  ,
                    '${getString(PRODUCT.MULTI_DISPLAY)}'  ,
                    '${getString(PRODUCT.DITERCTX)}'  ,
                    '${getString(PRODUCT.DIMENSION1)}'  ,
                    '${getString(PRODUCT.DIMENSION2)}'  ,
                    '${getString(PRODUCT.DIMENSION3)}'  ,
                    '${getString(PRODUCT.OTHERS1)}'  ,
                    '${getString(PRODUCT.OTHERS2)}'  ,
                    '${getString(PRODUCT.OTHERS3)}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                } 
                
                case 'HDD':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.INTERFACE_TYPE)}'  ,
                    '${getString(PRODUCT.CAPACITY)}'  ,
                    '${getString(PRODUCT.RPM)}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }
                case 'HEADPHONE':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.HEADPHONE_TYPE)}'  ,
                    '${getString(PRODUCT.FREQUENCY)}'  ,
                    '${getString(PRODUCT.WEIGHT)}'  ,
                    '${getString(PRODUCT.COLOR)}'  ,
                    '${getString(PRODUCT.USB_TYPE)}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }

                case 'KEYBOARD':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.KEYBOARD_TYPE)}'  ,
                    '${getString(PRODUCT.LIGHT)}'  ,
                    '${getString(PRODUCT.KEYS)}'  ,
                    '${getString(PRODUCT.DIMENTION)}'  ,
                    '${getString(PRODUCT.COLOR)}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }
                case 'LAPTOP':
                {
                    console.log(PRODUCT);
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.DISPLAY)}'  ,
                    '${getString(PRODUCT.GRAPHICS)}'  ,
                    '${getString(PRODUCT.STORAGE)}'  ,
                    '${getString(PRODUCT.MEMORY)}'  ,
                    '${getString(PRODUCT.PROCESSOR)}'  ,
                    '${getString(PRODUCT.ADAPTER)}'  ,
                    '${getString(PRODUCT.BATTERY)}'  ,
                    '${getString(PRODUCT.OPERATING_SYSTEM)}'  ,
                    '${getString(PRODUCT.NETWORKING)}'  ,
                    '${getString(PRODUCT.KEYBOARD)}'  ,
                    '${getString(PRODUCT.BLUETOOTH)}'  ,
                    '${getString(PRODUCT.AUDIO)}'  ,
                    '${getString(PRODUCT.WEBCAM)}'  ,
                    '${getString(PRODUCT.PORTS_CONNECTORS)}'  ,
                    '${getString(PRODUCT.COLOR)}'  ,
                    '${getString(PRODUCT.WEIGHT)}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }

                case 'MONITOR':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.SCREEN_SIZE)}'  ,
                    '${getString(PRODUCT.REFRESH_RATE)}'  ,
                    '${getString(PRODUCT.DISPLAY_TYPE)}'  ,
                    '${getString(PRODUCT.RESOLUTION)}'  ,
                    '${getString(PRODUCT.BRIGHTNESS)}'  ,
                    '${getString(PRODUCT.CONTRAST_RATIO)}'  ,
                    '${getString(PRODUCT.ASPECT_RATIO)}'  ,
                    '${getString(PRODUCT.COLOR)}'  ,
                    '${getString(PRODUCT.I_O_PORTS)}'  ,
                    '${getString(PRODUCT.RESPONSE_TIME)}'  ,
                    '${getString(PRODUCT.VIEWING_ANGLE)}'  ,
                    '${getString(PRODUCT.AUDIO_FEATURES)}'  ,
                    '${getString(PRODUCT.VIDEO_FEATURES)}'  ,
                    '${getString(PRODUCT.POWER)}'  ,
                    '${getString(PRODUCT.WEIGHT)}'  ,
                    '${getString(PRODUCT.DIMENSIONS)}');
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }

                case 'MOUSE':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.MOUSE_TYPE)}'  ,
                    '${getString(PRODUCT.BUTTONS)}'  ,
                    '${getString(PRODUCT.WEIGHT)}'  ,
                    '${getString(PRODUCT.DPI)}' );
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }

                case 'POWER_SUPPLY':
                {
                    let sql = `
                    BEGIN
                    ${FUNC}(${PRODUCTID}  ,
                    ${getInt(PRODUCT.PRICE)},
                    '${getString(PRODUCT.IMAGE)}',
                    ${getInt(PRODUCT.STOCK)},
                    ${getInt(PRODUCT.WARRANTY)},
                    ${PRODUCT.BRANDID},
                    '${getString(PRODUCT.PRODUCT_NAME)}',
                    '${getString(PRODUCT.TYPE)}',
                    '${getString(PRODUCT.DETAILS)}',                
                    '${getString(PRODUCT.EFFICIENCY)}'  ,
                    '${getString(PRODUCT.CERTIFICATION)}'  ,
                    '${getString(PRODUCT.FAN_SIZE)}'  ,
                    '${getString(PRODUCT.MODULAR_TYPE)}'  ,
                    '${getString(PRODUCT.TOTAL_POWER)}'  ,
                    '${getString(PRODUCT.PEAK_POWER)}'  ,
                    '${getString(PRODUCT.AC_INPUT)}'  ,
                    '${getString(PRODUCT.DC_OUTPUT)}'  ,
                    '${getString(PRODUCT.MAIN_POWER)}'  ,
                    '${getString(PRODUCT.CPU)}'  ,
                    '${getString(PRODUCT.PCI_E)}'  ,
                    '${getString(PRODUCT.SATA)}'  ,
                    '${getString(PRODUCT.MOLEX)}' );
                    END;
                    `;
                    return (await database.execute(sql, [], database.options));
                     
                }
                case 'RAM':
                    {
                        let sql = `
                        BEGIN
                        ${FUNC}(${PRODUCTID}  ,
                        ${getInt(PRODUCT.PRICE)},
                        '${getString(PRODUCT.IMAGE)}',
                        ${getInt(PRODUCT.STOCK)},
                        ${getInt(PRODUCT.WARRANTY)},
                        ${PRODUCT.BRANDID},
                        '${getString(PRODUCT.PRODUCT_NAME)}',
                        '${getString(PRODUCT.TYPE)}',
                        '${getString(PRODUCT.DETAILS)}',                
                        '${getString(PRODUCT.RTYPE)}'  ,
                        '${getString(PRODUCT.CAPACITY)}'  ,
                        '${getString(PRODUCT.FREQUENCY)}'  ,
                        '${getString(PRODUCT.OPERATING_VOLTAGE)}'  ,
                        '${getString(PRODUCT.LATENCY)}'  ,
                        '${getString(PRODUCT.HEAT_SINK_COLOR)}'  ,
                        '${getString(PRODUCT.PIN)}'  );
                        END;
                        `;
                        return (await database.execute(sql, [], database.options));
                         
                    }
                    case 'SPEAKER':
                        {
                            let sql = `
                            BEGIN
                            ${FUNC}(${PRODUCTID}  ,
                            ${getInt(PRODUCT.PRICE)},
                            '${getString(PRODUCT.IMAGE)}',
                            ${getInt(PRODUCT.STOCK)},
                            ${getInt(PRODUCT.WARRANTY)},
                            ${PRODUCT.BRANDID},
                            '${getString(PRODUCT.PRODUCT_NAME)}',
                            '${getString(PRODUCT.TYPE)}',
                            '${getString(PRODUCT.DETAILS)}',                
                            '${getString(PRODUCT.SPEAKER_TYPE)}'  ,
                            '${getString(PRODUCT.FREQUENCY)}'  ,
                            '${getString(PRODUCT.NOISE)}');
                            END;
                            `;
                            return (await database.execute(sql, [], database.options));
                             
                        }
                        case 'SSD':
                            {
                                let sql = `
                                BEGIN
                                ${FUNC}(${PRODUCTID}  ,
                                ${getInt(PRODUCT.PRICE)},
                                '${getString(PRODUCT.IMAGE)}',
                                ${getInt(PRODUCT.STOCK)},
                                ${getInt(PRODUCT.WARRANTY)},
                                ${PRODUCT.BRANDID},
                                '${getString(PRODUCT.PRODUCT_NAME)}',
                                '${getString(PRODUCT.TYPE)}',
                                '${getString(PRODUCT.DETAILS)}',                
                                '${getString(PRODUCT.CAPACITY)}'  ,
                                '${getString(PRODUCT.FORM_FACTOR)}'  ,
                                '${getString(PRODUCT.FLASH_TYPE)}'  ,
                                '${getString(PRODUCT.INTERFACE)}'  ,
                                '${getString(PRODUCT.SEQ_READS)}'  ,
                                '${getString(PRODUCT.SEQ_WRITES)}'  ,
                                '${getString(PRODUCT.DIMENSION)}'  ,
                                '${getString(PRODUCT.WEIGHT)}'  );
                                END;
                                `;
                                return (await database.execute(sql, [], database.options));
                                 
                            }

                            case 'UPS':
                            {
                                let sql = `
                                BEGIN
                                ${FUNC}(${PRODUCTID}  ,
                                ${getInt(PRODUCT.PRICE)},
                                '${getString(PRODUCT.IMAGE)}',
                                ${getInt(PRODUCT.STOCK)},
                                ${getInt(PRODUCT.WARRANTY)},
                                ${PRODUCT.BRANDID},
                                '${getString(PRODUCT.PRODUCT_NAME)}',
                                '${getString(PRODUCT.TYPE)}',
                                '${getString(PRODUCT.DETAILS)}',                
                                '${getString(PRODUCT.UPS_TYPE)}'  ,
                                '${getString(PRODUCT.CAPACITY)}'  ,
                                '${getString(PRODUCT.BATTERY)}'  ,
                                '${getString(PRODUCT.BACKUP_TIME)}'  ,
                                '${getString(PRODUCT.PORTS)}' );
                                END;
                                `;
                                return (await database.execute(sql, [], database.options));
                                 
                            }

                            case 'WEBCAM':
                            {
                                let sql = `
                                BEGIN
                                ${FUNC}(${PRODUCTID}  ,
                                ${getInt(PRODUCT.PRICE)},
                                '${getString(PRODUCT.IMAGE)}',
                                ${getInt(PRODUCT.STOCK)},
                                ${getInt(PRODUCT.WARRANTY)},
                                ${PRODUCT.BRANDID},
                                '${getString(PRODUCT.PRODUCT_NAME)}',
                                '${getString(PRODUCT.TYPE)}',
                                '${getString(PRODUCT.DETAILS)}',                
                                '${getString(PRODUCT.WEBCAM_TYPE)}'  ,
                                '${getString(PRODUCT.RESOLUTION)}'  ,
                                '${getString(PRODUCT.WEIGHT)}'  ,
                                '${getString(PRODUCT.MICROPHONE)}'  ,
                                '${getString(PRODUCT.ZOOM)}' );
                                END;
                                `;
                                return (await database.execute(sql, [], database.options));
                                 
                            }
    }

   
}
async function getCompatibleMotherboards(PRODUCTID){
    let sql = `
    SELECT  M.PRODUCTID AS PRODUCTID,PRODUCT_NAME
     FROM MOTHERBOARD M JOIN MOTHERBOARD_COMPATIBILITY C
		 ON M.PRODUCTID= C.MOTHERBOARDID AND C.PRODUCTID=${PRODUCTID}
		 JOIN PRODUCTS P ON M.PRODUCTID=P.PRODUCTID
		 ;
		 
     
       `;
    return (await database.execute(sql, [], database.options)).rows 
}

module.exports = {
    allProduct,
    getProductByID,
    getProductBySearch,
    getProductByType,
    addProduct,
    updateProduct,
    getCompatibleMotherboards
}