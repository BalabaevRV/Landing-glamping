// // // "use strict";

// // // iconBurgerMenu.addEventListener("click", iconBurgerMenuClick);
// // // blackout.addEventListener("click", blackoutClick);
// // // blackout.addEventListener("transitionend", changeMobileMenuDisplay);
// // // mobileMenu.addEventListener("click", mainMenuClick);


// // // function iconBurgerMenuClick () {

// // // 	if (blackout.style.display == "none") {
// // // 		blackout.style.display = "block";
// // // 	} 

// // // 	if (mobileMenu.style.display == "none") {
// // // 		mobileMenu.style.display = "block";
// // // 	} 

// // // 	setTimeout(toggleMobileMenu, 10);
// // // 	if (!(mainPage.style.overflow == "hidden")) {
// // // 		mainPage.style.overflow = "hidden"
// // // 	} else {
// // // 		mainPage.style.overflow = "auto"	
// // // 	}
// // // }	

// // // function toggleMobileMenu() {
// // //   	blackout.classList.toggle("blackout--hidden");
// // //   	mobileMenu.classList.toggle("mobileMenu--hidden");
// // //   	iconBurgerMenu.classList.toggle("openMenu");
// // // }

// // // function changeMobileMenuDisplay () {
// // // 	 if (blackout.classList.contains("blackout--hidden")) {
// // //   		blackout.style.display = "none";
// // //   	}
// // //   	if (mobileMenu.classList.contains("mobileMenu--hidden")) {
// // //   		mobileMenu.style.display = "none";	
// // //   	}
// // // }

// // // function blackoutClick () {
// // // 	if (!(mobileMenu.classList.contains("mobileMenu--hidden"))) {
// // // 		iconBurgerMenuClick ();	
// // // 	}
// // // }
	
// // // function mainMenuClick(event) {
// // // 	if (event.target.tagName == "A") {
// // // 		iconBurgerMenuClick();
// // // 	}
// // // }

// // // // "use strict";

// // // // messagePopUp.addEventListener("input", messagePopUpChange);
// // // // questionButton.addEventListener("click", actionClick);
// // // // buttonSubmitQuestion.addEventListener("click", actionClick);

// // // // let thisPopUp;
// // // // let thisIsQuestion;
// // // // let textPopUp;

// // // // function messagePopUpChange (event) {
// // // // 	maxMessage.innerHTML = this.value.length + "/" + "255";
// // // // }

// // // // function closePopUpClick () {
// // // // 	actionClick();	
// // // // }

// // // // function actionClick (event) {

// // // // 	let textPopUp = "Данный раздел еще не готов";
// // // // 	thisIsQuestion = false;
	
// // // // 	// if (event && !(event.target == closePopUp || event.target == closePopUp2)) {
// // // // 	// 	thisPopUp = popUp;
// // // // 	// }	

// // // // 	if (event && (event.target.tagName == "A" ||  event.target == buttonBooking || event.target == buttonSubmitQuestion)) {
// // // // 		event.preventDefault();	
// // // // 		if (event.target == buttonBooking) {
// // // // 			textPopUp = "Спасибо за заявку! Вам на почту отправлены данные для оплаты";	
// // // // 		}
// // // // 			if (event.target == buttonSubmitQuestion) {
// // // // 			textPopUp = "Мы получили ваш вопрос, скоро дадим ответ!";
// // // // 			thisIsQuestion = true;
// // // // 			thisPopUp = popUp2;
// // // // 		}
// // // // 		if (event.target == questionButton) { 
// // // // 			thisPopUp = popUp2;
// // // // 		}
// // // // 	}


// // // // 	paragraphPopUp.innerHTML = textPopUp; 

// // // // 	if (darker.style.display == "none") {
// // // // 		darker.style.display = "block";
// // // // 	} 

// // // // 	if (thisPopUp.style.display == "none") {
// // // // 		thisPopUp.style.display = "block";
// // // // 	} 

// // // // 	setTimeout(togglePopUp, 10);

// // // // 	if (!(mainPage.style.overflow == "hidden")) {
// // // // 		mainPage.style.overflow = "hidden"
// // // // 	} else {
// // // // 		mainPage.style.overflow = "auto"	
// // // // 	}
// // // // }	

// // // // function togglePopUp() {
// // // // 	thisPopUp.classList.toggle("popUp--hidden");
// // // // 	if (thisIsQuestion) {
// // // // 		popUp.classList.toggle("popUp--hidden");
// // // // 		thisPopUp.style.display = "none";
// // // // 		popUp.style.display = "block";
// // // // 	} else {
// // // //   		darker.classList.toggle("darker--hidden");
// // // //   	}
// // // //   	//iconBurgerMenu.classList.toggle("openMenu");
// // // // }

// // // // function changePopUpDisplay () {
// // // // 	 if (darker.classList.contains("darker--hidden")) {
// // // //   		darker.style.display = "none";
// // // //   	}
// // // //   	if (thisPopUp.classList.contains("popUp--hidden")) {
// // // //   		thisPopUp.style.display = "none";	
// // // //   	}
// // // // }

// // // // function darkerClick () {
// // // // 	if (!(thisPopUp.classList.contains("popUp--hidden"))) {
// // // // 		actionClick ();	
// // // // 	}
// // // // }


// // "use strict";

// // GallerySliderLeft.addEventListener("click", moveGalleryPic);
// // GallerySliderRight.addEventListener("click", moveGalleryPic);
// // GalleryNav.addEventListener("click", dotClick);

// // function moveGalleryPic (event) {
// // 	let activePic = gallerySlider.querySelector(".photosSlider__slide--active");
// // 	let rightPic = activePic.nextElementSibling;
// // 	let rightNextPic = rightPic.nextElementSibling;
// // 	let leftPic = activePic.previousElementSibling;
// // 	let leftPreviousPic = leftPic.previousElementSibling;
 	
// // 	if (event.currentTarget ==GallerySliderRight) {
// // 		gallerySliderList.insertAdjacentElement("afterbegin", activePic);
// // 		gallerySliderList.insertAdjacentElement("beforeend", leftPic);
// // 		rightPic.classList.remove("photosSlider__slide--second");
// // 		rightPic.classList.add("photosSlider__slide--active");
// // 		leftPic.classList.remove("photosSlider__slide--second");
// // 		leftPic.classList.add("photosSlider__slide--third");
// // 		//moveDot("right");
// // 	} else {
// // 		gallerySliderList.insertAdjacentElement("beforeend", activePic);
// // 		gallerySliderList.insertAdjacentElement("afterbegin", rightPic);
// // 		rightPic.classList.remove("photosSlider__slide--second");
// // 		rightPic.classList.add("photosSlider__slide--third");
// // 		leftPic.classList.remove("photosSlider__slide--second");
// // 		leftPic.classList.add("photosSlider__slide--active");
// // 		//moveDot("left");
// // 	}

// // 	activePic.classList.remove("photosSlider__slide--active");
// // 	activePic.classList.add("photosSlider__slide--third");


// // 	rightNextPic.classList.remove("photosSlider__slide--third");
// // 	rightNextPic.classList.add("photosSlider__slide--second");


// // 	leftPreviousPic.classList.remove("photosSlider__slide--third");
// // 	leftPreviousPic.classList.add("photosSlider__slide--second");
// // }

// // function moveDot (directionMove) {
// // 	let activeDot = gallerySlider.querySelector(".slider__dot--active");
// // 	let nextDot;
// // 	if (directionMove == "right") {
// // 		nextDot = activeDot.nextElementSibling;
// // 	 	if(nextDot == null || nextDot.classList.contains("slider__arrow")) {
// // 	 		nextDot = gallerySlider.querySelector(".slider__dot") 
// // 	 	}
// // 	} else {
// // 		nextDot = activeDot.previousElementSibling;
// // 		if(nextDot == null || nextDot.classList.contains("slider__arrow")) {
// // 	 		let AllDot = gallerySlider.getElementsByClassName("slider__dot"); 
// // 	 		nextDot = AllDot[AllDot.length-1];
// // 	 	}
// // 	}

// // 	activeDot.classList.remove("slider__dot--active");
// // 	nextDot.classList.add("slider__dot--active");
// // } 

// // function dotClick () {
// // 	if (event.target.classList.contains("slider__dot") && !event.target.classList.contains("slider__dot--active")) {
// // 		let currentActiveDot = gallerySlider.querySelector(".slider__dot--active"); 
// // 		currentActiveDot.classList.remove("slider__dot--active");

// // 		let allDots = gallerySlider.getElementsByClassName("slider__dot");
// // 		let allArray = Array.from(allDots);
// // 		let numActiveElement = allArray.indexOf(event.target);

// // 		let allSliders = gallerySlider.getElementsByClassName("photosSlider__slide");
// // 		let allSlidersArray = Array.from(allSliders);

// // 		changePicGallery(numActiveElement);

// // 		event.target.classList.add("slider__dot--active");
// // 	}
// // }

// // function changePicGallery(numEl) {
// // // 	let activePic = gallerySlider.querySelector(".photosSlider__slide--active");
// // // 	activePic.classList.remove("photosSlider__slide--active");
// // // 	// activePic.classList.add("foodSlider__slide--hidden");

// // // 	let allSliders = gallerySlider.getElementsByClassName("photosSlider__slide");
// // // 	let allSlidersArray = Array.from(allSliders);
// // // 	let newActiveSlide = allSlidersArray[numActiveElement];
// // // 	newActiveSlide.classList.add("photosSlider__slide--active");
// // // 	newActiveSlide.classList.remove("foodSlider__slide--hidden");

// // // 	let rightPic = foodSlider.querySelector(".foodSlider__slide--right");
// // // 	rightPic.classList.remove("foodSlider__slide--right");
// // // 	rightPic.classList.add("foodSlider__slide--hidden");


// // // 	let rightSlide = newActiveSlide.nextElementSibling;
// // // 	if (rightSlide == null) {
// // // 		rightSlide = allSlidersArray[0];
// // // 	}
// // // 	rightSlide.classList.add("foodSlider__slide--right");
// // // 	rightSlide.classList.remove("foodSlider__slide--hidden");
// // }


// foodSliderLeft.addEventListener("click", moveFoodPic);
// foodSliderRight.addEventListener("click", moveFoodPic);
// foodSliderLeftM.addEventListener("click", moveFoodPic);
// foodSliderRightM.addEventListener("click", moveFoodPic);
// foodSliderNav.addEventListener("click", dotClick);


// function dotClick (event) {
// 	if (event.target.classList.contains("slider__dot") && !event.target.classList.contains("slider__dot--active")) {
// 		let currentActiveDot = foodSlider.querySelector(".slider__dot--active"); 
// 		currentActiveDot.classList.remove("slider__dot--active");

// 		let allDots = foodSlider.getElementsByClassName("slider__dot");
// 		let allArray = Array.from(allDots);
// 		let numActiveElement = allArray.indexOf(event.target);

// 		let allSliders = foodSlider.getElementsByClassName("foodSlider__slide");
// 		let allSlidersArray = Array.from(allSliders);

// 		changePic(numActiveElement);

// 		event.target.classList.add("slider__dot--active");
// 	}
// }


// function changePic(numActiveElement) {
// 	let activePic = foodSlider.querySelector(".foodSlider__slide--active");
// 	activePic.classList.remove("foodSlider__slide--active");
// 	activePic.classList.add("foodSlider__slide--hidden");

// 	let rightPic = foodSlider.querySelector(".foodSlider__slide--right");
// 	rightPic.classList.remove("foodSlider__slide--right");
// 	rightPic.classList.add("foodSlider__slide--hidden");

// 	let allSliders = foodSlider.getElementsByClassName("foodSlider__slide");
// 	let allSlidersArray = Array.from(allSliders);
// 	let newActiveSlide = allSlidersArray[numActiveElement];
// 	newActiveSlide.classList.add("foodSlider__slide--active");
// 	newActiveSlide.classList.remove("foodSlider__slide--hidden");
// 	let rightSlide = newActiveSlide.nextElementSibling;
// 	if (rightSlide == null) {
// 		rightSlide = allSlidersArray[0];
// 	}
// 	rightSlide.classList.add("foodSlider__slide--right");
// 	rightSlide.classList.remove("foodSlider__slide--hidden");
// }

// function moveFoodPic (event) {
// 	let activePic = foodSlider.querySelector(".foodSlider__slide--active");
// 	let rightPic = activePic.nextElementSibling;

// 	if (rightPic === null) {
// 		rightPic = foodSlider.getElementsByClassName("foodSlider__slide--right")[0];
// 	}

// 	let nextPic;
// 	if (event.currentTarget == foodSliderRight || event.currentTarget == foodSliderRightM) {
// 		nextPic = rightPic.nextElementSibling;
// 	} else {
// 		nextPic = activePic.previousElementSibling;
// 	}
	
// 	if (nextPic === null) {
// 		if (event.currentTarget == foodSliderRight || event.currentTarget == foodSliderRightM) {
// 			nextPic = foodSlider.getElementsByClassName("foodSlider__slide--hidden")[0];
// 		} else {
// 			let allHiddenSlides = foodSlider.getElementsByClassName("foodSlider__slide--hidden");
// 			nextPic = allHiddenSlides[allHiddenSlides.length-1];
// 		}
// 	}		

// 	activePic.classList.remove("foodSlider__slide--active");
// 	rightPic.classList.remove("foodSlider__slide--right");
// 	nextPic.classList.remove("foodSlider__slide--hidden");

// 	if (event.currentTarget == foodSliderRight || event.currentTarget == foodSliderRightM) {	
// 		activePic.classList.add("foodSlider__slide--hidden");
// 		rightPic.classList.add("foodSlider__slide--active");
// 		nextPic.classList.add("foodSlider__slide--right");
// 	} else {
// 		activePic.classList.add("foodSlider__slide--right");
// 		rightPic.classList.add("foodSlider__slide--hidden");
// 		nextPic.classList.add("foodSlider__slide--active");	
// 	}
// 	let allSliders = foodSlider.getElementsByClassName("foodSlider__slide");
// 	let allSlidersArray = Array.from(allSliders);
// 	let numActiveElement = allSlidersArray.indexOf(document.querySelector(".foodSlider__slide--active"));
// 	changeNavItems(numActiveElement);

// }

// function changeNavItems (numItem) {
// 	let currentActiveDot = foodSlider.querySelector(".slider__dot--active"); 
// 	currentActiveDot.classList.remove("slider__dot--active");

// 	let allDots = foodSlider.getElementsByClassName("slider__dot");
// 	let allArray = Array.from(allDots);

// 	let newActiveDot = allArray[numItem];
// 	newActiveDot.classList.add("slider__dot--active");
// }