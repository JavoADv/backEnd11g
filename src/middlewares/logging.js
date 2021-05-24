function logInfo (request, response, next) {
    console.log (`Método: ${request.method}, Ruta ${request.url}, Body: ${request.body}`)
}

module.exports = logInfo 