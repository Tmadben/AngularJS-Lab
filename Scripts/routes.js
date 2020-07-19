var customerApp = angular.module("customerApp", []);

customerApp.config(function($routeProvider){

    $routeProvider
        .when('/',
            {
                controller:
                templateUrl:
            }
        )
        .when('/addnewcustomer',
            {
                controller:
                templateUrl:
            }
        )
        .when('/detailscustomer',
            {
                controller:
                templateUrl:
            }
        )
        .when('/listallcustomers',
            {
                controller:
                templateUrl:
            }
        )
        .otherwise({ redirectTo: '/' })

});