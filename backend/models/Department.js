const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({

    departmentName: {
        type: String,
        required: true
    },

    faculty: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Department", departmentSchema);