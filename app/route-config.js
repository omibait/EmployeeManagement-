angular.module('loginapp')


.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when('/',{
        templateUrl:'app/login/login.html',
        
    })

    .when('/employeelist',{
   
        templateUrl: 'app/employeelist/employeelist.html', 
    })

    .when('/employeedetails',{
   
        templateUrl: 'app/employeedetails/employeedetails.html', 
    })

    .when('/userdetails',{
   
        templateUrl: 'app/userdetails/userdetails.html', 
    })

    .otherwise({
        redirectTo :'/'
    });
}]);


 
