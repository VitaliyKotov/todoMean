import app from '../../app.module.js';

app.directive('mydir', function () {
        return {
            restrict: 'E',
            template: require('./main-template.html'),
            controller: 'TodoAppController'
        }
    });
