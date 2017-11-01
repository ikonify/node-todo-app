var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        } 
        
        res.status(200).send({todo});

    }).catch((err) => {
        res.status(404).send();
        });

    // findById
    // success
        // if todo - send it back
        // if no todo - send back 404 with empty body
    // error - send 400
});

// DELETE /todos:id
app.delete('/todos:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) { return res.status(404).send(); }
    
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }

        res.status(200).send({todo});

    }).catch((err) => {
        res.status(400).send();
        console.log(err);
    });

    // remove todo by id - success, if no doc send 404, if error send 400 with empty body
});

app.listen(port, () => {
    console.log(`Server running port ${port}`);
});

module.exports = {app}