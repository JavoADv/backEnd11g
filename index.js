// const express = require ('express')

// const server = express ()

// // middleware 

// server.use(express.json())

// server.get ('/hola', (request, response) => {
//     response.write ('GET /Hola')
//     response.end ()
// })

// server.post ('/hola', (request, response) => {
//     response.write ('Este es un POST a /hola')
//     response.end()
// })

// server.get ('/koders', (request, response) => {
//     // response.setHeader ('Content-Type', 'application/json')
//     // const json = { message: 'Aquí la lista de koders'}
//     // const jsonString = JSON.stringify (json)

//     // response.write (jsonString)
//     // response.end()

//     response.status(401)

//     response.json ({ message: 'Aquí la lista de koders'})
// })

// server.post ('/koders', (request, response) => {
//     // response.write ('Aquí puedes crear koders')
//     // response.end()

//     // const body = request.body
//     console.log ('body: ', request.body.name) 
//     response.json ({
//         message: 'Ok'
//     })
// })

// server.put ('/koders', (request, response) => {
//     response.write ('Aquí puedes sustituir un koder')
//     response.end()
// })


// server.listen (8080, () => {
//     console.log ('Serva listening in port 8080')
// })

/*

//Práctica  GET/koders -> 

*/

const express = require ('express')

const server = express ()

server.use(express.json())

let fs = require ('fs')
let info 

fs.readFile ('koder.json', 'utf8', (error, data) => {
    if (error) {
        console.log ('No se pude leer el archivo', error)
        return 
    }
    info = JSON.parse (data)
    console.log('El contenido es: ', info)
} )

server.get ('/koders', (request, response) => {
    response.json ({ message: 'Aquí la lista de koders'})

})


server.listen (8080, () => {
    console.log ('Serva listening in port 8080')
})


