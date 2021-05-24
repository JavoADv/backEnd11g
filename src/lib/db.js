const mongoose = require ('mongoose')

const DB_USER = 'javadv'
const DB_PASSWORD = 'Kodemia2021'
const DB_HOST = 'kodemia-once.886i3.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () {
    return mongoose.connect (url, {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = connect 