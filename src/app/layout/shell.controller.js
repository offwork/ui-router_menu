(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  ShellController.$inject = ['config', 'logger'];
  /* @ngInject */
  function ShellController(config, logger) {
    var vm = this;
    vm.busyMessage = 'Please wait ...';
    vm.isBusy = true;
    vm.navline = {
      title: config.appTitle
    };

    activate();

    function activate() {
      logger.success(config.appTitle + ' loaded!', null);
    }
  }
})();
