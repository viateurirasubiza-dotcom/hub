const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema({
    title: String,
    description: String,
    country: String,
    deadline: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Scholarship", scholarshipSchema);
