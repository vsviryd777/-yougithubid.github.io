"use strict"


window.onload = function() {

   document.forms[0].onsubmit = function() {

	  document.getElementById("greeting").innerHTML= "Welcome to Cat Club in Charlotte.";
	  var first_name=document.getElementById("fName").value;
	  var middle_name=document.getElementById("mName").value;
	  var last_name=document.getElementById("lName").value;
	  var welcome=document.getElementById("greeting").textContent;
	  document.getElementById("greeting").innerHTML = welcome +" "+ first_name +" "+ middle_name + ". " + last_name;
	  var words = 140;

	  let firstNum = parseInt(document.getElementById("fNumEnt").value);
	  let secondNum = parseInt(document.getElementById("sNumEnt").value);
	  var expect = "";

	  for (var i = 1; i <= words; i++) {
		    if (fizz(i,firstNum)==true && (i,secondNum)==true) {
				expect += i + ". Cat<br>";
		}
			else if (fizz(i,firstNum) ==true) {
				expect +=  i + ". Club<br>";
		}
			else if (fizz(i,secondNum) ==true)
			 {
				expect +=  i + ". Charlotte<br>";
		}
			else {
				expect +=  i + ". Meow<br>";
		}
	  }

	  document.getElementById("displayR").innerHTML = expect;
	  return false;
   };
};
function fizz(firstNum,secondNum ) {
	if (firstNum % secondNum === 0) {
		return true;
	}
	else {
		return false;
	}
}
