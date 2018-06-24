function myFunction() {
	var x = document.getElementById(myImg).src;
}

// #4: creating an array with 5 numbers with 2 decimal places
var myNumArr = [3.14, 11.23, 30.35, 20.12, 5.75];
var myNewNumArr = [];

//#5: looping through the array, 
	//rounding all numbers to nearest integer and, 
	//adding to a new array
	//m for michael (first name :D)
for (i=0; i < myNumArr.length; i++) {
	var m = Math.round(myNumArr[i]);
	myNewNumArr.push(m);
}
console.log(myNewNumArr);

//#6: create a function that produces random numbers (1-100)
	//and add each number to an array of numbers. 
	//g for george (middle name :D)
var myNumArrDos = [];
function randoNums() {
	var g = Math.ceil( Math.random() * 100 );
	myNumArrDos.push(g);
};
for (var i=0; i < 10; i++) {
	randoNums();
};
console.log(myNumArrDos);

//#7: function that stores the following info:
  // whole date, current hour, current minute, current second
function myDate () {
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds= today.getSeconds();

//#8: create a variable, inside the fucntion, that will display in 'hh:mm:ss' format
var currTime = hours + ":" + minutes + ":" + seconds;
console.log(currTime)

//#9: create a variable for current month, day, year
var day = today.getDay();
var month= today.getMonth() + 1;
var year= today.getFullYear() - 2000;

//#10: create a variable that wil display in the hh:mm:ss: dd/mm/yy format
var currDate = month + "/" + day + "/" + year;
console.log(currDate);

//#11: change function to print time & date onto document
document.body.innerHTML = currTime + " " + currDate;

//#12: run time/date function every second; using "setTimeout"
setTimeout(function() {
	myDate();
}, 1000)

}

myDate();