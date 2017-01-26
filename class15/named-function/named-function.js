// 1) below is an anonymous function

$('click_me').click(function(){

});


// 2) below is a named function

function myFunction(){

}
	// ^ this names the function

myFunction();			
	// ^ this triggers the function


$('click_me').click(myFunction);


// same thing with variables

var click_me = $('#click_me');

click_me.click(function(){

});
