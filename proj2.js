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

// game over container /////////////////////////////////////////////////////////////////////////////////
var game_over_container = new PIXI.Container();
stage.addChild(game_over_container);
game_over_container.position.x = 400;
game_over_container.position.y = 300;
game_over_container.alpha = 0;
var game_over_on = false;

	// add gg background
	var gg_background = new PIXI.Sprite(PIXI.Texture.fromImage("gg.png"));
	game_over_container.addChild(gg_background);
	gg_background.anchor.x = .5;
	gg_background.anchor.y = .5;
	gg_background.position.x = 0;
	gg_background.position.y = 0;
	
	// add play button
	var play_button_3 = new PIXI.Sprite(PIXI.Texture.fromImage("play.png"));
	game_over_container.addChild(play_button_3);
	play_button_3.anchor.x = .5;
	play_button_3.anchor.y = .5;
	play_button_3.position.x = 0;
	play_button_3.position.y = 100;
	
	// add main menu button
	var main_menu_button_3 = new PIXI.Sprite(PIXI.Texture.fromImage("main menu.png"));
	game_over_container.addChild(main_menu_button_3);
	main_menu_button_3.anchor.x = .5;
	main_menu_button_3.anchor.y = .5;
	main_menu_button_3.position.x = 0;
	main_menu_button_3.position.y = 175;
	

// end game over container /////////////////////////////////////////////////////////////////////////////



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

var num_deaths = 0;

/**
var message = new Text("Deaths: " + num_deaths, {font: "32px sans-serif", fill: "white"});
game_container.addChild(message);
	message.position.set(0, 0);
**/


// load sprite sheet /////////////////////////////////////////

// declare variables globally so we can use them later

var mob_1 = undefined;
var mob_2 = undefined;
var mob_3 = undefined;
var mob_4 = undefined;
var player_1 = undefined;
var wall_1 = undefined;
var wall_2 = undefined;
var finish = undefined;
var select_sound;
var game_theme1;

PIXI.loader
	.add("assets.json")
	//.add("select.wav")
	.load(ready);
	
PIXI.loader.add("select.wav").load(soundfnc);
PIXI.loader.add("theme.wav").load(soundfnc);

function soundfnc(){
	select_sound = PIXI.audioManager.getAudio("select.wav");
	game_theme1 = PIXI.audioManager.getAudio("theme.wav");
	game_theme1.loop = true;
	game_theme1.play();
}
function ready(){
	
	// save sound 
	//select_sound = PIXI.audioManager.getAudio("select_sound.wav");
	
	
	// wall 1 (lower wall)
	wall_1 = new PIXI.Sprite(PIXI.Texture.fromFrame("wall horizontal.png"));
	game_container.addChild(wall_1);
	wall_1.anchor.x = .5;
	wall_1.anchor.y = .5;
	wall_1.position.x = -23;
	wall_1.position.y = 175;
	
	
	// wall 2 (upper wall)
	wall_2 = new PIXI.Sprite(PIXI.Texture.fromFrame("wall horizontal.png"));
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
	finish = new PIXI.Sprite(PIXI.Texture.fromFrame("finish.png"));
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
	
	//play sound
	select_sound.play();
	
	// set up game
	game_container.alpha = 1;
	game_on = true;
}
function mouseHandlerTutorial(e){ // if user hits the tutorial button
	// make sure other containers are set to invisible.
	closeAllScreens();
	
	//play sound
	select_sound.play();
	
	
	// show tutorial screen
	tutorial_container.alpha = 1;
	tutorial_on = true;
	activate_buttons()
}
function mouseHandlerCredits(e){ // if user hits the credits button
	// make sure other containers are set to invisible.
	closeAllScreens();
	
	//play sound
	select_sound.play();
	
	// show credits screen
	credits_container.alpha = 1;
	credits_on = true;
	activate_buttons()
}
function mouseHandlerMainMenu(e){ // if user hits the main menu button go to title screen
	// make sure other containers are set to invisible
	closeAllScreens();
	
	//play sound
	select_sound.play();
	
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

// initialize gg buttons
play_button_3.interactive = false;
play_button_3.on('mousedown', mouseHandlerPlay);
main_menu_button_3.interactive = false;
main_menu_button_3.on('mousedown', mouseHandlerMainMenu);

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


function box_collision(box, x, y){ // checks the bottom wall
	
	//console.log(x);
	//console.log(y);
	if(box.position.x-400 > x) return false;
	if(x > box.position.x-400 + box.width+69.5) return false;
	if(box.position.y-35 > y) return false;
	if(y>box.position.y-6 + box.height) return false;
	return true;
}

function check_w2(x, y){ //checks the second wall
	if(50+32 < y) return false;
	if(50-65 > y) return false;
	if(-332  > x) return false;
	return true
	
}
function check_pond(x,y){ //checks pond
	if(-50 < y) return false;
	if(-200 > y) return false;
	if(-215 < x) return false;
	return true
}

function check_rows_shrub(x,y){//checks rows of shrubs
	if(-90 < y) return false;
	if(-175 > y) return false;
	if(198 < x) return false;
	return true;
}

function check_tri_row_1(x,y){//checks first tri row of shrubs
	if(-75 < y) return false;
	if(-175 > y) return false;
	if(-20 < x) return false;
	if(-190 > x) return false;
	return true;
}

function check_tri_row_2(x,y){//checks second tri row of shrubs
	if(-75 < y) return false;
	if(-175 > y) return false;
	if(190 < x) return false;
	if(20 > x) return false;
	return true;
}

//returns false if in bounds true if out of bounds
function bounds_check(x, y){ //makes sure player doesnt go out of bounds or walk through obstacles
	
	// check if player is still in bounds of game
	if(x+35 >= 376 || x-35 <= -380){ //player is out of edge of map
		return true; //dont change position
	}
	
	if(y+34 >= 280 || y-34 <= -280){ //player is out of edge of map
		return true;
	}
	
	// check if player is hitting any walls, shrubs or the pond''
	
	// check wall_1
	if(box_collision(wall_1, x, y)){
		return true;
	}
	
	
	//check wall_2/ row of shrubs
	if(check_w2(x, y)){
		return true;
	}
	//check pond
	if(check_pond(x,y)){
		return true;
	}
	
	//check three rows of shrubs  next to pond
	if(check_rows_shrub(x,y)){
		return true;
	}
	
	//check first row of three shrubs
	if(check_tri_row_1(x,y)){
		return true;
	}
	
	//check second row of three shrubs
	if(check_tri_row_2(x,y)){
		return true;
	}
	
	else{return false}
	
	
}

// returns true if player hits mob or false not

function reset_player(){
	player_1.x = 0;
	player_1.y = 240;
}

function box_collision_mob(mob, x, y){
	if(mob.position.x > x) return false;
	if(x > box.position.x + box.width) return false;
	if(box.position.y > y) return false;
	if(y > box.position.y + box.height) return false;
	return true;
	
	
}

var numDeaths = 0;

function collision(){// checks if player hits mob
	//check collision for mob 1 (bottom mob)
	if(player_1.x > mob_1.x-40 && player_1.x < mob_1.x+40){
		if(player_1.y > mob_1.y-40 && player_1.y < mob_1.y+40){
			reset_player();
			numDeaths ++;
		}
	}
	if(player_1.x > mob_2.x-40 && player_1.x < mob_2.x+40){
		if(player_1.y > mob_2.y-40 && player_1.y < mob_2.y+40){
			reset_player();
			numDeaths ++;
		}
	}
	if(player_1.x > mob_3.x-65 && player_1.x < mob_3.x+65){
		if(player_1.y > mob_3.y-35 && player_1.y < mob_3.y+35){
			reset_player();
			numDeaths ++;
		}
	}
	if(player_1.x > mob_4.x-40 && player_1.x < mob_4.x+40){
		if(player_1.y > mob_4.y-40 && player_1.y < mob_4.y+40){
			reset_player();
			numDeaths ++;
		}
	}
	
	// check for collision with finish
	
	if(player_1.x > finish.x-80 && player_1.x < finish.x+80){
		if(player_1.y > finish.y-50 && player_1.y < finish.y+50){
			closeAllScreens();
			
			game_over_container.alpha = 1;
			game_over_on = true;
		}
	}
	
}

// for player movement
function keydownEventHandler(e){
	if(e.keyCode == 87){ // W keyCode
		var new_y = player_1.position.y - 10;
		if(bounds_check(player_1.x, new_y)){
			// if player is not inbounds then dont change position
		}
		else{//no collisions so keep moving
			createjs.Tween.get(player_1.position).to({y: new_y}, 100);
		}
	}
	if(e.keyCode == 83){ // S keyCode
		var new_y = player_1.position.y + 10;
		if(bounds_check(player_1.x, new_y)){
			// if player is not inbounds then dont change position
		}
		
		else{
		createjs.Tween.get(player_1.position).to({y: new_y}, 100);
		}
	}
	if(e.keyCode == 65){ // A keyCode
		var new_x = player_1.position.x - 10;
		if(bounds_check(new_x, player_1.y)){
			// if player is not inbounds then dont change position
		}
		
		else{
		createjs.Tween.get(player_1.position).to({x: new_x}, 100);
		}
	}
	
	if(e.keyCode == 68){ // D keyCode
		var new_x = player_1.position.x + 10;
		if(bounds_check(new_x, player_1.y)){
			// if player is not inbounds then dont change position
		}
		
		else{
		createjs.Tween.get(player_1.position).to({x: new_x}, 100);
		}
	}
}

document.addEventListener('keydown', keydownEventHandler);

// end player movement

//deaths

function animate(){
	requestAnimationFrame(animate);
	renderer.render(stage);
	

	//collision();

	collision();
	
	
}

animate();
