const express = require ('express')
const router = express.Router ()


function getKodersFile () {
    const content = fs.readFileSync ('koder.json', 'utf8')
    return JSON.parse(content)
}

// const { json } = require('express')
// const express = require ('express')
// const server = express ()

// server.use(express.json())

let fs = require ('fs')

router.post ('/', (request, response) => {
    const name = request.body.name
    const gender = request.body.gender

    const newKoder= { name, gender }

    const content = fs.readFileSync ('koder.json', 'utf8')

    const json = JSON.parse (content)

    json.koders.push (newKoder)

    fs.writeFileSync ('koder.json', JSON.stringify(json, null, 2), 'utf8')

    response.json ({
        success: true
    })
})
// /koders/1 == beto
router.patch ('/:id', (request, response) => {
    const id = parseInt (request.params.id)
    const name = request.body.name
    
    const content = fs.readFileSync ('koder.json', 'utf8')
    const json = JSON.parse(content)

    const newKoders = json.koders.reduce ((koders, koderActual) => {
        if (id === koderActual.id) {
            koderActual.name = name
        }

        return [
            ...koders,
            koderActual
        ]
    }, [])

    fs.writeFileSync ('koder.json', JSON.stringify (json,null, 2), 'utf8')

    response.json ({
        success: true
    })

})

router.get ('/', (request, response) => {
    
    const jsonParsed = getKodersFile ()
    response.json(jsonParsed.koders)
})

router.delete ('/:id', (request, response) =>{
    const id = request.params.id 
    const json = getKodersFile()
    const newKoders = json.koders.filter ( koder => koder.id != id)

    json.koders = newKoders 
    
    fs.writeFileSync ('koder.json', JSON.stringify (json, null, 2), 'utf8')

    response.json ({
        success: true 
    })
} )

// server.listen (8080, () => {
//     console.log ('Serva listening in port 8080')
// })

module.exports = router 