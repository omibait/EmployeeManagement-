angular.module('loginapp')


//use uid1 in function of controller to directly use it. for use of value() method

.controller('detailsController',function($scope,UidService,$http){
    
    $scope.emailofuser = UidService.getUID();
    var idforuser={
        email:$scope.emailofuser
    }
    
    // $http({
    //     url: 'http://localhost:5000/list',
    //     method: 'GET',
    //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    // })
    // .then(function (response) {
    //     $scope.data=response.data;

    //     let= $scope.data.findIndex( record => record.email === $scope.emailofuser );

    //     $scope.fname = $scope.data.firstname;
    //     $scope.lname = $scope.data.lastname;
    //     $scope.img= $scope.data.imgurl;
    //     $scope.empEmail = $scope.data.email;
    //     $scope.empPhone = $scope.data.phone
    //     $scope.empGender = $scope.data.gender;
    //     $scope.empAddress = $scope.data.department;

    // }, function (error) {

    //     alert("Error occured");
    // })


    
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
        $scope.empEmail = $scope.data[0].email;
        $scope.empPhone = $scope.data[0].phone
        $scope.empGender = $scope.data[0].gender;
        $scope.empDept = $scope.data[0].department;

    }, function (error) {

        alert("Error occured");
    })


});