var screen_width = $(window).width();
var center_pos;
var total_frames = 7;
var using_width = screen_width*1.15;
var current_frame =0;
var all_frames=[];
var cells= [];
var left_max = Math.floor(total_frames/2);
function createFrames(){
	$("#frame_nav_left").css({
		"position":"absolute",
		"left":0,
		"top" : $("#wf_bg").height()*0.9
	});
	$("#frame_nav_right").css({
		"position":"absolute",
		"left":  $("#wf_bg").width() - $("#frame_nav_right").width(),
		"top" :  $("#wf_bg").height()*0.9
	});
	$("#frame_nav_left").click(function(){
		var frame = current_frame;
		frame--;
		rotateByFrame(1);
	});
	$("#frame_nav_right").click(function(){
		var frame = current_frame;
		frame++;
		rotateByFrame(-1);
	});

	var srcs = ["img/wireframe1.gif", "img/wireframes/wireframe2.png", "img/wireframes/wireframe4.png", "img/wireframes/wireframe5.png", "img/wireframes/wireframe6.png", "img/wireframes/wireframe3.png", "img/wireframes/wireframe7.png" ];
	total_frames = srcs.length;
	var frame_width = using_width/total_frames ;
	$("#slide").css({
		"position":"absolute",
		"top":$("#wf_bg").height() - $("#empty_phone").height()/2 ,
	});
	$("#empty_phone").css({
		"width":frame_width,
		"height":"auto"
	});
	$("#empty_phone").css({
		"position":"absolute",
		"left":$("#slide").offset().left + screen_width/2-$("#empty_phone").width()/2,
		"z-index":10
	});

	center_pos = {
		"x":$("#empty_phone").offset().left + $("#empty_phone").width()*0.05,
		"y":0,//$("#empty_phone").offset().top
	}
	console.log(center_pos);
	//create frame images
	var scale_factor = 0.05;
	
	for(var i =0; i <total_frames;i++){
		var frame = $("<img id='frame_"+i+"' class = 'scalable shado' src = '"+srcs[i]+"'>")
		$("#slide").append(frame);
		var x;
		var y ;
		var height = 0;
		if(i <= left_max){
			y = ($("#empty_phone").height()*0.1)+ (left_max-i)*($("#empty_phone").height()*scale_factor);
			height = $("#empty_phone").height()*0.8 - (left_max-i)*($("#empty_phone").height()*scale_factor*2);
		}
		else{
			y = ($("#empty_phone").height()*0.1) - (left_max-i)*($("#empty_phone").height()*scale_factor);
			height = $("#empty_phone").height()*0.8 + (left_max-i)*($("#empty_phone").height()*scale_factor*2);
		}

		
		var zindex = 6;
		x = center_pos.x - (frame_width*0.5)*(left_max-i);
		cells[i]={
			"top": y,
			"left":x,
			"width":frame_width*0.91,
			"height": height
		}

		all_frames[i]={
			"id":"frame_"+i,
			"cell":i
		}
		frame.css({
			"position":"absolute",
			"height":0
		});
		frame.click(function (){
			var id = $(this).attr("id");
			handleClick(id);
		});
	}
	rotateByFrame(-4);
	$("#frame_nav_left").css({
		"position":"absolute",
		"left":$("#frame_nav_left").width(),
		"top" : $("#wf_bg").height()*0.9
	});
	$("#frame_nav_right").css({
		"position":"absolute",
		"left":  $("#wf_bg").width() - $("#frame_nav_right").width()*2,
		"top" :  $("#wf_bg").height()*0.9 
	});
}
function handleClick(id){
	for(var i = 0; i < all_frames.length; i++){
		if(all_frames[i].id == id){
			var cell = all_frames[i].cell;
			console.log(cell);
			var dir = 0;
			dir = left_max-cell;
			rotateByFrame(dir);
		}
	}
}
function rotateByFrame(target){
	//calculate the direction
	var dir = target ;//current_frame-target;
	for(var i =0; i < all_frames.length; i++){
		var necell = (all_frames[i].cell+dir);

		if(necell >= total_frames) necell-=total_frames;
		else if(necell < 0) necell+=total_frames;
		console.log("old cell "+all_frames[i].cell+ " ne cell "+necell);
		$("#"+all_frames[i].id).animate(cells[necell]);
		all_frames[i].cell = necell;
		if(necell<=left_max){
			$("#"+all_frames[i].id).css({
				"z-index": (necell)
			});
		}
		else{
			$("#"+all_frames[i].id).css({
				"z-index": (total_frames-1-necell)
			});
		}
	}
	current_frame = target;
}