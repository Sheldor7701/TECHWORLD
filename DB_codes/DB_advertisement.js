
const database = require('./database')



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

async function newAd(type,productid,image, details, link) {
    let sql = `
    BEGIN
    NEW_AD(:TYPE,:PRODUCTID,:IMAGE,:DETAILS,:LINK);
    END;
    
    `;
     (await database.execute(sql, [type,productid,image, details, link], database.options));
     return;
}
async function updateAd(adid,type,productid,image, details, link) {
    let sql = `
    BEGIN
    UPDATE_AD(:ADID,:TYPE,:PRODUCTID,:IMAGE,:DETAILS,:LINK);
    END;
    
    `;
     (await database.execute(sql, [adid,type,productid,image, details, link], database.options));
     return;
}

module.exports = {

    getAllAds,
    deleteAd,
    adPrioIncreament,
    adPrioDecreament,
    newAd,
    updateAd

}
