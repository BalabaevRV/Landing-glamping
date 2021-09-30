"use strict";

programList.addEventListener("click", moveProgramDay);
programNavigation.addEventListener("click", moveProgramDay);
currentDay.addEventListener("click", currentDay);

let programArrowRight = document.getElementById("programArrowRight"); 
let programArrowLeft = document.getElementById("programArrowLeft"); 

function moveProgramDay (event, direction = "") {
	let arrow = (event) ? event.target.closest(".slider__arrow") : "";
	let newActiveDay;
	let activeDay = programList.querySelector(".program__day--active");

	if (arrow == programArrowRight || direction === "right") {
		let allDays = Array.from(programList.querySelectorAll(".program__day"));
		newActiveDay =allDays[allDays.indexOf(activeDay)+1];
	} else if (arrow == programArrowLeft || direction === "left")  {
		let allDays = Array.from(programList.querySelectorAll(".program__day"));
		newActiveDay =allDays[allDays.indexOf(activeDay)-1];
	} else {
		newActiveDay = event.target.closest(".program__day");
	};

	if (!newActiveDay) {
		return;
	};


	let activeDayWrap = programList.querySelector(".program__wrap--active");
	activeDayWrap.classList.remove("program__wrap--active");

	activeDay.classList.remove("program__day--active");

	let activeDayContent = programList.querySelector(".program__content--active");
	activeDayContent.classList.remove("program__content--active");	

	newActiveDay.classList.add("program__day--active");
	newActiveDay.parentElement.classList.add("program__wrap--active");
	newActiveDay.nextElementSibling.classList.add("program__content--active");
	
	let numDay = newActiveDay.innerHTML.slice(-1);
	currentDay.innerHTML = "День " + numDay + "/5";
	
}