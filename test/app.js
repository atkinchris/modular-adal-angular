var angular = require('angular');
var adalAngular = require('../adal-angular');

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

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});
