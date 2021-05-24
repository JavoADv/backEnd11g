// Este arhivo aloja la definición de nuestro servidor 

const express = require ('express')

const kodersRouter = require ('./routers/koders')

const app = express ()

const logInfo = require ('./middlewares/logging')

app.use (express.json ())

app.use ('/middlewares', logInfo)

app.use ('/koders', kodersRouter)

const mentorsRouter = require ('./routers/mentors')

app.use ('/mentors', mentorsRouter)

module.exports = app