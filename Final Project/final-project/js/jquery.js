$(document).ready(function() {
//begin doc ready

$(window).scroll(function(){

    // first thing

    if (isScrolledIntoView('#home')===true){
        $('body').css('background-color','#222');
        $('#sidebar-wrapper').css('background-color','#222');
        $('#sidebar-wrapper li a').css('color','white');
        $('#nav-1 a').css('color','white');
        $('#sidebar-wrapper li a').css('font-weight','400');
        $('#nav-1 a').css('font-weight','700');

    } else {
        // something else
    }


    if (isScrolledIntoView('#education')===true){
        $('body').css('background-color','#cbdfeb');
        $('#sidebar-wrapper').css('background-color','#cbdfeb');
        $('#sidebar-wrapper li a').css('color','#46808e');
        $('#nav-2 a').css('color','#46808e');
        $('#sidebar-wrapper li a').css('font-weight','400');
        $('#sidebar-wrapper li a').css('text-transform','none');
        $('#nav-2 a').css('font-weight','700');
        $('#nav-2 a').css('text-transform','uppercase');


    } else {
        // something else
    }



    if (isScrolledIntoView('#experience')===true){
        $('body').css('background-color','#525564');
        $('#sidebar-wrapper').css('background-color','#525564');
        $('#sidebar-wrapper li a').css('color','#d4d5d9');
        $('#nav-3 a').css('color','#d4d5d9');
        $('#sidebar-wrapper li a').css('font-weight','400');
        $('#sidebar-wrapper li a').css('text-transform','none');
        $('#nav-3 a').css('font-weight','700');
        $('#nav-3 a').css('text-transform','uppercase');


    } else {
        // something else
    }



    if (isScrolledIntoView('#skillset')===true){
        $('body').css('background-color','#beb9b5');
        $('#sidebar-wrapper').css('background-color','#beb9b5');
        $('#sidebar-wrapper li a').css('color','#4a4740');
        $('#nav-4 a').css('color','#4a4740');
        $('#sidebar-wrapper li a').css('font-weight','400');
        $('#sidebar-wrapper li a').css('text-transform','none');
        $('#nav-4 a').css('font-weight','700');
        $('#nav-4 a').css('text-transform','uppercase');

    } else {
        // something else
    }


    if (isScrolledIntoView('#location')===true){
        $('body').css('background-color','#c25b56');
        $('#sidebar-wrapper').css('background-color','#c25b56');
        $('#sidebar-wrapper li a').css('color','#f8cfc3');
        $('#nav-5 a').css('color','#f8cfc3');
        $('#sidebar-wrapper li a').css('font-weight','400');
        $('#sidebar-wrapper li a').css('text-transform','none');
        $('#nav-5 a').css('font-weight','700');
        $('#nav-5 a').css('text-transform','uppercase');

    } else {
        // something else
    }

    if (isScrolledIntoView('#contact')===true){
        $('body').css('background-color','#758390');
        $('#sidebar-wrapper').css('background-color','#758390');
        $('#sidebar-wrapper li a').css('color','white');
        $('#nav-6 a').css('color','white');
        $('#sidebar-wrapper li a').css('font-weight','400');
        $('#sidebar-wrapper li a').css('text-transform','none');
        $('#nav-6 a').css('font-weight','700');
        $('#nav-6 a').css('text-transform','uppercase');

    } else {
        // something else
    }

});







function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


// form jquery

$('form').submit(function (){
    // do something on form submit

});


//end doc ready
});