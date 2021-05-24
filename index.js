
const server  = require ('./src/server')
const dbConnect = require ('./src/lib/db')



dbConnect ()
    .then (()=> {
        server.listen (8080, () => {
            console.log ('Server is listening')
        } )

    })
    .catch (error => {
        console.error ('DB Error:', error)
    })

    // GET /koders
    // 1. Crear el modelo necesario (o asegurarse de que exista)
    // 2. Crear el aso de uso necesario 
    // 3. Crear el endpoint necesario