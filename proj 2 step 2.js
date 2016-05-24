// animations done

var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(800, 600);
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

// title_screen container //////////////////////////////////////////////////////////////////////
var title_container = new PIXI.Container();
title_container.position.x = 400;
title_container.position.y = 300;
title_container.alpha = 1;
stage.addChild(title_container);
var title_on = true;

	// add title screen background
	var title_screen = new PIXI.Sprite(PIXI.Texture.fromImage("title.png"));
	title_container.addChild(title_screen);
	title_screen.anchor.x = .5;
	title_screen.anchor.y = .5;
	title_screen.position.x = 0;
	title_screen.position.y = 0;
	
	// add play
	var play_button = new PIXI.Sprite(PIXI.Texture.fromImage("play.png"));
	title_container.addChild(play_button);
	play_button.anchor.x = .5;
	play_button.anchor.y = .5;
	play_button.position.x = 0;
	play_button.position.y = -25;
	
	// add tutorial
	var tutorial_button = new PIXI.Sprite(PIXI.Texture.fromImage("tutorial.png"));
	title_container.addChild(tutorial_button);
	tutorial_button.anchor.x = .5;
	tutorial_button.anchor.y = .5;
	tutorial_button.position.x = 0;
	tutorial_button.position.y = 50;
	
	// add credits
	var credits_button = new PIXI.Sprite(PIXI.Texture.fromImage("credits.png"));
	title_container.addChild(credits_button);
	credits_button.anchor.x = .5;
	credits_button.anchor.y = .5;
	credits_button.position.x = 0;
	credits_button.position.y = 125;
// end title_screen container /////////////////////////////////////////////////////////////////////


// tutorial container /////////////////////////////////////////////////////////////////////////////
var tutorial_container = new PIXI.Container();
tutorial_container.position.x = 400;
tutorial_container.position.y = 300;
tutorial_container.alpha = 0;
var tutorial_on = false;
stage.addChild(tutorial_container);

	// add tutorial background
	var tutorial_background = new PIXI.Sprite(PIXI.Texture.fromImage("instructions.png"));
	tutorial_container.addChild(tutorial_background);
	tutorial_background.anchor.x = .5;
	tutorial_background.anchor.y = .5;
	tutorial_background.position.x = 0;
	tutorial_background.position.y = 0;

	// add play button
	var play_button_2 = new PIXI.Sprite(PIXI.Texture.fromImage("play.png"));
	tutorial_container.addChild(play_button_2);
	play_button_2.anchor.x = .5;
	play_button_2.anchor.y = .5;
	play_button_2.position.x = 0;
	play_button_2.position.y = 100;
	
	// add main menu button
	var main_menu_button = new PIXI.Sprite(PIXI.Texture.fromImage("main menu.png"));
	tutorial_container.addChild(main_menu_button);
	main_menu_button.anchor.x = .5;
	main_menu_button.anchor.y = .5;
	main_menu_button.position.x = 0;
	main_menu_button.position.y = 175;
// end tutorial container /////////////////////////////////////////////////////////////////////////////


// credits container //////////////////////////////////////////////////////////////////////////////////
var credits_container = new PIXI.Container();
credits_container.position.x = 400;
credits_container.position.y = 300;
credits_container.alpha = 0;
var credits_on = false;
stage.addChild(credits_container);

	// add credits background 
	var credits_background = new PIXI.Sprite(PIXI.Texture.fromImage("credits screen.png"));
	credits_container.addChild(credits_background);
	credits_background.anchor.x = .5;
	credits_background.anchor.y = .5;
	credits_background.position.x = 0;
	credits_background.position.y = 0;
	
	// add main menu button
	var main_menu_button2 = new PIXI.Sprite(PIXI.Texture.fromImage("main menu.png"));
	credits_container.addChild(main_menu_button2);
	main_menu_button2.anchor.x = .5;
	main_menu_button2.anchor.y = .5;
	main_menu_button2.position.x = 0;
	main_menu_button2.position.y = 175;
// end credits container ///////////////////////////////////////////////////////////////////////////////



// game container //////////////////////////////////////////////////////////////////////////////////////

var game_container = new PIXI.Container();
game_container.position.x = 400;
game_container.position.y = 300;
game_container.alpha = 0;
var game_on = false;
stage.addChild(game_container);

// add game background
var game_background = new PIXI.Sprite(PIXI.Texture.fromImage("background.png"));
game_container.addChild(game_background);
game_background.anchor.x = .5;
game_background.anchor.y = .5;
game_background.position.x = 0;
game_background.position.y = 0;


// load sprite sheet /////////////////////////////////////////

// declare variables globally so we can use them later

var mob_1 = undefined;
var mob_2 = undefined;
var mob_3 = undefined;
var mob_4 = undefined;
var player_1 = undefined;

PIXI.loader
	.add("assets.json")
	.load(ready);

function ready(){
	
	// wall 1
	var wall_1 = new PIXI.Sprite(PIXI.Texture.fromFrame("wall horizontal.png"));
	game_container.addChild(wall_1);
	wall_1.anchor.x = .5;
	wall_1.anchor.y = .5;
	wall_1.position.x = -23;
	wall_1.position.y = 175;
	
	
	// wall 2 
	var wall_2 = new PIXI.Sprite(PIXI.Texture.fromFrame("wall horizontal.png"));
	game_container.addChild(wall_2);
	wall_2.anchor.x = .5;
	wall_2.anchor.y = .5;
	wall_2.position.x = 23;
	wall_2.position.y = 50;
	
	
	// pond 1
	var pond = new PIXI.Sprite(PIXI.Texture.fromFrame("pond.png"));
	game_container.addChild(pond);
	pond.anchor.x = .5;
	pond.anchor.y = .5;
	pond.position.x = -292;
	pond.position.y = -125;
	
	
	// finish
	var finish = new PIXI.Sprite(PIXI.Texture.fromFrame("finish.png"));
	game_container.addChild(finish);
	finish.anchor.x = .5;
	finish.anchor.y = .5;
	finish.position.x = -301;
	finish.position.y = -240;

	
	// mob 1 bug with wings
	mob_1 = new PIXI.Sprite(PIXI.Texture.fromFrame("mob 1.png"));
	game_container.addChild(mob_1);
	mob_1.anchor.x = .5;
	mob_1.anchor.y = .5;
	mob_1.position.x = -337;
	mob_1.position.y = 90;
	
	// mob 2 circle
	mob_2 = new PIXI.Sprite(PIXI.Texture.fromFrame("mob 2.png"));
	game_container.addChild(mob_2);
	mob_2.anchor.x = .5;
	mob_2.anchor.y = .5;
	mob_2.position.x = 335;
	mob_2.position.y = -240;
	
	// mob 3 frog thing
	mob_3 = new PIXI.Sprite(PIXI.Texture.fromFrame("mob 3.png"));
	game_container.addChild(mob_3);
	mob_3.anchor.x = .5;
	mob_3.anchor.y = .5;
	mob_3.position.x = -320;
	mob_3.position.y = -40;
	
	// mob 4 circle
	mob_4 = new PIXI.Sprite(PIXI.Texture.fromFrame("mob 2.png"));
	game_container.addChild(mob_4);
	mob_4.anchor.x = .5;
	mob_4.anchor.y = .5;
	mob_4.position.x = -190;
	mob_4.position.y = -190;
	
	
	// we want ..... A SHRUBBERY!!!
	var shrub_array_1 = [];
	for (var i=0; i<15; i++){
		shrub_array_1.push(new PIXI.Sprite(PIXI.Texture.fromFrame("shrub.png")));
		game_container.addChild(shrub_array_1[i]);
		shrub_array_1[i].anchor.x = .5;
		shrub_array_1[i].anchor.y = .5;
		shrub_array_1[i].position.x = -290 + i*45;
		shrub_array_1[i].position.y = 16;
		
	}
	
	// we want ..... ANOTHER SHRUBBERY!!!
	var shrub_array_2 = [];
	var shrub_array_3 = [];
	var shrub_array_4 = [];
	for (var i=0; i<9; i++){
		shrub_array_2.push(new PIXI.Sprite(PIXI.Texture.fromFrame("shrub.png")));
		game_container.addChild(shrub_array_2[i]);
		shrub_array_2[i].anchor.x = .5;
		shrub_array_2[i].anchor.y = .5;
		shrub_array_2[i].position.x = -196 + i*45;
		shrub_array_2[i].position.y = -150;
		
		shrub_array_3.push(new PIXI.Sprite(PIXI.Texture.fromFrame("shrub.png")));
		game_container.addChild(shrub_array_3[i]);
		shrub_array_3[i].anchor.x = .5;
		shrub_array_3[i].anchor.y = .5;
		shrub_array_3[i].position.x = -200 + i*45;
		shrub_array_3[i].position.y = -130;
		
		shrub_array_4.push(new PIXI.Sprite(PIXI.Texture.fromFrame("shrub.png")));
		game_container.addChild(shrub_array_4[i]);
		shrub_array_4[i].anchor.x = .5;
		shrub_array_4[i].anchor.y = .5;
		shrub_array_4[i].position.x = -208 + i*45;
		shrub_array_4[i].position.y = -110;
		
	}
	
	// make it like the last shrubbery but slightly elevated
	
	var shrub_array_5 = [];
	var shrub_array_6 = [];
	for (var i = 0; i <3; i++){
		shrub_array_5.push(new PIXI.Sprite(PIXI.Texture.fromFrame("shrub.png")));
		game_container.addChild(shrub_array_5[i]);
		shrub_array_5[i].anchor.x = .5;
		shrub_array_5[i].anchor.y = .5;
		shrub_array_5[i].position.x = -155 + i*45;
		shrub_array_5[i].position.y = -89;

		
		shrub_array_6.push(new PIXI.Sprite(PIXI.Texture.fromFrame("shrub.png")));
		game_container.addChild(shrub_array_6[i]);
		shrub_array_6[i].anchor.x = .5;
		shrub_array_6[i].anchor.y = .5;
		shrub_array_6[i].position.x = 50 + i*45;
		shrub_array_6[i].position.y = -89;
	}
	
	// player
	player_1 = new PIXI.Sprite(PIXI.Texture.fromFrame("person.png"));
	game_container.addChild(player_1);
	player_1.anchor.x = .5;
	player_1.anchor.y = .5;
	player_1.position.x = 0;
	player_1.position.y = 240;
	
	function animate_mobs(){
	var final_x_fw = 325
	var start = mob_3.position;
	
	// animate mob 3 (middle mob)
	createjs.Tween.get(start, {loop: true})
	.to({x: final_x_fw}, 4000)
	.to({x: -320}, 4000);
	
	// animate mob 1 (bottom mob)
	createjs.Tween.get(mob_1.position, {loop: true})
	.to({x: final_x_fw}, 3000)
	.to({y: 130}, 250)
	.to({x: -335}, 3000)
	.to({y: 90}, 250);
	
	//animate mob 2/4 (top mobs)
	createjs.Tween.get(mob_2.position, {loop: true})
	.to({x: -190}, 3000)
	.to({y: -190}, 250)
	.to({x: 335}, 3000)
	.to({y: -240}, 250);
	
	createjs.Tween.get(mob_4.position, {loop: true})
	.to({x: 335}, 3000)
	.to({y: -240}, 250)
	.to({x: -190}, 3000)
	.to({y: -190}, 250);
	
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);
	}
animate_mobs();
	
} // end ready fnc

// end sprite sheet stuff ////////////////////////////////////

// end game container //////////////////////////////////////////////////////////////////////////////////

/**
// pause container
var pause_container = new PIXI.Container();
pause_container.position.x = 400;
pause_container.position.y = 300;
stage.addChild(pause_container);
**/


function mouseHandlerPlay(e){ // if user hits the play button
	// make sure other containers are set to invisible
	closeAllScreens();
	
	// set up game
	game_container.alpha = 1;
	game_on = true;
}
function mouseHandlerTutorial(e){ // if user hits the tutorial button
	// make sure other containers are set to invisible.
	closeAllScreens();
	
	// show tutorial screen
	tutorial_container.alpha = 1;
	tutorial_on = true;
	activate_buttons()
}
function mouseHandlerCredits(e){ // if user hits the credits button
	// make sure other containers are set to invisible.
	closeAllScreens();
	
	// show credits screen
	credits_container.alpha = 1;
	credits_on = true;
	activate_buttons()
}
function mouseHandlerMainMenu(e){ // if user hits the main menu button go to title screen
	// make sure other containers are set to invisible
	closeAllScreens();
	
	// display titlescreen
	title_container.alpha = 1;
	title_on = true;
	activate_buttons();
}

// initialize titlescreen buttons 
play_button.interactive = true;
play_button.on('mousedown', mouseHandlerPlay);
tutorial_button.interactive = true;
tutorial_button.on('mousedown', mouseHandlerTutorial);
credits_button.interactive = true;
credits_button.on('mousedown', mouseHandlerCredits);


// initialize tutorial buttons
play_button_2.interactive = false;
play_button_2.on('mousedown', mouseHandlerPlay);
main_menu_button.interactive = false;
main_menu_button.on('mousedown', mouseHandlerMainMenu);


// initialize credits buttons
main_menu_button2.interactive = false;
main_menu_button2.on('mousedown', mouseHandlerMainMenu);


function closeAllScreens(){
	title_on = false;
	//game_on = false;
	tutorial_on = false;
	credits_on = false;
	//pause_on = false;
	
	// make all screens invisible
	title_container.alpha = 0;
	//game_container.alpha = 0;
	tutorial_container.alpha = 0;
	credits_container.alpha = 0;
	//pause_container.alpha = 0;
	
	de_activate_buttons();
}

function activate_buttons(){
	
	if(title_on){ // if title screen is on then activate buttons for it
		play_button.interactive = true;
		tutorial_button.interactive = true;
		credits_button.interactive = true;
	}
	
	if(tutorial_on){ // tutorial is on
		play_button_2.interactive = true;
		main_menu_button.interactive = true;
	}
	
	if(credits_on){// credits are on
		main_menu_button2.interactive = true;
	}
}

function de_activate_buttons(){ // turns off all buttons
	
	// buttons for title screen
	play_button.interactive = false;
	tutorial_button.interactive = false;
	credits_button.interactive = false;
	
	// buttons for tutorial
	play_button_2.interactive = false;
		main_menu_button.interactive = false;
	// buttons for credits
	main_menu_button2.interactive = false;
	// buttons for pause
}

function collision(){// collision for game

}


/**
var new_x_fw = mob_3.position.x + 200;
		var new_x_bw = mob_3.position.x - 200;
		
		if(mob_3.position.x < 320 && !reverse_mob_3){ // go right until mob hits the right wall
			createjs.Tween.get(mob_3.position).to({x: new_x_fw}, 1000);
			console.log("condition 1");
		}
		else if(mob_3.position.x > -320 && reverse_mob_3){ // go left until mob hits left wall
			createjs.Tween.get(mob_3.position).to({x: mob_3.position.x - 100}, 1000);
			console.log("condition 2");
		}
		else if(mob_3.position.x > 320){ //if mob hits right wall
			reverse_mob_3 = true;
			createjs.Tween.get(mob_3.position).to({x: mob_3.position.x - 100}, 1000); // reverse direction
			console.log("condition 3");
		}
		else{ // if mob hits left wall
			reverse_mob_3 = false;
			createjs.Tween.get(mob_3.position).to({x: new_x_fw}, 1000); // reverse direction
			console.log("condition 4");
		}
**/




var reverse_mob_3 = 0; // check of mobs need to reverse direction

/**
function animate_game(){
	// if the game screen is being viewed then animate obstacles for that screen.
	if(game_on){
		var new_x_fw = mob_3.position.x + 200;
		var new_x_bw = mob_3.position.x - 200;
		
		if(mob_3.position.x < 320 && !reverse_mob_3){ // go right until mob hits the right wall
			createjs.Tween.get(mob_3.position).to({x: mob_3.position.x + 100}, 1000);
			console.log("condition 1");
		}
		else if(mob_3.position.x > -320 && reverse_mob_3){ // go left until mob hits left wall
			createjs.Tween.get(mob_3.position).to({x: mob_3.position.x - 100}, 1000);
			console.log("condition 2");
		}
		else if(mob_3.position.x > 320){ //if mob hits right wall
			reverse_mob_3 = true;
			createjs.Tween.get(mob_3.position).to({x: mob_3.position.x - 100}, 1000); // reverse direction
			console.log("condition 3");
		}
		else{ // if mob hits left wall
			reverse_mob_3 = false;
			createjs.Tween.get(mob_3.position).to({x: mob_3.position.x + 100}, 1000); // reverse direction
			console.log("condition 4");
		}
	}
}**/

//animate_game();
//setInterval(animate_game, 1000);



// for player movement
function keydownEventHandler(e){
	if(e.keyCode == 87){ // W keyCode
		var new_y = player_1.position.y - 10;
		createjs.Tween.get(player_1.position).to({y: new_y}, 100);
	}
	if(e.keyCode == 83){ // S keyCode
		var new_y = player_1.position.y + 10;
		createjs.Tween.get(player_1.position).to({y: new_y}, 100);
	}
	if(e.keyCode == 65){ // A keyCode
		var new_x = player_1.position.x - 10;
		createjs.Tween.get(player_1.position).to({x: new_x}, 100);
	}
	if(e.keyCode == 68){ // D keyCode
		var new_x = player_1.position.x + 10;
		createjs.Tween.get(player_1.position).to({x: new_x}, 100);
	}
}

document.addEventListener('keydown', keydownEventHandler);

// end player movement

function animate(){
	requestAnimationFrame(animate);
	
	

	//collision();
	
	
	renderer.render(stage);
}

animate();
