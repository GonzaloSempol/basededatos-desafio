const pgClient = require("../db/postgres")

async function listarTablaController (req,res) {
    const { rows } = await pgClient.query('SELECT * FROM public."testTable"')
    res.send(rows)
}
module.exports = listarTablaController