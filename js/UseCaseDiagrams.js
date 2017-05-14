var all_ucd=[];
var current_ucd=0;
function createUCD(){
	
	all_ucd[0] = {"uc_diagrams":"img/use_case_diagram_main.png"};
	all_ucd[1] = {"uc_diagrams":"img/use_case_diagram_translation.png"};
	$("#uc_diagram_nav_left").click(function(){
		clearUCD();
		current_ucd--;
		if(current_ucd <0){
			current_ucd = all_ucd.length-1;
		}
		
		loadUCD(current_ucd);
	});
	$("#uc_diagram_nav_right").click(function(){
		clearUCD();
		current_ucd++;
		if(current_ucd >= all_ucd.length){
			current_ucd = 0;
		}
		
		loadUCD(current_ucd);
	});
	var h = $("#use_case_diagrams").height()*0.7;
	loadUCD(0);
	$("#uc_diagram_nav_left").css({
		"position":"absolute",
		"left":$("#uc_diagrams").offset().left,
		"top": $("#use_case_diagrams").height()/2 + h
	});
	$("#uc_diagram_nav_right").css({
		"position":"absolute",
		"left":$("#use_case_diagrams").width() + $("#uc_diagram_nav_right").width(),
		"top": $("#use_case_diagrams").height()/2 + h
	});
}
function loadUCD(index){
	$("#uc_diagrams").append("<img src = '"+all_ucd[index]["uc_diagrams"]+"'>");
}
function clearUCD(){
	$("#uc_diagrams").empty();
}