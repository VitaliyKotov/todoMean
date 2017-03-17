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

    app.put('/update', function(req, res) {
        var id = req.body;
        toDo.findOne({ _id: id }, function(err, todo) {
            todo.title = req.body.title;
            todo.comment = req.body.comment;
            todo.deadline = req.body.deadline;
            todo._id = id;

            todo.save(function(err, todo) {
                toDo.find(function(err, data) {
                    if (err) {
                        console.log('err')
                    } else {
                        res.json(data)
                    }
                });

            });
        });

    });

}
