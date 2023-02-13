const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        enum: [
            "Lightweight",
            "Middleweight",
            "Heavyweight"
        ]
    },
    weight: {
        type: Number,
        maximum: 500
    },
    battery: {
        type: Number,
        minimum: 25,
        maximum: 100
    },

    state: {
        type: String,
        enum: [
            "Idle",
            "Loaded",
            "Delivered"

        ]
    },
    medication: {
        type: Array,
        required: [
            "serial_number",
            "model",
            "weight_limit",
            "battery_capacity",
            "state"
        ],
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    definitions: {
        Medication: {
            type: Object,
            properties: {
                id: {
                    type: Number
                },

                weight: {
                    type: Number
                },
                code: {
                    type: String,
                    pattern: "^[A-Z0-9_]+$"
                },
                required: [
                    "weight",
                    "code",
                ]
            }
        }
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;