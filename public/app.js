var TodoApp = angular.module("TodoApp", ['ui.bootstrap']);

TodoApp.controller("TodoAppController", ["$scope", "$http", "sharedService", function($scope, $http, sharedService) {
    $scope.minLenght = 1;
    $scope.editing = false;
    $scope.sharedService = sharedService;
    console.log(sharedService);
    $scope.init = function() {
        $http.get('/tasks')
            .then(function(response) {
                console.log('Tasks in db:', response);
                sharedService.tasks = response.data;
            })
    };

    $scope.done = function(id) {
        console.log(id);
        $http.delete('/tasks/' + id, id)
            .then(function(response) {
                console.log('Tasks in db:', response);
                sharedService.tasks = response.data;
            });
    }

    $scope.edit = function(id) {
        $scope.editing = true;

        var taskToEdit = sharedService.tasks.filter(function(obj) {
            return obj._id == id;
        });
        console.log('task to edit', taskToEdit[0]);
        sharedService.header = taskToEdit[0].title; //need $parent because ng-repeat creates it's own scope
        sharedService.comment = taskToEdit[0].comment;            
        sharedService.selectedDate = taskToEdit[0].deadline;
        console.log(sharedService.selectedDate);
        sharedService.tempId = taskToEdit[0]._id;  
    }  
}]);


TodoApp.controller("formController", ["$scope", "$http", "sharedService", function($scope, $http, sharedService) {
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
        console.log('updated todo', data)
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


TodoApp.controller('DatepickerPopupDemoCtrl', ["$scope", "sharedService", function($scope, sharedService) {

    $scope.today = function() {
        sharedService.selectedDate = new Date();
    };
    $scope.today();

  $scope.clear = function() {
    sharedService.selectedDate = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable previous days
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date < new Date());
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
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

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
    
    $scope.$watch('sharedService.selectedDate', function (newValue, oldValue) {
        sharedService.selectedDate = newValue; 
    });

    // $scope.$watch('dt', function () {
    //     var pickedDate = $scope.dt;
    //     sharedService.takeDate(pickedDate); 
    // });
}]);



TodoApp.service('sharedService', function() {
    this.tasks;
    this.header;
    this.comment;
    this.tempId;
    this.selectedDate;
    this.takeDate = function(date) {
        this.selectedDate = date;
    };

    this.getSelectedDate = function() {
        return this.selectedDate;
    };

});
