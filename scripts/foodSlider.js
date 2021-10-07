"use strict";

const foodSliderLeft = document.getElementById("foodSliderLeft");
const foodSliderRight = document.getElementById("foodSliderRight");
const foodSliderLeftM = document.getElementById("foodSliderLeftM");
const foodSliderRightM = document.getElementById("foodSliderRightM");
const foodSliderNav = document.getElementById("foodSliderNav");
const foodSlider = document.getElementById("foodSlider"); 

foodSliderLeft.addEventListener("click", moveFoodPic);
foodSliderRight.addEventListener("click", moveFoodPic);
foodSliderLeftM.addEventListener("click", moveFoodPic);
foodSliderRightM.addEventListener("click", moveFoodPic);
foodSliderNav.addEventListener("click", dotClick);


function dotClick (event) {
	if (event.target.classList.contains("slider__dot") && !event.target.classList.contains("slider__dot--active")) {
		let numNewActiveDot = changeNavItems (event.target);
		changePic(numNewActiveDot);
	};
}

function changeNavItems (item) {
	let currentActiveDot = foodSlider.querySelector(".slider__dot--active"); 
	currentActiveDot.classList.remove("slider__dot--active");
	let allDots = Array.from(foodSlider.querySelectorAll(".slider__dot"));
	let numNewActiveDot = allDots.indexOf(item);
	if (Number.isInteger(item)) {
		item = allDots[item];
	}; 
	item.classList.add("slider__dot--active");
	return numNewActiveDot; 
}


function changePic(numNewActivePic) {

	let allPic = Array.from(foodSlider.querySelectorAll(".foodSlider__slide"));
	let newActivePic = allPic[numNewActivePic];
	
	hiddenActivePic();
	сhangeRightPic(newActivePic, allPic[0]); 
	showNewActivePic(newActivePic);	
}

function showNewActivePic(newActivePic) {
	newActivePic.classList.add("foodSlider__slide--active");
	newActivePic.classList.remove("hidden");
}

function hiddenActivePic() {
	let activePic = foodSlider.querySelector(".foodSlider__slide--active");
	activePic.classList.remove("foodSlider__slide--active");
	activePic.classList.add("hidden");
	return activePic;
}

function сhangeRightPic(newActivePic, firstPic) {
	let rightPic = foodSlider.getElementsByClassName("foodSlider__slide--right")[0];
	rightPic.classList.remove("foodSlider__slide--right");
	rightPic.classList.add("hidden");
	rightPic = (newActivePic.nextElementSibling) ? newActivePic.nextElementSibling : firstPic; 
	rightPic.classList.remove("hidden");
	rightPic.classList.add("foodSlider__slide--right");
} 

function moveFoodPic (event, direction = "") {
	let newActivePic;
	let activePic = hiddenActivePic();
	let allPic = Array.from(foodSlider.querySelectorAll(".foodSlider__slide"));
	let firstPic = allPic[0];	
	if (event.currentTarget == foodSliderRight || event.currentTarget == foodSliderRightM || direction == "right") {
		newActivePic = (activePic.nextElementSibling) ? activePic.nextElementSibling : firstPic;
	} else {
		newActivePic = (activePic.previousElementSibling) ? activePic.previousElementSibling : allPic[allPic.length-1];	
	};

	сhangeRightPic(newActivePic, allPic[0]); 
	showNewActivePic(newActivePic);	
	changeNavItems(allPic.indexOf(newActivePic));
}
