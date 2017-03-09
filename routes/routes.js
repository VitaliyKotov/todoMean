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
        };

        var newTask = new toDo(item);

        newTask.save(function(err, data) {
            if (err) console.log(err);
            // saved! 
            console.log('saved todo', data)
            toDo.find(function(err, data) {
                if (err) {
                    console.log('err')
                } else {
                    console.log('response after save', data)
                    res.json(data)
                }
            });
        });
        
    });

    app.delete('/tasks/:_id', function(req, res) {
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
