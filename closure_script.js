﻿var result;
var member;
var screenValue;
var remememberedMember;
var digits=document.getElementsByClassName('digitBtn');
var operators=document.getElementsByClassName('operatorBtn');
var currOperator;
var nextOperator;

//document.getElementById("b1").addEventListener("click", function(){ changeScreenValue(document.getElementById("b1").innerText); });
//document.getElementById("b2").addEventListener("click", function(){ changeScreenValue(document.getElementById("b2").innerText); });
//document.getElementById("b3").addEventListener("click", function(){ changeScreenValue(document.getElementById("b3").innerText); });
//document.getElementById("b4").addEventListener("click", function(){ changeScreenValue(document.getElementById("b4").innerText); });
//document.getElementById("b5").addEventListener("click", function(){ changeScreenValue(document.getElementById("b5").innerText); });
//document.getElementById("b6").addEventListener("click", function(){ changeScreenValue(document.getElementById("b6").innerText); });
//document.getElementById("b7").addEventListener("click", function(){ changeScreenValue(document.getElementById("b7").innerText); });
//document.getElementById("b8").addEventListener("click", function(){ changeScreenValue(document.getElementById("b8").innerText); });
//document.getElementById("b9").addEventListener("click", function(){ changeScreenValue(document.getElementById("b9").innerText); });
//document.getElementById("b0").addEventListener("click", function(){ changeScreenValue(document.getElementById("b0").innerText); });

//document.getElementById("bplus").addEventListener("click", function(){ getOperator(document.getElementById("bplus").innerText); });
//document.getElementById("bminus").addEventListener("click", function(){ getOperator(document.getElementById("bminus").innerText); });
//document.getElementById("bmultiply").addEventListener("click", function(){ getOperator(document.getElementById("bmultiply").innerText); });
//document.getElementById("bdivide").addEventListener("click", function(){ getOperator(document.getElementById("bdivide").innerText); });

for (i = 0; i < digits.length; i++) { 
	(function(){
		var id = i;
		digits[i].addEventListener("click", function(){changeScreenValue(digits[id].innerText); }, false);	
	}())
}

for (i = 0; i < operators.length; i++) { 
	(function(){
		var id = i;
		operators[i].addEventListener("click", function(){getOperator(operators[id].innerText); }, false);	
	}())
}

var addDigit = (function (numToAdd) {
    screenValue = 0;
        return {
		getRes:function () {
			
			if(numToAdd=='reset'){
				if(remememberedMember !== undefined&&remememberedMember !== "unset"){
					return screenValue;
				}
				else{					
					return screenValue=parseFloat(member);
				}
			}
			
			return screenValue==0 ? screenValue=numToAdd : screenValue+=numToAdd;
		},
		setRes: function(digit) {
		numToAdd = digit;
        }
	}
})();

function changeScreenValue(digit){
	addDigit.setRes(digit);
    document.getElementById("screen").innerHTML = addDigit.getRes();
	member=parseFloat(document.getElementById("screen").innerHTML);
	return member;
}
function getOperator(operator){
	if(remememberedMember === undefined&&remememberedMember === "unset"){
		remememberedMember=member;
		nextOperator=operator;
	}
	else{		
		currOperator=nextOperator;
		nextOperator=operator;
	switch (currOperator) {
    case "+":
        member+=remememberedMember;	
        break;
    case "-":
        member=remememberedMember-member;	
        break;
    case "/":
        member=remememberedMember/member;	
        break;
	case "*":
		member=remememberedMember*member;	
		break;
	}
	remememberedMember="unset";
	}
	resetScreen();
	remememberedMember=member;
	member=0;
	screenValue=0;
}
var resetScreen = function(){
	changeScreenValue('reset');
}