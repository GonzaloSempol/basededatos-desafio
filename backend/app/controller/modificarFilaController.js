const pgClient = require("../db/postgres")
async function modificarFilaController (req,res) {
    try{
        const {body: {tableName, tableIDs, tableStructure}} = req; 
        
        
        let sqlString = 'UPDATE public."' + tableName +'" SET '
        let sqlUpdateCondition = ' WHERE '

        let i = 0;
         
        //recorro el array de las columnas
        while(i < tableStructure.length){
            
            sqlString += tableStructure[i].columnName + "=" + (Number.isNaN(Number(tableStructure[i].newValue)) ? ("'" + tableStructure[i].newValue +"'") : tableStructure[i].newValue ) + ((i != tableStructure.length-1) ? ", " : ""); //el ultimo no lleva coma
            i++;
        }
        i=0;
        //recorro el array de los IDs
        while(i < tableIDs.length){
            
            sqlUpdateCondition += tableIDs[i].columnName + "=" + ((Number.isNaN(Number(tableIDs[i].value)) ? ("'" + tableIDs[i].value +"'") : tableIDs[i].value )) + ((i != tableIDs.length-1) ? " AND " : ""); //el ultimo (o si es uno solo) no lleva AND
            i++;
        }

        sqlString += sqlUpdateCondition
        const response = await pgClient.query(sqlString);
        return res.send(response); 
    
    }catch(e){
        console.log(e)
        res.send(e)
    }

    

}
module.exports = modificarFilaController