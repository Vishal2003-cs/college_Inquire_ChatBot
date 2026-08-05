const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    staffId: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Staff", staffSchema);