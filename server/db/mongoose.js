var mongoose = require('mongoose');

// tell mongoose to use global promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useMongoClient: true});

module.exports = {mongoose};