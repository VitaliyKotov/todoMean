/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const app = angular.module("TodoApp", ['ui.bootstrap']);
/* harmony default export */ __webpack_exports__["a"] = app;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module_js__ = __webpack_require__(0);


const DatepickerPopupDemoCtrl = __WEBPACK_IMPORTED_MODULE_0__app_module_js__["a" /* default */]
    .controller('DatepickerPopupDemoCtrl', ["$scope", "sharedService",  function($scope, sharedService) {
        $scope.sharedService = sharedService;
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

        $scope.$watch('dt', function () {
            if(sharedService.selectedDate && sharedService.selectedDate != $scope.dt.toString()) {
                sharedService.selectedDate = $scope.dt;
            }
        });

        $scope.$watch('sharedService.selectedDate', function () {
            if(sharedService.selectedDate && $scope.dt.toString() != sharedService.selectedDate) {
                $scope.dt = new Date(sharedService.selectedDate); // ng-model must be a Javascript Date object
            }
        });

    }])
    .directive('datepicker', function () {
        return {
            restrict: 'E',
            template: __webpack_require__(8),
            controller: 'DatepickerPopupDemoCtrl'
        }
    });

/* unused harmony default export */ var _unused_webpack_default_export = DatepickerPopupDemoCtrl;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module_js__ = __webpack_require__(0);


const formController = __WEBPACK_IMPORTED_MODULE_0__app_module_js__["a" /* default */]
    .controller("formController", ["$scope", "$http", "sharedService", function($scope, $http, sharedService) {
        $scope.sharedService = sharedService;
        $scope.submit = function() {

            var data = {
                title: sharedService.header,
                comment: sharedService.comment,
                deadline: sharedService.selectedDate
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
                deadline: sharedService.selectedDate,
                _id: sharedService.tempId
            };

            sharedService.header = '';
            sharedService.comment = '';
            sharedService.tempId = null;

            $http.put('/update', data)
                .then(function(response) {
                    sharedService.tasks = response.data;
                    $scope.$parent.editing = false;
                    sharedService.selectedDate = new Date();
                });
        };

    }])
    .directive('createForm', function () {
        return {
            restrict: 'E',
            template: __webpack_require__(9),
            controller: 'formController'
        }
    });

/* unused harmony default export */ var _unused_webpack_default_export = formController;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module_js__ = __webpack_require__(0);


const TodoAppController = __WEBPACK_IMPORTED_MODULE_0__app_module_js__["a" /* default */]
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
    }])
    .directive('mydir', function () {
        return {
            restrict: 'E',
            template: __webpack_require__(10),
            controller: 'TodoAppController'
        }
    });
    
    
/* unused harmony default export */ var _unused_webpack_default_export = TodoAppController;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module_js__ = __webpack_require__(0);


const sharedService = __WEBPACK_IMPORTED_MODULE_0__app_module_js__["a" /* default */]
    .service('sharedService', function() {
    this.tasks;
    this.header;
    this.comment;
    this.tempId;
    this.selectedDate;
});

/* unused harmony default export */ var _unused_webpack_default_export = sharedService;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h4>Deadline</h4>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <p class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" uib-datepicker-popup=\"{{format}}\" ng-model=\"dt\" is-open=\"popup1.opened\" datepicker-options=\"dateOptions\" close-text=\"Close\" alt-input-formats=\"altInputFormats\" date-disabled=\"disabled(data)\" ui-date-format />\r\n                <span class=\"input-group-btn\">\r\n                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"open1()\">\r\n                        <i class=\"glyphicon glyphicon-calendar\"></i>\r\n                    </button>\r\n                </span>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<ng-form name=\"todoForm\" novalidate>\r\n        <div ng-class=\"{ 'has-error' : todoForm.title.$invalid && focus===true}\">\r\n            <h4>What I got to do:</h4>\r\n            <input type=\"text\" ng-model=\"sharedService.header\" class=\"form-control\" name=\"title\" required ng-minlength=\"minLength\" ng-focus=\"focus=true\" ng-blur=\"focus=false\">\r\n            <p ng-show=\"todoForm.title.$invalid \" class=\"help-block\">Todo title is required.</p>\r\n        </div>\r\n        <div>\r\n            <h4>Add a comment:</h4>\r\n            <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"5\" ng-model=\"sharedService.comment\" class=\"form-control\"></textarea>\r\n        </div>\r\n        <datepicker></datepicker>\r\n        <div>\r\n            <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"todoForm.$invalid || editing\" ng-click=\"submit()\">\r\n                Add task\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-success\" ng-disabled=\"!editing\" ng-click=\"update()\">\r\n                Update\r\n            </button>\r\n        </div>\r\n    </ng-form>";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<div ng-init=\"init()\">\r\n    <h4>Find my Todo:</h4>\r\n    <input type=\"text\" ng-model=\"searchQuery\" class=\"form-control\" placeholder=\"Search Todo\" id=\"search\">\r\n    <uib-accordion close-others=\"oneAtATime\" ng-repeat=\"task in sharedService.tasks | orderBy: 'deadline' | filter: searchQuery track by task._id\">\r\n        <div uib-accordion-group class=\"panel-default\" is-open=\"status.open\">\r\n            <uib-accordion-heading>\r\n                <span>{{task.title}}</span>\r\n                <i class=\"pull-right glyphicon\" ng-class=\"{'glyphicon-chevron-down': status.open, 'glyphicon-chevron-right': !status.open}\"></i>\r\n                <span class=\"pull-right\">{{task.deadline | date: 'mediumDate'}} </span>\r\n            </uib-accordion-heading>\r\n            {{task.comment}}\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-warning\" ng-click=\"edit(task._id)\">\r\n            Edit\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-danger\" ng-click=\"done(task._id)\" ng-disabled=\"editing\">\r\n            Done\r\n        </button>\r\n    </uib-accordion>\r\n    <create-Form></create-Form>\r\n</div>";

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_components_main_main__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_components_form_form__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_components_datepicker_datepicker__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_sharedService__ = __webpack_require__(7);

// import TodoAppDirective from './app/components/main/main-dir';

// import formDirective from './app/components/form/form-dir';

// import DatepickerDirective from './app/components/datepicker/datepicker-dir';




/***/ })
/******/ ]);