const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        value: { type: String, required: true },
        isCompleted: { type: Boolean, require: true, default: false },
    },
    { autoCreate: true }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
