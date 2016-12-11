/**
 * Created by keremozdemir on 11/12/2016.
 */
(function () {
    "use strict";
    angular
        .module('app.dashboard')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    abstract: true,
                    url: '/',
                    template: '<ui-view/>',
                    title: 'Dashboard',
                    settings: {
                        nav: 1,
                        content: 'Dashboard'
                    }
                }
            },
            {
                state: 'dashboard.favorites',
                config: {
                    url: '/favorites',
                    templateUrl: 'app/dashboard/favorites/favorites.html',
                    controller: 'FavoritesController',
                    controllerAs: 'vm',
                    title: 'Dashboard Favorites',
                    settings: {
                        nav: 1,
                        content: 'Favorites'
                    }
                }
            },
            {
                state: 'dashboard.analytics',
                config: {
                    url: '/analytics',
                    templateUrl: 'app/dashboard/analytics/analytics.html',
                    controller: 'AnalyticsController',
                    controllerAs: 'vm',
                    title: 'Dashboard Analytics',
                    settings: {
                        nav: 1,
                        content: 'Analytics'
                    }
                }
            }
        ];
    }
})();