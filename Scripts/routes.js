var customerApp = angular.module("customerApp", []);

customerApp.config(function($routeProvider){

    $routeProvider
        .when('/',
            {

            }
        )
        .when('/addnewcustomer',
            {
                
            }
        )
        .when('/detailscustomer',
            {
                
            }
        )
        .when('/listallcustomers',
            {
                
            }
        )
        .otherwise({ redirectTo: '/' })

});