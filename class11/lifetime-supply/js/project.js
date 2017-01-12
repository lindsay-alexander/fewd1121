// grab all interactive elements
var age = document.getElementById('age');
var max_age = document.getElementById('max-age');
var item = document.getElementById('item');
var num_per_day = document.getElementById('num-per-day');
var click_me = document.getElementById('click-me');
var solution = document.getElementById('solution');
var drink = document.getElementById('drink');



// store values data to be used when we start function
var myAge;
var myMaxAge;
var myIten;
var numPerDay;
var mySolution;
var myDrink;


// set up trigger
click_me.onclick = function(){
	myAge = age.value;
	myMaxAge = max_age.value;
	myItem = item.value;
	myNumPerDay = num_per_day.value;
	mySolution = (myMaxAge - myAge) * 365 * myNumPerDay;
	myDrink = item.value;
	// console.log(mySolution);
	solution.innerHTML = mySolution;
	drink.innerHTML = myDrink;
}