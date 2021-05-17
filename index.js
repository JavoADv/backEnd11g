
/*

//Práctica  GET/koders -> 

*/

// function getKodersFile () {
//     const content = fs.readFileSync ('koder.json', 'utf8')
//     return JSON.parse(content)
// }

const { json } = require('express')
const express = require ('express')
const server = express ()

const kodersRouter = require('./routers/koders')
const mentorsRouter = require ('./routers/mentores')

server.use(express.json())
server.use('/koders', kodersRouter)
server.use ('/mentores', mentorsRouter)





// Hacer la funcón DELETE

// server.delete ('/koders/:id', (request, response)=> {
//     const id = parseInt (request.params.id)

//     const content = fs.readFileSync ('koder.json', 'utf8')
//     const json = JSON.parse(content)

    // const deleteKoder = json.koders.forEach ((koder) => {
        
    //     if (id === koders.id) {
    //         //fs.
    //     }

    // }

// })

//GET /koders?gender=f

server.get ('/', (request, response)=> {
    response.json ({
        success: true,
        message: '11G APIv1'
    })
})

server.listen (8080, () => {
    console.log ('Serva listening in port 8080')
})



