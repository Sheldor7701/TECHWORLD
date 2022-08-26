
const database = require('./database')


async function getAllUsers() {
    let sql = `
        SELECT* 
        FROM USERS
        
    `
    return (await database.execute(sql, [], database.options)).rows
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
async function getAllAds() {
    let sql = `
        SELECT* 
        FROM ADVERTISEMENT
    
    `
    return (await database.execute(sql, [], database.options)).rows
}
async function deleteAd(adid) {
    let sql = `
    BEGIN
    DELETE_AD(:ADID);
    END;
    
    `;
     (await database.execute(sql, [adid], database.options));
     return;
}
async function adPrioIncreament(adid) {
    let sql = `
    BEGIN
    AD_PRIO_INC(:ADID);
    END;
    
    `;
     (await database.execute(sql, [adid], database.options));
     return;
}

async function adPrioDecreament(adid) {
    let sql = `
    BEGIN
    AD_PRIO_DEC(:ADID);
    END;
    
    `;
     (await database.execute(sql, [adid], database.options));
     return;
}

async function newAd(productid,image, details, link) {
    let sql = `
    BEGIN
    NEW_AD(:PRODUCTID,:IMAGE,:DETAILS,:LINK);
    END;
    
    `;
     (await database.execute(sql, [productid,image, details, link], database.options));
     return;
}

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
async function deleteBrand(brandid) {
    let sql = `
    BEGIN
    DELETE_BRAND(:BRANDID);
    END;
    
    `;
     (await database.execute(sql, [brandid], database.options));
     return;
}

async function getAllNews() {
    let sql = `
        SELECT* 
        FROM BREAKING_NEWS 
        
    `
    return (await database.execute(sql, [], database.options)).rows
}

async function deleteBn(bnid) {
    let sql = `
    BEGIN
    DELETE_NEWS(:BNID);
    END;
    
    `;
     (await database.execute(sql, [bnid], database.options));
     return;
}

async function addNews(details) {
    let sql = `
    BEGIN
    ADD_NEWS(:DETAILS);
    END;
    
    `;
     (await database.execute(sql, [details], database.options));
     return;
}
async function showHideNews(bnid) {
    let sql = `
    BEGIN
    SHOW_HIDE_NEWS(:BNID);
    END;
    
    `;
     (await database.execute(sql, [bnid], database.options));
     return;
}


module.exports = {
    getAllUsers,
    deleteUser,
    banUnbanUser,
    getAllAds,
    deleteAd,
    adPrioIncreament,
    adPrioDecreament,
    newAd,
    getAllBrands,
    brandInfo,
    getAllFromBrand,
    newBrand,
    deleteBrand,
    getAllNews,
    deleteBn,
    addNews,
    showHideNews


}
