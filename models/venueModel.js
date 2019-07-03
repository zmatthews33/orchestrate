const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venueSchema = new Schema({
    name: { type: String, required: true },
    address: {
        address_line1: { type: String, required: true },
        address_line2: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip_code: { type: String, required: true }
    },
    capacity: { type: Number, required: true }
}, { "autoCreate": true });

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
