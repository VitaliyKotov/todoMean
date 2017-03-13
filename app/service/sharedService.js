import app from '../app.module.js';

const sharedService = app
    .service('sharedService', function() {
    this.tasks;
    this.header;
    this.comment;
    this.tempId;
    this.selectedDate;
});

export default sharedService;