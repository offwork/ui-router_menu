/**
 * Created by keremozdemir on 11/12/2016.
 */
(function () {
    "use strict";
    angular
        .module('app.admin')
        .controller('ToolsController', ToolsController);

    ToolsController.$inject = ['logger'];
    /* @ngInject */
    function ToolsController(logger) {
        var vm = this;
        vm.title = 'Admin Tools';

        activate();

        function activate() {
            logger.info('Activated Admin Tools View');
        }
    }
})();