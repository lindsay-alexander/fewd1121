// Program Flow
//
// 1: User clicks on #clickme (this element)
// 2: Increment the value of #click-num by one for each click
// (eg if clicknum is 0, make it 1; it clicknum is 10, make it 11; etc.)
// 3: If the number of clicks == 5, change the background-color of <body> to red
// 4: Else if the number of clicks == 10, change the background-color of <body> to green
// 5: Else if the number of clicks == 15, change the background-color of <body> to blue
// 6: Else, change the background-color of <body> to black

var clickCount = 0;
var clickMe = $('#clickme');
var clickNum = $('#click-num');
var body = $('body');

$(document).ready(function () {

		clickMe.click(function(){
		  clickCount++;

		clickNum.html(clickCount);

		if(clickCount===5){
    		$('body').css('backgroundColor', 'red');
		}else if(clickCount===10){
    		$('body').css('backgroundColor', 'green');
		}else if(clickCount===15){
    		$('body').css('backgroundColor', 'blue');
   		}else if(clickCount===20){
    		$('body').css('backgroundColor', '#006621');
		}else{
    		$('body').css('backgroundColor', 'black');
		}


	});
});