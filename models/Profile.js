const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: {type: String, trim: true, default: ''},
    password: {type: String, default: ''},
    timestamp: {type: Date, default: Date.now}
})

module.export = mongoose.model('User', User)