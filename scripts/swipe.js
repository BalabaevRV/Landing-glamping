let distance;
let minDist = 60;  
let minTime = 20;
let evt;
let startTime;
let endTime;
let posX1;
let posX2;
let thisList;
let foodSliderList = document.getElementById("foodSliderList");

foodSliderList.addEventListener('mousedown', swipeStart);
foodSliderList.addEventListener('touchstart', swipeStart);
gallerySliderList.addEventListener("mousedown", swipeStart);
gallerySliderList.addEventListener("touchstart", swipeStart);
programList.addEventListener("mousedown", swipeStart);
programList.addEventListener("touchstart", swipeStart);


function getEvent() {
	return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  }

function swipeStart (event) {
	evt = getEvent();
	thisList = event.currentTarget;
	 let currentEl = evt.target;
	currentLi = (thisList == programList) ? currentEl.closest("dd"): currentEl.closest("li");
	if (!currentLi || !currentLi.className.includes("active")) {
		return;
	};
	currentLi.style.cursor = "grabbing";
  	foodSliderList.classList.add("foodSlider__slides--grabbing");
  	distance = 0;

  	evt.target.ondragstart = function() {
  		return false;
	};

	posInit = posX1 = evt.clientX;
  	posX1 = evt.clientX;
  	startTime = new Date().getTime();

  	document.addEventListener('touchmove', moveAt);
  	document.addEventListener('touchend', swipeEnd);
  	document.addEventListener('mousemove', moveAt);
  	document.addEventListener('mouseup', swipeEnd);
  
}

function swipeEnd () {
  	currentLi.style.cursor = "";
  	endTime = new Date().getTime();
  	var time = endTime - startTime;
  	document.removeEventListener('touchmove', moveAt);
    document.removeEventListener('mousemove', moveAt);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

  	if (Math.abs(distance) >= minDist && time >= minTime) {
		 let swipeDirection = (distance >= 0) ? "left" : "right"; 
		doSwipe(swipeDirection);
	};

  	currentLi.style.transform = "";
}

function moveAt() {
	evt = getEvent();
	posX2 = evt.clientX - posX1;
  	posX1 = evt.clientX;
    distance = distance + posX2;
	currentLi.style.transform ="translateX(" + distance + "px)";
}

function doSwipe (swipeDirection) {
	switch (thisList) {
		case foodSliderList:
			moveFoodPic ("", swipeDirection);
			break;
		case gallerySliderList:
			moveGalleryPic ("", swipeDirection);
			break;
		case programList:
			moveProgramDay ("", swipeDirection);
			break;	
		default:
			break;
	};
}	