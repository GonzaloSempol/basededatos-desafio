const pgClient = require("../db/postgres")

async function getAllTablasController (req,res) {

    try{
        const { rows } = await pgClient.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'")
        res.send(rows)
    }catch(e){
        console.log(e)
        res.send(e)
    }
    
}
module.exports = getAllTablasController