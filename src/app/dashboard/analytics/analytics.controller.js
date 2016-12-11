/**
 * Created by keremozdemir on 11/12/2016.
 */
(function () {
    "use strict";
    angular
        .module('app.dashboard')
        .controller('AnalyticsController', AnalyticsController);

    AnalyticsController.$inject = ['logger'];
    /* @ngInject */
    function AnalyticsController(logger) {
        var vm = this;
        vm.title = 'Dashboard Analytics';

        activate();

        function activate() {
            logger.info('Activated Admin Analytics View');
        }
    }
})();