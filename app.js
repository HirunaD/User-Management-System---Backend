const express = require('express'); //import the express
const app = express(); //create express instance called app
const cors = require('cors'); //import cors
const controller = require('./controller'); //import the controller

//add middlewares
app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

//create get Rest API's
app.get('/users', (req, res) => {
    controller.getUsers(users => {
        res.send(users);
    });
});

app.get('/user', (req, res) => {
    const id = req.query.id;
    controller.getUserById(id, user => {
        res.send(user);
    });
});

//export app for access to server.js
module.exports = app;