const mongoose = require('mongoose')


const personSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    indian: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Person',personSchema)