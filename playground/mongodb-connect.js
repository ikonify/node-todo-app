
// const MongoClient = require('mongodb').MongoClient;
// destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // when we use 'return' like this, if it gets fired it stops the function execution
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Henri',
    //     age: 29,
    //     location: 'Pattaya'
    // }, (err, res) => {
    //     if(err) {
    //         return console.log('Unable to add user', err);
    //     }

    //     console.log(res.ops[0]._id);
    //     console.log(res.ops[0]._id.getTimestamp());
    // });

    db.close();
});