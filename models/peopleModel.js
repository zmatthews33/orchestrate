const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, require: true },
    nickname: String,
    address: {
        address_line1: String,
        address_line2: String,
        city: String,
        state: String,
        zip_code: String
    },
    email: [{ email_type: String, email: { type: String, required: true }, isPrimary: Boolean }],
    phone: [{ phone_type: String, phone_num: String, isPrimary: Boolean }],
    time_zone: String,
    gender: String,
    dob: Date,
    social_accounts: {
        facebook: String,
        twitter: String,
        instagram: String
    },
    isUser: Boolean,
    password: String,
    lastLogin: Date,
    role: String,
    position: String,
    profile_img: String
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
