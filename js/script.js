var sides = 6 /*Die simulator initializes with a 6-sided die*/
var shape = "square" /*6-sided die are squares*/
var backgroundColors = ["#DFDFDF", "#fbeed5","#f2dede","#B6C9D8","#dff0d8", '#d9edf7']; /*Possible background colors*/
var diceShapes = ["whiteTriangle", "square", "redTriangle", "kite", "pentagon", "blueTriangle"] /*Posible die shapes*/


/*Remove initial css animation class*/
var removeCssAnimation = function() {
	if ($("#die").hasClass("bigEntrance")) {
		$("#die").removeClass("bigEntrance");
	}
}

/*Dice randomizing function*/
var rollDice = function() { 
	var number = Math.floor(Math.random() * sides) + 1;
	$("#die").attr("src", "img/" + number + shape + ".png");
}

/*Initialize jRumble on die element*/
var initializeRumble = function() {
	$('#die').jrumble({
		x: 10,
		y: 10,
		rotation: 4
	});
}

/*Animate die roll on each click using jRumble, code taken from http://jackrugile.com/jrumble/*/
var animation= function() {
	var demoTimeout;
	$('.diceButton , #die').click(function(){
		clearTimeout(demoTimeout);
		$("#die").trigger('startRumble');
		demoTimeout = setTimeout(function(){$('#die').trigger('stopRumble');}, 500)
	});
}

/*Changes the number of sides for the current die*/
var shapeChanger = function(senderObject){
	sides = $(senderObject).attr('id'); /*Takes the button number id and uses it to randomize the dice*/
	var buttonNumber = $(senderObject).attr('name'); /*Defines local variable and assings button "name" attribute's numeric value*/
	shape = diceShapes[buttonNumber]; /*Uses "name" attribute numerica value select a die shape from the shapes array*/
	$("body").css("background-color", backgroundColors[buttonNumber]);	/*Changes the background color to match the die*/
}





$(document).ready(function() {
	initializeRumble();
	animation(); //Animate when page loads
	rollDice(); //Roll dice when page loads


	//Click on dice to roll again
	$("#die").click(function() {
		removeCssAnimation(); /*Remove css page load animation so it doesn't collide with rumble animation*/
		rollDice();
		animation();
	});

	//Generic dice button function
	$('.diceButton').click(function() {
		var thisObject = $(this);
		shapeChanger(thisObject);
		rollDice();
		animation();
	});	
});



/***LEGACY***/

/*var animation = function() {
	$("img").effect("shake",200);
};*/

/*Animate die roll on each click using jRumble, code taken from http://jackrugile.com/jrumble/*/
/*var animation = function() {
	var demoTimeout;
	$('#die').click(function(){
		$this = $(this);
		clearTimeout(demoTimeout);
		$this.trigger('startRumble');
		demoTimeout = setTimeout(function(){$this.trigger('stopRumble');}, 500)
	});
}*/