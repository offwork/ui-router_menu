/**
 * Created by keremozdemir on 11/12/2016.
 */
(function () {
    "use strict";
    angular
        .module('app.admin')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun( routerHelper ) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'admin',
                config: {
                    abstract: true,
                    url: '/admin',
                    template: '<ui-view/>',
                    title: 'Admin',
                    settings: {
                        nav: 2,
                        content: 'Admin'
                    }
                }
            },
            {
                state: 'admin.account',
                config: {
                    url: '/account',
                    templateUrl: 'app/admin/account/account.html',
                    controller: 'AccountController',
                    controllerAs: 'vm',
                    title: 'Admin Account',
                    settings: {
                        nav: 2,
                        content: 'Account'
                    }
                }
            },
            {
                state: 'admin.notification',
                config: {
                    url: '/notification',
                    templateUrl: 'app/admin/notification/notification.html',
                    controller: 'NotificationController',
                    controllerAs: 'vm',
                    title: 'Admin Notification',
                    settings: {
                        nav: 2,
                        content: 'Notification'
                    }
                }
            },
            {
                state: 'admin.tools',
                config: {
                    url: '/tools',
                    templateUrl: 'app/admin/tools/tools.html',
                    controller: 'ToolsController',
                    controllerAs: 'vm',
                    title: 'Admin Tools',
                    settings: {
                        nav: 2,
                        content: 'Tools'
                    }
                }
            }
        ];
    }
})();