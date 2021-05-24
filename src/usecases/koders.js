// Endpoint -> caso de uso -> modelo}}

const Koders = require ('../models/koders')

function getAll () {
    return Koders.find ({})
}

function postKoder ( {name,  lastname, Age, gender}) {
    return Koders.create ({name, lastname, Age, gender })
}

function deleteById (id) {
    return Koders.findByIdAndDelete (id)
}

function koderUpdate (id, infoToUpdate) {
    return Koders.findByIdAndUpdate (id, infoToUpdate)
}


module.exports = {
    getAll,
    postKoder,
    deleteById,
    koderUpdate
}