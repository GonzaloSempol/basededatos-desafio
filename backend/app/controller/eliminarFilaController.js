const pgClient = require("../db/postgres")
async function eliminarFilaController (req,res) {
    try{

        console.log(req.body)
        const {body: {tableName, tableIDs}} = req; 
        let sqlString = 'DELETE FROM public."' + tableName +'" WHERE '
        
        let i = 0;
        
        //recorro el array de los IDs
        while(i < tableIDs.length){
            sqlString += tableIDs[i].columnName + '=' + (Number.isNaN(Number(tableIDs[i].value)) ? ("'" + tableIDs[i].value +"'") : tableIDs[i].value ) + ((i != tableIDs.length-1) ? ' AND ' : ''); //si no es number le pongo comillas, el ultimo (o si es uno solo) no lleva AND
            i++;
        }

        const response = await pgClient.query(sqlString);
        return res.send(response); 
        
    }catch(e){
        console.log(e)
        res.send(e)
    }
    
}
module.exports = eliminarFilaController