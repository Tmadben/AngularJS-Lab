//Add new customers
var customerApp = angular.module("customerApp", []);

customerApp.controller('addNewCustomerController', function ($scope) {
   $scope.listCustomers =  [
           {
               "firstName": "JOHANNA",
               "familyName": "VICENT",
               "gender": "F",
               "age": 50
           },
           {
               "firstName": "CECILIA",
               "familyName": "FRANK",
               "gender": "F",
               "age": 18
           },
           {
               "firstName": "BERNARD",
               "familyName": "COUTEAU",
               "gender": "M",
               "age": 60
           },
           {
               "firstName": "ALAIN",
               "familyName": "LE SAC",
               "gender": "M",
               "age": 34
           },
           {
               "firstName": "YVES",
               "familyName": "YDE JACQUES",
               "gender": "M",
               "age": 45
           },
           {
               "firstName": "LUCIE",
               "familyName": "CARTELLE",
               "gender": "F",
               "age": 49
           }
   ];

    $scope.addNewCustomer = function() {
    
        $scope.listCustomers.push($scope.cus);
        $scope.cus = null;
        
    }

});
