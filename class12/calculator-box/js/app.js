// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()

$(document).ready(function(){

	var total = 0

	// when user clicks div#a10, add 10 to total

	$('#a10').click(function(){
		total = total + 10;
		$('#out').html(total);
	});

	// when user clicks div#a20, add 20 to total

	$('#a20').click(function(){
		total = total + 20;
		$('#out').html(total);
	});

	// when user clicks div#a30, add 30 to total

	$('#a30').click(function(){
		total = total + 30;
		$('#out').html(total);
	});

	// when user clicks div#red, make background red

	$('#red').click(function(){
		$('#out').css('background-color' , 'red');
	});

	// when user clicks div#blue, make background blue

	$('#blue').click(function(){
		$('#out').css('background-color' , 'blue');
	});

	// when user clicks div#n10, subtract 10 from total
	
	$('#n10').click(function(){
		total = total - 10;
		$('#out').html(total);
	});

	// when user clicks div#n20, subtract 20 from total
	
	$('#n20').click(function(){
		total = total - 20;
		$('#out').html(total);
	});

	// when user clicks div#n30, subtract 30 from total
	
	$('#n30').click(function(){
		total = total - 30;
		$('#out').html(total);
	});

});