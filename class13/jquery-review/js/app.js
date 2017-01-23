$(document).ready(function(){
   
	$('#first').click(function(){
	    $(this).css('background', 'yellow');
	    $('#first').text('TEST!')
	    $('#first').animate({height:'500px'});
	    $('#first').animate({width:'500px'});
	});

	$('#second').click(function(){
	    $(this).css('background', 'purple');
	    $('#second').text('ANOTHA ONE!')
	    $(this).animate({height:'500px'});
	    $(this).animate({width:'500px'});
	});

	$('#bonus').click(function(){
	    $(this).animate({width:'100%'});
	});

	$('#clickMe').click(function(){
	    $(this).hide('slow');
	});

}); 