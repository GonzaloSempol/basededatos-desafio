const pgClient = require("../db/postgres")

async function describirTablaController (req,res) {
    const {body: {tableName}} = req; 
    const { rows } = await pgClient.query("SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_name ='" +tableName +"'")
    res.send(rows)
}
module.exports = describirTablaController