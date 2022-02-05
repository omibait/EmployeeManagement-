angular.module('loginapp')

.controller('loginController',function($scope, $location,$rootScope,$window,$http,loginemailService){
    
    $scope.submit=function(){


        var usercredentials={
            'email':$scope.email,
            'password' : $scope.password
        }
    
        $http({
            url: 'http://localhost:5000/data',
            method: 'POST',
            data : usercredentials,
            headers: {'Content-Type': 'application/json'}
        })
        .then(function (response) {
            console.log(response.data[0].role);

            if(response.data[0].role=='admin'){
                $rootScope.loggedIn = true;
                $location.path('/employeelist');
                $rootScope.loggedIn= false;
            }
            else if(response.data[0].role=='employee'){
                $rootScope.loggedIn = true;
                loginemailService.setLemail($scope.email);
                $location.path('/userdetails');
                $rootScope.loggedIn= false;
            }
            else{
                alert("Email or Password is Wrong");
            }

    
        }, function (error) {
    
            alert("Error occured");
        })
        

       
        // if ($scope.email == 'admin@gmail.com' && $scope.password=='admin'){
        //     $rootScope.loggedIn = true;
        //     $location.path('/employeelist');
        //     $rootScope.loggedIn= false;
        // }
        // else{
        //     alert("Wrong Eamil or Password");
        // }
    };

})





