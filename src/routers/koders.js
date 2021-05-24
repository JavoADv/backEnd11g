const { response } = require('express')
const express = require ('express')
const koders = require ('../usecases/koders')

const router = express.Router ()

router.get ('/', async (request, response) => {
    try {
        const allKoders = await koders.getAll ()

        response.json ({
            success: true,
            message: 'All koders',
            data: {
                koders: allKoders
            }
        })
    } catch (error) {
        response.status (400)
        response.json ({
            success: false,
            message: 'Error at get all koders',
            error: error.message
        })
    }

})

router.post ('/', async (request, response) => {
    try {
        const koderCreated = await koders.postKoder (request.body)

        response.json ({
            success: true,
            message: 'Koder created successfuly',
            data: {
                koders: koderCreated
            }
        })
    } catch (error) {
        response.status (400)
        response.json ({
            success: false,
            message: 'Error Could not post a new koder',
            error: error.message
        })
    }

})

router.delete ('/:id', async  (request, response) => {
    try {
        const { id } = request.params
        const koderDeleted = await koders.deleteById (id)

        response.json ({
            success: true,
            message: 'Koder deleted successfuly',
            data: {
                koders: koderDeleted
            }
        })

    } catch (error) {
        response.status (400)
        response.json ({
            success: false,
            message: 'Error. Could not delete element',
            error: error.message
        })
    }
} )

router.patch ('/:id', async (request, response)=> {
    try {
        const {id} = request.params
        const koderUpdate = await koders.koderUpdate (id, request.body)

        response.json ({
            success: true,
            message: 'Koder updated successfuly',
            data: {
                koders: koderUpdate
            }
        })
        
    } catch (error) {
        response.status (400)
        response.json ({
            success: false,
            message: 'Error. Could not update element',
            error: error.message
        })
    }
})

// router.post ('/', async (request, reponse ) => {
//     try {
//         const koderCreated = await koders.postKoder (request.body)
//         response.json ({
//             success: true,
//             message: 'Koder created successfuly',
//             data: {
//                 koder: koderCreated
//             }

//         })
//     } catch (error) {
//         response.status (400)
//         response.json ({
//             success: false,
//             message: 'Error Could not post a new koder',
//             error: error.message
//         })
//     }
// })

module.exports = router