import app from '../app.module.js';

const sharedService = app
    .service('sharedService', function() {
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

export default sharedService;