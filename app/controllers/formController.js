import app from '../app.module.js';

const formController = app
    .controller("formController", ["$scope", "$http", "sharedService", function($scope, $http, sharedService) {
        $scope.sharedService = sharedService;
        $scope.submit = function() {

            var data = {
                title: sharedService.header,
                comment: sharedService.comment,
                deadline: sharedService.getSelectedDate
            };

            sharedService.header = '';
            sharedService.comment = '';

            $http.post('/insert', data)
                .then(function(response) {
                    sharedService.tasks = response.data;
                });
        };

        $scope.update = function() {

            var data = {
                title: sharedService.header,
                comment: sharedService.comment,
                deadline: sharedService.getSelectedDate,
                _id: sharedService.tempId
            };
            sharedService.header = '';
            sharedService.comment = '';
            sharedService.tempId = null;

            $http.put('/update', data)
                .then(function(response) {
                    sharedService.tasks = response.data;
                    $scope.$parent.editing = false;
                });
        };

    }]);

export default formController;

