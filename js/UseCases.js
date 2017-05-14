var all_usecases=[];
var current_case = 0;
function createUseCases(){
	all_usecases[0]={
		"usc_title":"Practice A Language",
		"usc_description":"User interacting with the AI in a different language, discussing a topic of choice.",
		"usc_actors":"<li class = 'dots'>User</li>"+"<li class = 'dots'>AI</li>",
		"usc_preconditions":"The user has opened the main part of the app.",
		"usc_basic_flow":"<li class='numbers' >The System will greet the user.</li>"+
			"<li class='numbers'>The user replies.</li>"+
			"<li class='numbers'>The System asks for a topic of conversation .</li>"+
			"<li class='numbers'>The user replies with a subject of conversation.</li>"+
			"<li class='numbers'>The user input /  system reply loop continues forming a conversation.</li>"+
			"<li class='numbers'>The exchange of banter and linguistic smarts continues until the user ends the conversation by saying “I don’t want to talk about it.</li>",
		"usc_alt_flow":"<p class='tabbed'>2.A : The user does not reply. The following steps take effect after 20 seconds of silence.</p>"+
		"<br><p class = 'tabbed2'>1. The system asks the user if he needs help.</p>"+
		"<p class = 'tabbed2'>2. The user replies with yes and a list of user actions is given to the user by the system.</p>"+
		"<p class = 'tabbed2'>2A1.The user says “no” and the system waits for further input.</p>"+
		"<p class = 'tabbed2'>2A2. The user says nothing and the system goes to sleep.</p>",
	};
	all_usecases[1]={
		"usc_title":"Translate",
		"usc_description":"When the user gives the voice command “Translate” the system begins the translate sequence. The user will then provide the system with words to translate. He does so by speaking into the phone and the phone speaks back. The system gives the user the translated version of whatever the user provided, in a language previously selected.",
		"usc_actors":"<li class = 'dots'>User</li>"+"<li class = 'dots'>AI</li>",
		"usc_preconditions":"The user has opened the main part of the app and the language has been selected.",
		"usc_basic_flow":"<li class='numbers' >User says “translate”.</li>"+
			"<li class='numbers'>System begins to record user input after the words “translate”.</li>"+
			"<li class='numbers'>The user speaks into the phone.</li>"+
			"<li class='numbers'>The system gives the user a translation of what the user said.</li>"+
			"<li class='numbers'>The system asks the user for further instructions.</li>"+
			"<li class='numbers'>The user prompts the system that no further translation is required.</li>"+
			"<li class='numbers'>The system returns to its previous state.</li>",
		
		"usc_alt_flow":"<p class='tabbed'>3A: If the user fails to speak within the next 30 seconds the translation will automatically end.</p>"+
		"<p class = 'tabbed'>3B: If the user asks for help, the system will provide a list of actions a user can take.</p>"+
		"<p class = 'tabbed'>6A: The user has a list of available options to choose from when he gets the translation. He can ask for definition, synonyms, antonyms or to translate something else.</p>"
		};
	$("#use_case_nav_left").click(function(){
		clearUseCase();
		current_case--;
		if(current_case <0){
			current_case = all_usecases.length-1;
		}
		
		loadUseCase(current_case);
	});
	$("#use_case_nav_right").click(function(){
		clearUseCase();
		current_case++;
		if(current_case >= all_usecases.length){
			current_case = 0;
		}
		
		loadUseCase(current_case);

	});

	$("#use_case_nav_left").css({
		"position":"absolute",
		"left": $("#use_case_text").offset().left - $("#use_case_nav_left").width()*2,
		"top": $("#use_cases").height()/2 
	});
	$("#use_case_nav_right").css({
		"position":"absolute",
		"left":$("#use_cases").width() + $("#use_case_nav_right").width() + $("#use_case_text").offset().left,
		"top": $("#use_cases").height()/2 
	});
}
function loadUseCase(index){
	$("#usc_title").text(all_usecases[index]["usc_title"]);
	$("#usc_description").text(all_usecases[index]["usc_description"]);
	$("#usc_actors").append(all_usecases[index]["usc_actors"]);
	$("#usc_preconditions").text(all_usecases[index]["usc_preconditions"]);
	$("#usc_basic_flow").append(all_usecases[index]["usc_basic_flow"]);
	$("#usc_alt_flow").append(all_usecases[index]["usc_alt_flow"]);


}
function clearUseCase(){
	$("#usc_title").text("");
	$("#usc_description").text("");
	$("#usc_actors").empty();
	$("#usc_preconditions").text("");
	$("#usc_basic_flow").empty();
	$("#usc_alt_flow").empty();

}