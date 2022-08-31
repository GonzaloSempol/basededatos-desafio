const pgClient = require("../db/postgres")
async function crearTablaController (req,res) {

    try{
        const {body: {tableName, tableStructure}} = req; 
    let sqlString = 'CREATE TABLE IF NOT EXISTS public."' + tableName + '" ( '
       
    let sqlStringPKs = "PRIMARY KEY(";
    let i = 0;
    let pkQuantity=0;
    //recorro el array de las columnas
    while(i < tableStructure.length){
        
        sqlString += tableStructure[i].columnName + " " + tableStructure[i].type + ((i != tableStructure.length-1) ? ", " : ""); //el ultimo no lleva coma
        
        //Si es PK, genero la linea SQL para reflejarlo
        if (tableStructure[i].pk == "true"){
            if (pkQuantity > 0){
                sqlStringPKs += ", " + tableStructure[i].columnName
            }
            else{
                sqlStringPKs += tableStructure[i].columnName
                pkQuantity++;
            }
        }
        
        
        i++;
    }
    
    
    sqlStringPKs += ")"

    //Agrego el final para colocar las PRIMARY KEYS(key1, .. keyN)
    if(pkQuantity > 0){
        sqlString += ", " + sqlStringPKs + ")"
    }else{
        sqlString += ")"
    }
    

    const response = await pgClient.query(sqlString)

    return res.send(response); 

    }catch(e){
        console.log(e)
        res.send(e)
    }
    
}
module.exports = crearTablaController