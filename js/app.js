var storeApp = angular.module('storeApp', ['ngRoute','bridgeController']);

storeApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when ('/cart',{
            templateUrl : 'views/cart.html',
            controller : 'cartController'
        })
        .when ('/store',{
            templateUrl : 'views/store.html',
            controller : 'storeController'
        })
        .when ('/details/:productId',{
            templateUrl : 'views/details.html',
            controller : 'DetailsController'
        })
        .otherwise ({
            redirectTo :'/store'
        });
}]);
    
