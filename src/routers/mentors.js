const {response, request} = require ('express')
const express = require ('express')
const mentors = require ('../usecases/mentors')

const router = express.Router ()

router.get ('/', async (request, response) => {
    try {
        const AllMentors = await mentors.getAll ()

        response.json ({
            success: true,
            message : 'Mentors collection',
            data: {
                mentors: AllMentors
            } 
        })
    } catch {
        response.status (400)
        response.json ({
            success: false,
            message: 'Error obtaining Mentors collection',
            error: error.message
        })
    }
})

router.post ('/', async (request, response) => {
    try {
        const mentorCreated = await mentors.postMentor (request.body)
        response.json ({
            success: true,
            message : 'Mentor created succesfuly',
            data: {
                mentors: mentorCreated
            } 
        })
    } catch (error) {
        response.status (400)
        response.json ({
            success: false,
            message: 'Error creating mentor',
            error: error.message
        })
    }
})

router.delete ('/:id', async (request,response)=> {
    try {
        const {id} = request.params
        const mentorDeleted = await mentors.deleteMentor (id)

        response.json ({
            success: true,
            message : 'Mentor deleted succesfuly',
            data: {
                mentors: mentorDeleted
            } 
        })
        
    } catch (error) {
        response.status (400)
        response.json ({
            success: false,
            message: 'Error deleting mentor',
            error: error.message
        })
    }
})

router.patch ('/:id', async (request, response)=> {
    try {
        const {id} = request.params
        const mentorUpdated = await mentors.mentorUpdate (id,request.body)

        response.json ({
            success: true,
            message : 'Mentor updated succesfuly',
            data: {
                mentors: mentorUpdated
            } 
        })

        response.json ({
            success: true,
            message : 'Mentor updated succesfuly',
            data: {
                mentors: mentorUpdated
            } 
        })

    } catch (error) {
        response.status (400)
        response.json ({
            success: false,
            message: 'Error updating mentor',
            error: error.message
        })
    }
})

module.exports = router