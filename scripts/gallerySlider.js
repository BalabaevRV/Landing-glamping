"use strict";

GallerySliderLeft.addEventListener("click", moveGalleryPic);
GallerySliderRight.addEventListener("click", moveGalleryPic);

function moveGalleryPic (event, direction = "") {
	let activePic = gallerySlider.querySelector(".photosSlider__slide--active");
	let rightPic = activePic.nextElementSibling;
	let rightNextPic = rightPic.nextElementSibling;
	let leftPic = activePic.previousElementSibling;
	let leftPreviousPic = leftPic.previousElementSibling;
 	
	rightPic.classList.remove("photosSlider__slide--second");
	leftPic.classList.remove("photosSlider__slide--second");

	if (event.currentTarget == GallerySliderRight || direction == "right") {
		gallerySliderList.insertAdjacentElement("afterbegin", activePic);
		gallerySliderList.insertAdjacentElement("beforeend", leftPic);
		rightPic.classList.add("photosSlider__slide--active");
		leftPic.classList.add("photosSlider__slide--third");
	} else {
		gallerySliderList.insertAdjacentElement("beforeend", activePic);
		gallerySliderList.insertAdjacentElement("afterbegin", rightPic);
		rightPic.classList.add("photosSlider__slide--third");
		leftPic.classList.add("photosSlider__slide--active");
	}

	activePic.classList.remove("photosSlider__slide--active");
	activePic.classList.add("photosSlider__slide--third");

	rightNextPic.classList.remove("photosSlider__slide--third");
	rightNextPic.classList.add("photosSlider__slide--second");

	leftPreviousPic.classList.remove("photosSlider__slide--third");
	leftPreviousPic.classList.add("photosSlider__slide--second");
}
