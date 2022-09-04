const pgClient = require("../db/postgres")

async function listarTablaController (req,res) {
    try {
        const {body: {tableName, searchParameters}} = req; 

        let sqlString = 'SELECT * FROM public."'+tableName +'"'
        
        let i = 0;
        //recorro el array de los searchParameters y construyo el string
        if(searchParameters.length > 0){
            sqlString += +' WHERE '
        }
         while(i < searchParameters.length){
            
            sqlString += searchParameters[i].columnName + searchParameters[i].operator +  searchParameters[i].value + ((i != searchParameters.length-1) ? " AND " : ""); //el ultimo no lleva coma
            i++;
        }
        
        const { rows } = await pgClient.query(sqlString)
        res.send(rows)

    }catch(e){
        console.error(e)
        res.send(e)
    }
   
}
module.exports = listarTablaController