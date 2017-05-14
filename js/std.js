var zoom_factor = 5;
var zoom_per_click =0.5;
var rect={
	"left":0,
	"top":0,
	"width":0,
	"height":0
}
var mag_glass;
var hovering = false;
function createZoom(){
	rect.width = $("#std_img").width()/zoom_factor;
	rect.height = $("#std_img").height()/zoom_factor;
	//var ratio = $("#std_img").height()/$("#std_img").width();
	//rect.height *= ratio;
	mag_glass = $("<div id='mag_glass'></div>");
	$("#std_img_div").append(mag_glass);
	mag_glass.css(rect);
	$("#std_zoom_img").css({
		"margin-top": rect.top,
		"margin-left": rect.left,
		"width":zoom_factor*100+"%"
	});
	//$("#mag_glass").bind('click mousedown dblclick',function(e){
	//});
	//$(mag_glass).unbind('click');
	$("#std_img").mouseenter(function(ev){
		hovering = true;
	});
	$("#std_img").mouseleave(function(ev){
		hovering = true;
	});
	$("#std_img").click(function(){

	});
	$('#std_img').bind('contextmenu', function(e) {
		zoom_factor-=zoom_per_click;
		updateGlass();
		return false;
	}); 
	$('#std_img').click(function(e) {
		zoom_factor+=zoom_per_click;
		updateGlass();
		return false;
	});
	$("#std_img").mousemove(function( ev ) {
		var $img = $(ev.target);
		var offset = $(this).offset();
		var x = ev.pageX  -offset.left;
		var y = ev.pageY - offset.top ;
		rect.left = x;
		rect.top = y;
		updateZoom();
	});
}
function updateGlass(){
	rect.width = $("#std_img").width()/zoom_factor;
	rect.height = $("#std_img").height()/zoom_factor;
	$("#mag_glass").css(rect);
	$("#std_zoom_img").css({
		"margin-top": -rect.top*zoom_factor,
		"margin-left": -rect.left*zoom_factor,
		"width":zoom_factor*100+"%"
	});
}
function updateZoom(){
	var r2 = rect;
	r2.top-=rect.height/2;
	r2.left-= rect.width/2
	mag_glass.css(r2);
	$("#std_zoom_img").css({
		"margin-top": -rect.top*zoom_factor,
		"margin-left": -rect.left*zoom_factor
	});
}