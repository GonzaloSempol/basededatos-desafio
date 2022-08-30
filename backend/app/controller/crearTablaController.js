const pgClient = require("../db/postgres")
async function crearTablaController (req,res) {

    
    const {body: {tableName, tableStructure}} = req; 
    let sqlString = 'CREATE TABLE IF NOT EXISTS public."' + tableName + '" ( '
    
    tableStructure.forEach(element => {
        sqlString += element.columnName + " " + element.type +", ";
    });

    sqlString += ")"

    return res.send(sqlString); 
}
module.exports = crearTablaController