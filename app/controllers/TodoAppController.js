import app from '../app.module.js';

const TodoAppController = app
    .controller("TodoAppController", ["$scope", "$http", "sharedService", function($scope, $http, sharedService) {
        $scope.minLenght = 1;
        $scope.editing = false;
        $scope.sharedService = sharedService;
        $scope.init = function() {
            $http.get('/tasks')
                .then(function(response) {
                    sharedService.tasks = response.data;
                })
        };

        $scope.done = function(id) {
            $http.delete('/tasks/' + id, id)
                .then(function(response) {
                    sharedService.tasks = response.data;
                });
        }

        $scope.edit = function(id) {
            $scope.editing = true;

            var taskToEdit = sharedService.tasks.filter(function(obj) {
                return obj._id == id;
            });
            sharedService.header = taskToEdit[0].title;
            sharedService.comment = taskToEdit[0].comment;
            sharedService.selectedDate = taskToEdit[0].deadline;
            sharedService.tempId = taskToEdit[0]._id;
        }
    }]);
    
export default TodoAppController;