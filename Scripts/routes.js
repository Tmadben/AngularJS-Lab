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
                controller: 'addNewCustomer',
                templateUrl: 'addNewCustomer.html'
            }
        )
        .when('/detailscustomer',
            {
                controller: 'detailsCustomer',
                templateUrl: 'detailsCustomer.html'
            }
        )
        .when('/listallcustomers',
            {
                controller: 'listAllCustomers',
                templateUrl: 'listAllCustomer.hmtl'
            }
        )
        .otherwise({ redirectTo: '/' })

});