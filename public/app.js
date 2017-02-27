var TodoApp = angular.module("TodoApp", ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

TodoApp.controller("TodoAppController", ["$scope", "$http", function($scope, $http) {
    $scope.init = function() {
        $http.get('/tasks')
            .then(function(response) {
                console.log('Tasks in db:', response);
                $scope.tasks = response.data;
            })
    };

    $scope.done = function(id) {
        console.log(id);
        $http.delete('/tasks/' + id, id)
            .then(function(response) {
                console.log('Tasks in db:', response);
                $scope.tasks = response.data;
            });
    }

}]);


TodoApp.controller("formController", ["$scope", "$http","getDate", function($scope, $http, getDate) {
    $scope.submit = function() {
	    var date = getDate.getSelectedDate();

        var data = {
            title: $scope.header,
            comment: $scope.comment,
            deadline: date
        };

        console.log('Im going to send this to server', data);
        $scope.header = '';
        $scope.comment = '';
       // $scope.tasks.push(data);
        $http.post('/insert', data)
            .then(function(response) {
                console.log('Tasks in db:', response);
                $scope.tasks = response.data;
                console.log($scope.tasks)
            });
        // $scope.init();
    }
}]);

TodoApp.controller('DatepickerPopupDemoCtrl', ["$scope", "$http", "getDate", function($scope, $http, getDate) {
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }
    
    var selectedDate = $scope.dt;
    $scope.sharedService = getDate;
    $scope.sharedService.takeDate(selectedDate);
}]);



TodoApp.factory('getDate', function() {
    var selectedDate;
    var takeDate = function(date) {
        selectedDate = date;
    };

    var getSelectedDate = function() {
        return selectedDate
    };

    return {
        takeDate: takeDate,
        getSelectedDate: getSelectedDate
    }
});
