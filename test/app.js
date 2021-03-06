var angular = require('angular');
var adalAngular = require('modular-adal-angular');

function config(adalAuthenticationServiceProvider, $httpProvider) {
  adalAuthenticationServiceProvider.init({ clientId: 'example-client-id' }, $httpProvider);
}

function controller($scope, adalAuthenticationService) {
  $scope.login = function () {
      adalAuthenticationService.login();
  };
}

angular.module('app', [adalAngular])
  .config(config)
  .controller('ctrl', controller);
