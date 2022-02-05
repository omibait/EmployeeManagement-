angular.module('loginapp')


.factory('UidService',function(){
    var uid=0;

	var service = {
		setUID:setUID,
		getUID:getUID
	};
	return service;
	
	function setUID(id){
        uid =  id;
        localStorage.setItem("uid",uid);
		
	}
	
	function getUID(){
        uid=localStorage.getItem("uid");
		return uid;
	}
});