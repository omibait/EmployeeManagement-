angular.module('loginapp')


.controller('listController',function($scope, $rootScope, $window, $location, UidService,$http){

    $scope.detail=function(e){
        var id = $(e.target).data('id');
        UidService.setUID(id);
        $location.path('/employeedetails');
       
    };

    $http({
        url: 'http://localhost:5000/list',
        method: 'GET',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function (response) {
        $scope.data=response.data;

    }, function (error) {

        alert("Error occured");
    })
    
    $scope.sortCol="id";

    $scope.sort=function(sortCol){
        console.log(sortCol);
        $scope.data=[]
        var sort_data={
            val:sortCol
        }

        $http({
            url: 'http://localhost:5000/sort',
            method: 'POST',
            data:sort_data,
            headers: {'Content-Type': 'application/json'}
        })
        .then(function (response) {
            
            $scope.data=response.data;

        }, function (error) {

            alert("Error occured");
        })
        
    }

    // $scope.search=function(){
    //     $scope.data=[];
    //     var search_data={
    //         val:$scope.searchedname
    //     };
            
    //     $http({
    //         url: 'http://localhost:5000/search',
    //         method: 'POST',
    //         data:search_data,
    //         headers: {'Content-Type': 'application/json'}
    //     })
    //     .then(function (response) {
    //         if(response.data=='No records found'){
    //             alert("No Such Name")
    //         }
    //         else{
    //         $scope.data=response.data;
    //         }
    //         console.log(response.data);
    //     }, function (error) {

    //         alert("Error occured");
    //     })

    // };


})



