import app from '../../app.module.js';

app.directive('createForm', function () {
        return {
            restrict: 'E',
            template: require('./form-template.html'),
            controller: 'formController'
        }
    });