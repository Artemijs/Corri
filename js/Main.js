var screen_height = $(window).height();
console.log(screen_height);

function init(){
	createPersonas();
	loadPersona(0);
	createUseCases();
	loadUseCase(0);
	createUCD();
	loadUCD(0);

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
	$("#persona_name_p").css({
		"left" : -$("#persona_name_p").width(), 
		"top" : -$("#persona_name_p").height()*0.9
	});
	$("#frequent_usr_txt").css({
		"left" : $("#persona_name_p").width(), 
		"top" : -$("#persona_name_p").height()*1.4
	});
	$("#persona_nav_left").css({
		"position":"absolute",
		"left":$("#persona_bio").offset().left - $("#persona_nav_left").width()*2,
		"top": $("#persona").offset().top+ $("#persona").height()/2
	});
	$("#persona_nav_right").css({
		"position":"absolute",
		"left":$("#persona_bio").offset().left+ $("#persona_bio").width() + $("#persona_nav_left").width(),
		"top": $("#persona").offset().top+ $("#persona").height()/2
	});

	$("#use_case_nav_left").css({
		"position":"absolute",
		"left":10,
		"top": $("#use_cases").offset().top+ $("#use_cases").height()/2
	});
	$("#use_case_nav_right").css({
		"position":"absolute",
		"left":$(window).width()-$("#use_case_nav_right").width(),
		"top": $("#use_cases").offset().top+ $("#use_cases").height()/2
	});


	$("#uc_diagram_nav_left").css({
		"position":"absolute",
		"left":10,
		"top": $("#use_case_diagrams").offset().top+ $("#use_case_diagrams").height()/2
	});

	$("#uc_diagram_nav_right").css({
		"position":"absolute",
		"left":$(window).width()-$("#uc_diagram_nav_right").width(),
		"top": $("#use_case_diagrams").offset().top+ $("#use_case_diagrams").height()/2
	});
	var t = ($("#pbg_logo").width()+$("#pbg_text").width());
	$("#pgb_container").css({
		"position":"absolute",
		"top": $("#pbg_back").height()/2-$("#pgb_container").height()/2,
		"left":$("#pbg_back").width()/2- t/2
	});
	/*$("#pgb_container").css({
		"width": "60%"//((t/$("#pbg_back").width())*100)+"%"
	});*/
	$("#wf_header_text").css({
		"position":"relative",
		"left": $("#wire_frames").width()/2 - $("#wf_header_text").width()/2,
		"top": -$("#wire_frames").height()*0.6
	});
	createFrames();
	$("#diagrams").css({
		"position":"relative"
		//"top":$("#wire_frames").height()*5
	});
	$("#footer_text").css({
		"top": $("#footer_img").height()*0.25,
		"left": $("#footer_img").width()*0.5,
	});
	//
	$("#std_zoom_div").css({
		"height":$("#std_img").height()
	});
	createZoom();
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