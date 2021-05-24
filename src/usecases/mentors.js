const Mentors = require ('../models/mentors')

function getAll () {
    return Mentors.find ({})
}

function postMentor ({name, lastname, Age, gender, module }) {
    return Mentors.create ({name, lastname, Age, gender, module })
}

function deleteMentor (id) {
    return Mentors.findByIdAndDelete (id)
}

function mentorUpdate (id, infoToUpdate) {
    return Mentors.findByIdAndUpdate (id, infoToUpdate)
}

module.exports = {
    getAll,
    postMentor,
    deleteMentor,
    mentorUpdate
}