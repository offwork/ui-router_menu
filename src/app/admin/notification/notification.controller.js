/**
 * Created by keremozdemir on 11/12/2016.
 */
(function () {
    "use strict";
    angular
        .module('app.admin')
        .controller('NotificationController', NotificationController);

    NotificationController.$inject = ['logger'];
    /* @ngInject */
    function NotificationController(logger) {
        var vm = this;
        vm.title = 'Admin Notification';

        activate();

        function activate() {
            logger.info('Activated Admin Notification View');
        }
    }
})();