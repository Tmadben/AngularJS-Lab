var listCustomers = [];
var initCustomer = function(){
    return listCustomers=
    [
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


}
var addNewCustomer = function(){

       var customerObject = {
        "firstName": $scope.firstName,
        "familyName": $scope.familyName,
        "gender": $scope.gender,
        "age": $scope.age
    }

    listCustomers.push(customerObject);

};