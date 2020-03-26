const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)


/**
 * Rotas / Recursos
 */

/**
 * Methods HTTP >>>
 * 
 * GET: search / list information in back-end;
 * POST: create information in back-end;
 * PUT: change information in back-end; 
 * DELETE: delete information in back-end;
 */

/**
 * Parameter types >>>
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" ( Filtros, Paginação );
 * Route Params: Parâmetros utilizados para identificar recursos;
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos; 
 */

/**
 * SQL: MySQL, SQLite, PostegreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB e etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

