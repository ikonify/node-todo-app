
// const MongoClient = require('mongodb').MongoClient;
// destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // when we use 'return' like this, if it gets fired it stops the function execution
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    // deleting with ObjectID
    db.collection('Users').findOneAndDelete({_id: new ObjectID('59eb25359f2d3d4c70a07d8f')}).then((res) => {
        console.log(res);
    });
    // db.close();
});