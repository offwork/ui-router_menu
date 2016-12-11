/**
 * Created by keremozdemir on 11/12/2016.
 */
(function () {
    "use strict";
    angular
        .module('app.admin')
        .controller('AccountController', AccountController);

    AccountController.$inject = ['logger'];
    /* @ngInject */
    function AccountController(logger) {
        var vm = this;
        vm.title = 'Admin Account';

        activate();

        function activate() {
            logger.info('Activated Admin Account View');
        }
    }
})();