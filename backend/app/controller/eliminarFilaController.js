const pgClient = require("../db/postgres")
async function eliminarFilaController (req,res) {
    
    const {body: {tableName, tableIDs}} = req; 
    let sqlString = 'DELETE FROM public."' + tableName +'" WHERE '
    
    let i = 0;
    
    //recorro el array de los IDs
    while(i < tableIDs.length){
        
        sqlString += tableIDs[i].columnName + "=" + tableIDs[i].value + ((i != tableIDs.length-1) ? " AND " : ""); //el ultimo (o si es uno solo) no lleva AND
        i++;
    }

    const response = await pgClient.query(sqlString);
    return res.send(response); 
    
}
module.exports = eliminarFilaController