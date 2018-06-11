$(function(){
	$("#data_toggle").blur(function(event){
		var screenwidth= window.innerWidth;
		if(screenwidth<=767){
			$("#navbarSupportedContent").collapse('hide');
		}


	});
});
var clickCount=0;
function Showprojects(){
		clickCount++;
		if((clickCount%2)!=0){
			$("#projdesc1").collapse('show');
			$("#projdesc2").collapse('show');
			$("#projdesc3").collapse('show');
			$("#projdesc4").collapse('show');
			$("#projexp").removeClass('fa-plus');
			$("#projexp").addClass('fa-minus');
		}
		if((clickCount%2)==0){
			$("#projdesc1").collapse('hide');
			$("#projdesc2").collapse('hide');
			$("#projdesc3").collapse('hide');
			$("#projdesc4").collapse('hide');
			$("#projexp").removeClass('fa-minus');
			$("#projexp").addClass('fa-plus');
		}
	
}
var clicksCount=0;
function ShowExp(){
	clicksCount++;
	if((clicksCount%2)!=0){
		$("#Cscont").collapse('show');
		$("#infCont").collapse('show');
		$("#projexp1").removeClass('fa-plus');
		$("#projexp1").addClass('fa-minus');

	}
	if((clicksCount%2)==0){
		$("#Cscont").collapse('hide');
		$("#infCont").collapse('hide');
		$("#projexp1").removeClass('fa-minus');
		$("#projexp1").addClass('fa-plus');

	}
}
var clickssCount=0;
function ShowSkill(){
	clickssCount++;
		if((clickssCount%2)!=0){
			$("#pgmlang").collapse('show');
			$("#dbms").collapse('show');
			$("#webdev").collapse('show');
			$("#mlb").collapse('show');
			$("#ce").collapse('show');
			$("#projexp2").removeClass('fa-plus');
			$("#projexp2").addClass('fa-minus');
		}
		if((clickssCount%2)==0){
			$("#pgmlang").collapse('hide');
			$("#dbms").collapse('hide');
			$("#webdev").collapse('hide');
			$("#mlb").collapse('hide');
			$("#ce").collapse('hide');
			$("#projexp2").removeClass('fa-minus');
			$("#projexp2").addClass('fa-plus');
		}
	

}
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
	console.log(responseText);
	var targetEl= "#main-content";
	insertHtml(targetEl,responseText);
	//document.querySelector("#main-content").innerHTML=responseText;

});

});
	$(function(){
		showLoading("#skillss");
		aajaxutils.sendGetRequest(skills_content,
			function(responseText){
				document.querySelector("#skillss").innerHTML=responseText;
			});

	});
	

	global.$sp=sp;
})(window);
