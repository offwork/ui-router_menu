/**
 * Created by keremozdemir on 11/12/2016.
 */
(function () {
    "use strict";
    angular
        .module('app.dashboard')
        .controller('FavoritesController', FavoritesController);

    FavoritesController.$inject = ['logger'];
    /* @ngInject */
    function FavoritesController(logger) {
        var vm = this;
        vm.title = 'Dashboard Favorites';

        activate();

        function activate() {
            logger.info('Activated Admin Favorites View');
        }
    }
})();