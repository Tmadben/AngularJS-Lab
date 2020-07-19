var customerApp = angular.module("customerApp", []);

customerApp.config(function($routeProvider){

    $routeProvider
        .when('/',
            {
                controller: 'mainViewController',
                templateUrl: '../../public/app/index.html'
            }
        )
        .when('/addnewcustomer',
            {
                controller: 'addNewCustomerController',
                templateUrl: '../../public/views/addNewCustomer.html'
            }
        )
        .when('/detailscustomer',
            {
                controller: 'detailsCustomerController',
                templateUrl: '../../public/views/detailsCustomer.html'
            }
        )
        .when('/listallcustomers',
            {
                controller: 'listAllCustomersController',
                templateUrl: '../../public/views/listAllCustomer.hmtl'
            }
        )
        .otherwise({ redirectTo: '/' })

});