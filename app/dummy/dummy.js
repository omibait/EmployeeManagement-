var app=angular.module('hello',[]);

app.controller('hello_c', function($scope,$http){

$scope.click=function(){
    console.log("Button is pressed");

    $http({
        url: 'http://localhost:5000/data',
        method: 'GET',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function (response) {
        $scope.data2=response.data;
        console.log($scope.data2[1].id)

    }, function (error) {

        alert("Error occured");
    })
    };


$scope.url='';
$scope.age=23;

$scope.enter=function(){
    console.log("Button is pressed");

    
    var xyz={
        'name': $scope.url,
        'age' : $scope.age
    }

    $http({
        url: 'http://localhost:5000/data',
        method: 'POST',
        data : xyz,
        headers: {'Content-Type': 'application/json'}
    })
    .then(function (response) {
        console.log(response.data);

    }, function (error) {

        alert("Error occured");
    })
    }



});