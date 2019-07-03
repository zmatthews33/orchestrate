const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema(
    {
        name: { type: String, required: true },
        // artist_type: { type: String, required: true },
        members: [],
        genres: [{ type: String, required: false }],
        bio: { type: String },
        email: { type: String },
        links: [{ type: String }],
        isActive: { type: Boolean, required: false },
        profile_img: String,
        team: [{ type: Schema.Types.ObjectId, ref: "Person" }],
        created_by: { type: Schema.Types.ObjectId, ref: "User" }
    },
    { autoCreate: true }
);

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
