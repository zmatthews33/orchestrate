const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
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
    email: [
        {
            email_type: String,
            email: { type: String, required: true },
            isPrimary: Boolean
        }
    ],
    phone: [{ phone_type: String, phone_num: String, isPrimary: Boolean }],
    time_zone: String,
    gender: String,
    dob: Date,
    social_accounts: {
        facebook: String,
        twitter: String,
        instagram: String
    },
    password: { type: String, require: true },
    lastLogin: Date,
    role: String,
    position: String,
    profile_img: String
});

userSchema.pre("save", function(next) {
    if (!this.password) {
        console.log("models/userModel.js =========NO PASSWORD PROVIDED");

        next();
    } else {
        console.log("models/userModel.js hashPassword in pre save");
        this.password = this.hashPassword(this.password);

        next();
    }
});

userSchema.methods = {
    checkPassword: function(inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password);
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10);
    }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
