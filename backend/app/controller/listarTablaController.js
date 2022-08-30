const pgClient = require("../db/postgres")

async function listarTablaController (req,res) {
    const {body: {tableName}} = req; 
    const { rows } = await pgClient.query('SELECT * FROM public."'+tableName+'"')
    res.send(rows)
}
module.exports = listarTablaController