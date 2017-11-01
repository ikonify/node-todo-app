const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Removes all
Todo.remove({}).then((res) => {
    console.log(res);
});

// findOneAndRemove and findByIdAndRemove return the document that was deleted
Todo.findOneAndRemove({_id: 'id'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('asdf').then((todo) => {
    console.log(todo);
});