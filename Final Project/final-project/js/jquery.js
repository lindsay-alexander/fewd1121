$(document).ready(function() {
//begin doc ready

$(window).scroll(function(){

    // first thing

    if (isScrolledIntoView('#home')===true){
        $('body').css('background-color','white');
        $('#sidebar-wrapper').css('background-color','black');
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
        $('#sidebar-wrapper li a').css('color','black');
        $('#nav-2 a').css('color','#46808e');
        $('#sidebar-wrapper li a').css('font-weight','400');
        $('#nav-2 a').css('font-weight','700');

    } else {
        // something else
    }



    if (isScrolledIntoView('#experience')===true){
        $('body').css('background-color','#beb9b5');
        $('#sidebar-wrapper').css('background-color','#beb9b5');
        $('#sidebar-wrapper li a').css('color','black');
        $('#nav-1 a').css('color','black');
        $('#sidebar-wrapper li a').css('font-weight','400');
        $('#nav-1 a').css('font-weight','700');

    } else {
        // something else
    }



    if (isScrolledIntoView('#skillset')===true){
        $('body').css('background-color','#beb9b5');
        $('#sidebar-wrapper').css('background-color','#beb9b5');
        $('#sidebar-wrapper li a').css('color','black');
        $('#nav-1 a').css('color','black');
        $('#sidebar-wrapper li a').css('font-weight','400');
        $('#nav-1 a').css('font-weight','700');

    } else {
        // something else
    }



    if (isScrolledIntoView('#section-four')===true){
        $('body').css('background-color','#DFF7E8');
        $('#nav li a').css('color','#222');
        $('#nav-4 a').css('color','#A2E8BC');
        $('#nav li a').css('font-weight','400');
        $('#nav-4 a').css('font-weight','600');


    } else {
        // something else
    }



    if (isScrolledIntoView('#section-five')===true){
        $('body').css('background-color','#FFF2CC');
        $('#nav li a').css('color','#222');
        $('#nav-5 a').css('color','#FFDF80');
        $('#nav li a').css('font-weight','400');
        $('#nav-5 a').css('font-weight','600');
    } else {
        // something else
    }



    if (isScrolledIntoView('#section-six')===true){
        $('body').css('background-color','#FFE3CC');
        $('#nav li a').css('color','#000');
        $('#nav-6 a').css('color','#FFB980');
        $('#nav li a').css('font-weight','400');
        $('#nav-6 a').css('font-weight','600');
    } else {
        // something else
    }



    if (isScrolledIntoView('#section-seven')===true){
        $('body').css('background-color','#F4CDCD');
        $('#nav li a').css('color','#000');
        $('#nav-7 a').css('color','#DD6464');
        $('#nav li a').css('font-weight','400');
        $('#nav-7 a').css('font-weight','600');
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


//end doc ready
});