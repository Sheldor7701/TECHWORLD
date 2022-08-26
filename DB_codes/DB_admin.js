
const database = require('./database')




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
async function updateNews(nid,details) {
    let sql = `
    BEGIN
    UPDATE_NEWS(:NID,:DETAILS);
    END;
    
    `;
     (await database.execute(sql, [nid,details], database.options));
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

    getAllNews,
    deleteBn,
    addNews,
    updateNews,
    showHideNews


}
