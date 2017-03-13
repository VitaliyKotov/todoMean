import app from '../app.module.js';

const formController = app
    .controller("formController", ["$scope", "$http", "sharedService", function($scope, $http, sharedService) {
    $scope.sharedService = sharedService;
    $scope.submit = function() {
        var date = sharedService.getSelectedDate();

        var data = {
            title: sharedService.header,
            comment: sharedService.comment,
            deadline: date
        };

        sharedService.header = '';
        sharedService.comment = '';

        $http.post('/insert', data)
            .then(function(response) {
                sharedService.tasks = response.data;
            });
    };

    $scope.update = function() {
        var date = sharedService.getSelectedDate();

        var data = {
            title: sharedService.header,
            comment: sharedService.comment,
            deadline: date,
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
