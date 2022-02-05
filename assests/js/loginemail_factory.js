angular.module('loginapp')

.factory('loginemailService',function(){


	var service = {
		setLemail:setLemail,
		getLemail:getLemail
	};
	return service;
	
	function setLemail(email){
        Lemail =  email;
        localStorage.setItem("Lemail",Lemail);
		
	}
	
	function getLemail(){
        Lemail=localStorage.getItem("Lemail");
		return Lemail;
	}
});
