var express = require("express");
var toDo = require('../mongoose/toDoModel.js');

module.exports = function(app) {
    app.get('/tasks', function(req, res) {
        toDo.find(function(err, data) {
            if (err) {
                console.log('err')
            } else {
                res.json(data)
            }
        });
    });

    app.post('/insert', function(req, res) {
        var item = {
            title: req.body.title,
            comment: req.body.comment,
            deadline: req.body.deadline
        }
        console.log('got data:', item);
        var newTask = new toDo(item);
        console.log('created mongoose object', newTask)
        newTask.save(function(err, data) {
            if (err) console.log(err);
            // saved!
        });
        toDo.find(function(err, data) {
            if (err) {
                console.log('err')
            } else {
                res.json(data)
            }
        });
    });

    app.delete('/tasks/:_id', function(req, res) {
        console.log(req.params);
        var id = req.params._id;

        toDo.find({ _id: id }).remove().exec();
        toDo.find(function(err, data) {
            if (err) {
                console.log('err')
            } else {
                res.json(data)
            }
        });

    });

}
