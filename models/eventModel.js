const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
        date: { type: Date, required: true },
        event_type: { type: String, require: true },
        artists: [{ type: Schema.Types.ObjectId, ref: "Artist" }],
        created_by: { type: Schema.Types.ObjectId, ref: "User" }
    },
    { autoCreate: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
