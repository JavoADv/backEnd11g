const mongoose = require ('mongoose')

const koderSchema = new mongoose.Schema ({ 
    name: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    lastname: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    Age: {
        type: Number,
        min: 0,
        max: 150,
        required: true
    },
    gender: {
        type: String,
        maxLength: 1,
        enum: [
            'm',
            'f'
        ],
        requiered: true
    }   
})

const model = mongoose.model ('koders', koderSchema)

module.exports = model