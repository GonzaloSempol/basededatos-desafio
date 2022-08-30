const { Pool } = require('pg')

const pgClient = new Pool({
    user: 'root',
    host: 'db-postgres',
    database: 'test',
    password: 'root',
    port: 5432,
  })


  module.exports = {
    query: (text, params) => pgClient.query(text, params),
  }
  