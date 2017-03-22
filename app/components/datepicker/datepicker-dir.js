import app from '../../app.module.js';

app.directive('datepicker', function () {
        return {
            restrict: 'E',
            template: require('./datepicker-template.html'),
            controller: 'DatepickerPopupDemoCtrl'
        }
    });