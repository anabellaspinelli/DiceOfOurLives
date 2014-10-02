var sides = 6; //Die simulator initializes with a 6-sided die
var shape = "square"; //6-sided die are squares
var backgroundColors = ["#DFDFDF", "#fbeed5","#f2dede","#B6C9D8","#dff0d8", '#d9edf7']; //Possible background colors
var diceShapes = ["whiteTriangle", "square", "redTriangle", "kite", "pentagon", "blueTriangle"]; //Posible die shapes

//Dice randomizing function
function rollDice() { 
	var number = Math.floor(Math.random() * sides) + 1;
	$('#die').attr("src", "img/" + number + shape + ".png");
	
}

function initializeRumble(){
	$('#die').jrumble();
};

function animation () {
	$("#die").trigger('startRumble');
	setTimeout(function(){$('#die').trigger('stopRumble');}, 500);
	};

//Changes the number of sides for the current die
 function shapeChanger (senderObject){
	sides = $(senderObject).attr('id'); //Takes the button number id and uses it to randomize the dice

	var buttonNumber = $(senderObject).attr('name'); //Defines local variable and assings button "name" attribute's numeric value
	shape = diceShapes[buttonNumber];
	$('body').css("background-color", backgroundColors[buttonNumber]);	//Changes the background color to match the die
}

///Events

//Click on dice to roll again
$('#die').click(function() {
	rollDice();
	animation();
});

//Generic dice button function
$('.diceButton').click(function() {
	shapeChanger(this);
	rollDice();
	animation();
});

//PageLoad event
$(document).ready(function() {
	initializeRumble(); //Loads jrumble on $('#die') object
	//animation(); //Animate when page loads //Lo comente porque me parece que queda mejor que no vibre cuando hace la animacion inicial.
	rollDice(); //Roll dice when page loads

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