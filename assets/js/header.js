// JavaScript Document

var HideSignin=1;

$(document).ready(function(e) {
    $(".hide_signIn_signUp").on("click",function(){
		$(".templatemo-bg-image-1").slideUp(150);
		$('.signIn_signUp').slideUp(150);
	});
	
	$(".templatemo-bg-image-1,.signIn_signUp").on("click",function(e){
		
		if(HideSignin==1){		
			$(".templatemo-bg-image-1").slideUp(150);
			$('.signIn_signUp').slideUp(150);
		}
	});
	
	$(".signIn_signUp .templatemo-login-form-2").on("click",function(){
		HideSignin=0;
		
		setTimeout(function(){HideSignin=1},100);
		
		$(".templatemo-bg-image-1").css("display","block");
		$('.signIn_signUp').css("display","block");
	});
});

function showLogin(){
	$(".templatemo-bg-image-1").slideDown(50);
	$('.signIn_signUp').slideDown(250);
}


function hide_singin_signup(){

	$(".templatemo-bg-image-1").slideUp(150);
	$('.signIn_signUp').slideUp(150);
}