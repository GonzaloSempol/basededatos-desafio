const pgClient = require("../db/postgres")

//PRECONDICIONES: Se asume que si se pasa una cadena se pasa entre '' y si se pasa un numero se pasa sin comillas.
async function insertarFilaController (req,res) {

    try{
        const {body: {tableName, tableStructure}} = req; 
        let sqlString = 'INSERT INTO public."' + tableName +'"('
        let sqlStringValues = ' VALUES('

        let i = 0;
        
        //recorro el array de las columnas
        while(i < tableStructure.length){
            
            sqlString += tableStructure[i].columnName + ((i != tableStructure.length-1) ? ", " : ""); //el ultimo no lleva coma
            sqlStringValues +=  tableStructure[i].value + ((i != tableStructure.length-1) ? ", " : ""); //el ultimo no lleva coma
            i++;
        }
        sqlStringValues += ")"
        sqlString += ")"
        const response = await pgClient.query(sqlString+sqlStringValues);
        return res.send(response); 
        
    }catch(e){
        console.log(e)
        res.send(e)
    }


}

module.exports = insertarFilaController