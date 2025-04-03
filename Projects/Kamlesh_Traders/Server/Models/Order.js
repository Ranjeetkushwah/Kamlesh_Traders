const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    name: {
        type: "String",
        required: true
    },
    email: {
        type: "String",
        required: true
    },
    mobile: {
        type: "Number",
        required: true
    },
    item: [{
        name: {
            type: "String",
            required: true
        },
        brand: {
            type: "String",
            required: true
        },
        qty: {
            type: "Number",
            required: true
        },
        price: {
            type: "Number",
            required: true
        },
    }
    ],
    tax: {
        type: "Number",
        required: true
    },
    total: {
        type: "Number",
        required: true
    },
    created: {
        type: String,
        required: true
    }
});
const Order = mongoose.model("Order", OrderSchema);
model.exports = Order