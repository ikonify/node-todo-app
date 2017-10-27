var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        } 
        
        res.status(200).send({todo});

    }).catch((err) => {
        res.status(400).send();
        });

    // findById
    // success
        // if todo - send it back
        // if no todo - send back 404 with empty body
    // error - send 400
});

app.listen(3000, () => {
    console.log(`Server running port 3000`);
});

module.exports = {app}