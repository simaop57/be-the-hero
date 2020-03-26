const express = require('express')

const OngController = require('./controllers/ongcon')
const incidentController = require('./controllers/incidentcon')
const profileController = require('./controllers/profilecon')
const sessionController = require('./controllers/sessioncon')

const routes = express.Router()

routes.post('/sessions', sessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', profileController.index)

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)

module.exports = routes