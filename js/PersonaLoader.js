var all_personas = [];
var current_persona = 0;
var ps_hidden = true;
var height = 0;
function createPersonas(){

	all_personas[0] = {
		"persona_name_p":"Jonathan Mendez",
		"persona_bio":"<p  class = 'jumbotron col-sm-9 '>Jonathan was born in South America a catholic family. He moved to Ireland when he was 21 and studied in the Dublin University College for 3 years. Had completed a part time course and gained qualifications BSc (Hons) in Information Technology. At the moment he lives a rented accommodation with his girlfriend. He is vegetarian, likes cooking and searching for new international recipes online.<br><br>Jonathan spends 1 hour every day on public transport where he has access to free wifi therefore he mostly uses this time to catch up with news on his phone and read or learn something new. Jonathan uses a laptop but he spends more time using his mobile devices tablet and phone.</p>",
		"persona_img":"./img/personas/0.png",
		"frequent_usr_txt":"Frequent user",
		"visited_list":'<a href = "https://google.ie" >google.ie</a><br>'+
						'<a href = "https://https://www.ted.com/talks" >www.ted.com/talks</a><br>'+
						'<a href = "https://Facebook.com" >Facebook.com</a><br>'+
						'<a href = "http://www.technewsworld.com/" >www.technewsworld.com/</a><br>'+
						'<a href = "http://irishtechnews.ie/">irishtechnews.ie/</a><br>'+
						'<a href = "https://Linkedin.com" >Linkedin.com</a><br>',
		"pd_age":27,
		"pd_occupation":"Part time sales assistant in Computer store/part time English student",
		"pd_education":"BSc in IT",
		"pd_nationality":"Argentinian",
		"pd_living":"In a 2 bed apartment in Dublin city, Ireland with his girlfriend, sharing with another couple",
		"pd_hobby":"Playing online games, watching movies and also really interested in foreign cultures and food",
		"admired_brand_img":["./img/personas/brands_0/0.png", "./img/personas/brands_0/1.png", "./img/personas/brands_0/2.png", "./img/personas/brands_0/3.png"],
		"pgoals":"<p>Interested in finding new mobile apps that will help him improve his verbal skills.</p>"+
							"<p>Sees a huge potential in future technologies like Adobe Voco and dreams to find a job in which he could participate in creation of something “BIG”.</p>"+
							"<p>Find a well paid job so that he can buy a house(apply for a mortgage)"+
							"Ireland had become his home and he wants to communicate and find friend between the native speakers.</p>"+
							"<p>To enjoy his learning process and in the future to find a job that he will enjoy doing.</p>",
		"pskills":"<p> Jonathan really likes new technology that makes his busy life easier, he speaks a basic level of English but very keen to improve. He has done different courses and trainings online, familiar with e-learning and willing to pay a small fee for any websites or applications that help to improve his English. </p>",
		"pconerns":"<p>Jonathan is concerned if he has no native English speaker friends available to practice the language he will not be able to pronounce all the new words correctly he learned.</p>",
		"pscenarios":"<li class = 'dots' >As usual Jonathan checks his Facebook page, after reading some tech. news he notices a video advertising of a new application that will launch in 2 months time. He finds it interesting and decides to follow “Corri” application Facebook page.</li>"+
					"<li class = 'dots' >After a few days he sees a new video post on that page about development process of the app, and finds out that “Corri” application is using very innovative technology that he read about few months before. </li>"+
					"<li class = 'dots' >During the next few weeks he sees more posts on this page with advice on the best ways to learn a language as well as the technologies that are used to create it. He found the interesting “Corri” teaching methodology as well as the technology that is used to present this teaching. Jonathan followed the link leading to a website and decided to subscribe to a newsletter, so that he would not miss any latest news.</li>"+
					"<li class = 'dots' >On the website Johnathan learns a lot of new things associated with language learning as well as new technologies. The most important thing is that he was able to combine interesting with useful.</li>"+
					"<li class = 'dots' >In his English class Johnathan got an assessment, to write an Essay and a Presentation about an Art subject of his choice. He got a bit confused because he is not a big Art expert and is not very well familiar with the Irish Art monuments. </li>"+
					"<li class = 'dots' >After a lot of research he finally was able to finish his assessment, but he was not confident if it was grammatically correct. He needed someone to proofread his work.</li>"+
					"<li class = 'dots' >He remembered that Corri application should of been released by this time, and decided to download and try it for grammar mistakes and to practice his essay presentation.</li>"
					
					
	};


	all_personas[1] = {
		"persona_name_p":"Irina Alekseevna",
		"persona_bio":"<p  class = 'jumbotron col-sm-9 persona_bio'> Irina was born in USSR and studied german at school. She moved to Ireland where her kids lived. Despite the fact that she does not speak English, soon she got a job offer. Irina has more than 20 years experience in sewing industry and is a valuable employee with great experience.  </p>",
		"persona_img":"https://lh4.googleusercontent.com/L795Ej4dwjxmIlw1Fqww6sFIvZ7mv_cRHtjssqyqbO-Mg568-E6M2wD0gRjFemEmPNQVu0kdbdV-Y2VoQc7Hne-dNjxn0VmmmZXB22P94CGneF7cS8EwlTSZFkOQRVMzNfCBpIsg",
		"frequent_usr_txt":"Frequent user",
		"visited_list":'<a href = "https://Ok.ru" >Ok.ru</a><br>'+
						'<a href = "https:Pinterest.com" >Pinterest.com</a><br>'+
						'<a href = "https://Facebook.com" >Facebook.com</a><br>'+
						'<a href = "http://Instagram.com" >Instagram.com/</a><br>',
		"pd_age":49,
		"pd_occupation":"Sewing Machinist",
		"pd_education":"",
		"pd_nationality":"Lithuanian",
		"pd_living":"Living in a house in Dublin with her fiance. Have two grown up kids that live separately in Ireland as well. ",
		"pd_hobby":"Gardening, cooking, handmade crafts, swimming",
		"admired_brand_img":["./img/personas/brands_0/0.png", "./img/personas/brands_0/1.png", "./img/personas/brands_0/2.png", "./img/personas/brands_0/3.png"],
		"pgoals":"<p>Soon Irina will get married. She will have to go through some Interviews and paperwork, she wants to manage doing them with or without a minimal help of translation agencies.</p><br>"+
		"<p>Irina lived in Ireland for 5 years, her speaking skills haven't improved much, as she is too shy to communicate with the native speakers.  Because of that she is avoiding all occasional job meetings. Irina want to stop limiting herself by communicating only with a small number of people who speak Russian or Lithuanian.</p><br>"+
		"<p>Irina works for a current company for 4 years , she had already asked for a pay raise once by bringing a note written by her daughter. This time she wants to ask for a raise in person. </p>",
		"pskills":"<p>Irina is a shy person and does not like to ask for a help. She tired to go to the English classes, but found it too difficult to catch up with others. She is an active mobile user and already tried a few language learning apps. Most of them teach how to read English words, but Irina wants to learn how to speak and pronounce them. </p>",
		"pconerns":"<p> Irina likes her job but feels discomfort on a daily basis. Most of her coworkers are native speakers. Very often she does not understand what people are trying to tell her. </p>",
		"pscenarios": "<li class = 'dots'  >At the weekend Irina is visiting her dougthér and her grandchildren. They had a conversation about the learning a language and what difficulties she is facing at work. Irina told her daughter about the apps she is using and that the progress is very small.</li>"+
					"<li class = 'dots' >After that her daughter tried to look for some learning apps for her mother. She found Corri application that said it communicates and teaches the right pronunciation. </li>"+
					"<li class = 'dots' >They decided to download and try this new application.</li>"
	};

	$("#persona_nav_left").click(function(){
		clearPersona();
		current_persona--;
		if(current_persona <0){
			current_persona = all_personas.length-1;
		}
		
		loadPersona(current_persona);
	});
	$("#persona_nav_right").click(function(){
		clearPersona();
		current_persona++;
		if(current_persona >= all_personas.length){
			current_persona = 0;
		}
		
		loadPersona(current_persona);

	});
	height = $("#persona_scenario").height();
	$("#persona_scenario").click(function(){hideScenario();});
}
function hideScenario(){
	ps_hidden = !ps_hidden;
	console.log(ps_hidden);
	if(ps_hidden)
		$("#pscenarios").animate({"height":"0", "opacity":0});
	else{
		autoHeightAnimate($("#pscenarios"));
	}
}
function autoHeightAnimate(element){
  	var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    	  element.height(curHeight); // Reset to Default Height
    	  element.stop().animate({ height: autoHeight, "opacity":1 }); // Animate to Auto Height
}
function loadPersona(index){
	$("#persona_name_p").text(all_personas[index]["persona_name_p"]);
	$("#persona_bio").append($(all_personas[index]["persona_bio"]));
	$("#persona_img").attr("src", (all_personas[index]["persona_img"]));
	$("#frequent_usr_txt").text(all_personas[index]["frequent_usr_txt"]);
	$("#visited_list").append($(all_personas[index]["visited_list"]));

	$("#pd_age").text(all_personas[index]["pd_age"]);
	$("#pd_occupation").text(all_personas[index]["pd_occupation"]);
	$("#pd_education").text(all_personas[index]["pd_education"]);
	$("#pd_nationality").text(all_personas[index]["pd_nationality"]);
	$("#pd_living").text(all_personas[index]["pd_living"]);
	$("#pd_hobby").text(all_personas[index]["pd_hobby"]);
	var brands = all_personas[index]["admired_brand_img"];
	for(var i =0; i < brands.length; i++){
		$("#admired_brand_img").append("<img src='"+brands[i]+"'>");
	}

	$("#pgoals").append($(all_personas[index]["pgoals"]));
	$("#pskills").append($(all_personas[index]["pskills"]));
	$("#pconerns").append($(all_personas[index]["pconerns"]));
	$("#pscenarios").append($(all_personas[index]["pscenarios"]));

}
function clearPersona(){
	$("#persona_name_p").text("");
	$("#persona_bio").empty();
	//$("#persona_img").attr("src", (all_personas[index]["persona_img"]));
	$("#frequent_usr_txt").text("");
	$("#visited_list").empty();

	$("#pd_age").text("");
	$("#pd_occupation").text("");
	$("#pd_education").text("");
	$("#pd_nationality").text("");
	$("#pd_living").text("");
	$("#pd_hobby").text("");

	$("#admired_brand_img").empty();

	$("#pgoals").empty();
	$("#pskills").empty();
	$("#pconerns").empty();
	$("#pscenarios").empty();
}