const express = require ('express')
const router = express.Router ()

let fs = require ('fs')

function getMentorsFile () {
    const content = fs.readFileSync ('koder.json', 'utf8')
    return JSON.parse(content)
}

router.get ('/', (request, response) => {
    
    const jsonParsed = getMentorsFile ()
    response.json(jsonParsed.mentores)

})

router.get ('/:id', (request, response) => {
    const jsonParsed = getMentorsFile ()
    const mentorsParamId = parseInt (request.params.id)
    const mentorsArray= jsonParsed.mentores

    const mentorFound = mentorsArray.find (mentor => mentorsParamId === mentor.id)

    response.json (mentorFound)
     
})

router.post ('/', (request, response) => {
    const name = request.body.name
    const module = request.body.module

    const newMentor= { name, module }

    const jsonParsed = getMentorsFile()

    jsonParsed.mentores.push (newMentor)

    fs.writeFileSync ('koder.json', JSON.stringify(jsonParsed, null, 2), 'utf8')

    response.json ({
        success: true
    })
})

router.patch ('/:id', (request, response) => {
    const id = parseInt (request.params.id)
    const name = request.body.name
    const jsonParsed = getMentorsFile () 
   

    const newMentor = jsonParsed.mentores.reduce ((mentor, mentorActual) => {
        if (id === mentorActual.id) {
            mentorActual.name = name
        }

        return [
            ...mentor,
            mentorActual
        ]
    }, [])

    fs.writeFileSync ('koder.json', JSON.stringify (jsonParsed,null, 2), 'utf8')

    response.json ({
        success: true
    })

})

router.delete ('/:id', (request, response) =>{
    const id = request.params.id 
    const jsonParsed = getMentorsFile()
    const newMentors = json.mentores.filter ( mentor => mentor.id != id)

    jsonParsed.mentores = newMentores
    
    fs.writeFileSync ('koder.json', JSON.stringify (jsonParsed, null, 2), 'utf8')

    response.json ({
        success: true 
    })
} )

module.exports = router 