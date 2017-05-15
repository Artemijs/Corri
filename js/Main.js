var screen_height = $(window).height();
var s_width = $(window).width();
console.log(screen_height);
var ream_more = false;
function init(){

	if(s_width > 480){
		$("#my_nav").append('<li class="active"><a class = "page-scroll" href="#about">About</a></li>'+
		'<li><a data-toggle="collapse" data-target=".navbar-collapse" class = "page-scroll" href="#persona">Personas</a></li>'+
		'<li><a data-toggle="collapse" data-target=".navbar-collapse" class = "page-scroll" href="#use_case_diagrams">Use Case Diagram</a></li>'+
		'<li><a data-toggle="collapse" data-target=".navbar-collapse" class = "page-scroll" href="#use_cases">Use Cases</a></li>'+
		'<li><a data-toggle="collapse" data-target=".navbar-collapse" class = "page-scroll" href="#structure_map">Structure Maps</a></li>'+
		'<li><a data-toggle="collapse" data-target=".navbar-collapse" class = "page-scroll" href="#wire_frames">Wire Frames</a></li>'+
		'<li><a data-toggle="collapse" data-target=".navbar-collapse" class = "page-scroll" href="#task_diagram">Task Diagram</a></li>'+
		'<li><a data-toggle="collapse" data-target=".navbar-collapse" class = "page-scroll" href="#story_board">Stroy Board</a></li>'+
		'<li><a data-toggle="collapse" data-target=".navbar-collapse" class = "page-scroll" href="#std">State Diagrams</a></li>');
	}
	else{
		$("#my_nav").append('<li class="active"><a class = "page-scroll" href="#about">About</a></li>'+
		'<li><a class = "page-scroll" href="#persona">Personas</a></li>'+
		'<li><a class = "page-scroll" href="#use_case_diagrams">Use Case Diagram</a></li>'+
		'<li><a class = "page-scroll" href="#use_cases">Use Cases</a></li>'+
		'<li><a class = "page-scroll" href="#structure_map">Structure Maps</a></li>'+
		'<li><a class = "page-scroll" href="#wire_frames">Wire Frames</a></li>'+
		'<li><a class = "page-scroll" href="#task_diagram">Task Diagram</a></li>'+
		'<li><a class = "page-scroll" href="#story_board">Stroy Board</a></li>'+
		'<li><a class = "page-scroll" href="#std">State Diagrams</a></li>');
	}
	showLogInDiv();
	createPersonas();
	loadPersona(0);
	createUseCases();
	loadUseCase(0);
	createUCD();

	 $(document).on('click', 'a.page-scroll', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
	//position persona ui elements ith dynamic positioning
	//arro corlor E7E7E7 
	var img = $("#persona_img");
	var mul = 2;
	if (s_width > 480) {
		$("#persona_name_p").css({
			"left" : -$("#persona_name_p").width(), 
			"top" : -$("#persona_name_p").height()*0.9
		});
		img.css({"padding-bottom":"5%"});
	}else{
		mul = 1;
		$("#persona_name_p").css({
			"left" : 0, 
			"top" : -$("#persona_name_p").height()*0.9
		});
	}
	
	$("#persona_nav_left").css({
		"position":"absolute",
		"left":$("#persona_bio").offset().left - $("#persona_nav_left").width()*mul,
		"top": $("#persona").offset().top+ $("#persona").height()/2
	});
	$("#persona_nav_right").css({
		"position":"absolute",
		"left":$("#persona_bio").offset().left+ $("#persona_bio").width() + ($("#persona_nav_left").width()*(mul-1)),
		"top": $("#persona").offset().top+ $("#persona").height()/2
	});	
	var t = ($("#pbg_logo").width()+$("#pbg_text").width());
	$("#pgb_container").css({
		"position":"absolute",
		"top": $("#pbg_back").height()/2-$("#pgb_container").height()/2,
		"left":$("#pbg_back").width()/2- t/2
	});
	$("#wf_header_text").css({
		"position":"relative",
		"left": $("#wire_frames").width()/2 - $("#wf_header_text").width()/2,
		"top": -$("#wire_frames").height()*0.6
	});
	createFrames();
	$("#diagrams").css({
		"position":"relative"
	});
	if (s_width > 480) {
		$("#footer_text").css({
			"top": $("#footer_img").height()*0.25,
			"left": $("#footer_img").width()*0.5,
		});
	}
	else{
		$("#footer_text").css({
			"width":"100%",
			"padding":"10%",
			"top": 0,
			"left": 0,
		});
	}
	//
	$("#std_zoom_div").css({
		"height":$("#std_img").height()
	});
	createZoom();
	$("#about_read_more").click(function(){
		ps_hidden = !ps_hidden;
		if(ps_hidden){
			$("#about_read_more").text("read more");
			$("#arm_txt").animate({"height":"0", "opacity":0});
			var autoHeight = $("#arm_txt").css('height', 'auto').height();
			$("#persona_nav_left").css({
				"top": $("#persona_nav_left").offset().top- autoHeight
			});
			$("#persona_nav_right").css({
				"top": $("#persona_nav_right").offset().top- autoHeight
			});

		}
		else{
			$("#about_read_more").text("read less");
			autoHeightAnimate($("#arm_txt"));
			var autoHeight = $("#arm_txt").css('height', 'auto').height();
			$("#persona_nav_left").css({
				"top": $("#persona_nav_left").offset().top+ autoHeight
			});
			$("#persona_nav_right").css({
				"top": $("#persona_nav_right").offset().top+ autoHeight
			});

		}
	});
}
function scroll(e){
	var btn = $("#persona_nav_left");
	
	var ypos = $(btn).offset().top - $(window).scrollTop() ;
	if(ypos < screen_height){
		//btn.stop().animate({"top": ($("#persona").offset().top + ypos) + "px"}, "slow" );
		btn.css({
			//"top": $("#persona").offset().top - ypos
			//"position": "fixed"
		});

	}
}
var details = {
	"Username": "Ace24",
	"Password": "Team#24"
};
function showLogInDiv(){
	$("#content").css({
		"display":"none"
	});
	$("log_in").css({
		"display":"block"
	});
	$("#log_in_submit").click(function(){verify();});
}

function verify(){
	if($("#login").val() == details.Username && $("#password").val() == details.Password){
		closeLogIn();
	}
	else{
		$("#log_in").append("<p>User name or password incorrect</p>");
	}
}
function closeLogIn(){
	$("#log_in").css({
		"display":"none"
	});
	$("#content").css({
		"display":"block"
	});

}