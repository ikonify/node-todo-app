var mongoose = require('mongoose');

// tell mongoose to use global promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

module.exports = {mongoose};