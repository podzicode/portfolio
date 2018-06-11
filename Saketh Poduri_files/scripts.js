$(function(){
	$("#data_toggle").blur(function(event){
		var screenwidth= window.innerWidth;
		if(screenwidth<=767);{
			$("#navbarSupportedContent").collapse('hide');
		}


	});
});

(function(global){
	var sp={};
	var main_content="codesnippets/main_content.html";
	var skills_content="codesnippets/skills.html";
	//Convineance function to insert InnerHtml for select
	var insertHtml= function(selector,html){
		var targetElement=document.querySelector(selector);
		targetElement.innerHTML=html;
	};
	//Show Loading icon when elemt is loading
	var showLoading= function(selector){
		var html="<div class='text-center'>";
		html+="<img src='./ajax-loader.gif'></div>";
		insertHtml(selector,html);
	};
	//document.addEventListener("DOMContentLoaded",function(event){
		$(function(){
	showLoading("#main-content");
	aajaxutils.sendGetRequest(
		main_content,
	function(responseText)
{
	//console.log(responseText);
	var targetEl= "#main-content";
	insertHtml(targetEl,responseText);
	//document.querySelector("#main-content").innerHTML=responseText;

});

});
	$(function(){
		showLoading("skillss");
		aajaxutils.sendGetRequest(skills_content,
			function(responseText){
				document.querySelector("#skills").innerHTML=responseText;
			});

	});

	global.$sp=sp;
})(window);
