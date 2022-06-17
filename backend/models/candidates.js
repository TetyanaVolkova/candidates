const mongoose = require('mongoose');

const candidatesSchema = mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String, require: true }
});

module.exports = mongoose.model('Candidates', candidatesSchema);