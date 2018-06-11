(function(global){

	var ajaxutils={};
	function getRequestObject(){
		if(window.XMLHttpRequest){
			return (new XMLHttpRequest());
		}
		else if(window.ActiveXObject){
			return(new ActiveXObject("Microsoft.XMLHttp"));

		}
		else{
			global.alert("Does not support Ajax");
			return(null);
		}
	}
	ajaxutils.sendGetRequest=function(requestUrl,responseHandler){
		var request=getRequestObject();
		request.onreadystatechange=function(){
			handleResponse(request,responseHandler);
		}
		request.open("GET",requestUrl,true);
		request.send();
	}
	function handleResponse(request,responseHandler){
		if((request.readyState==4)&&(request.status==200)){
			responseHandler(request.responseText);
		}
	}
	global.aajaxutils=ajaxutils;

	})(window);
