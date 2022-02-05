angular.module('loginapp')

.controller('user',function($scope,$http,loginemailService,$location){

    $scope.email=loginemailService.getLemail();
    idforuser={
        email : $scope.email
    };

    $http({
        url: 'http://localhost:5000/details',
        method: 'POST',
        data:idforuser,
        headers: {'Content-Type': 'application/json'}
    })
    .then(function (response) {
        $scope.data=response.data;

        $scope.fname = $scope.data[0].firstname;
        $scope.lname = $scope.data[0].lastname;
        $scope.img= $scope.data[0].imgurl;
        $scope.empDept = $scope.data[0].department;
    
    }, function (error) {

        alert("Error occured");
    })

    $scope.logout=function(){
        $location.path('/');
        $rootScope.loggedIn= false;
    }

});

