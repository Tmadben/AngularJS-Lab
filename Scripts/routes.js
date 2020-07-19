var customerApp = angular.module("customerApp", []);

customerApp.config(function($routeProvider){

    $routeProvider
        .when('/',
            {
                controller: 'mainViewController',
                templateUrl: 'mainView.html'
            }
        )
        .when('/addnewcustomer',
            {
                controller: 'addNewCustomerController',
                templateUrl: 'addNewCustomer.html'
            }
        )
        .when('/detailscustomer',
            {
                controller: 'detailsCustomerController',
                templateUrl: 'detailsCustomer.html'
            }
        )
        .when('/listallcustomers',
            {
                controller: 'listAllCustomersController',
                templateUrl: 'listAllCustomer.hmtl'
            }
        )
        .otherwise({ redirectTo: '/' })

});