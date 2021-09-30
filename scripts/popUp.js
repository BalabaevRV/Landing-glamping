"use strict";

let thisPopUp;
let animationFunction;
let thisIsQuestion;
let textPopUp;
let hiddenBlackout = true;
let errorValidation = [];
let mobileMenu = document.getElementById("mobileMenu");  
let closePopUp = document.getElementById("closePopUp"); 
let closePopUpForm = document.getElementById("closePopUpForm"); 
let blackout = document.getElementById("blackout"); 
let buttonGallery = document.getElementById("buttonGallery"); 
let buttonBooking = document.getElementById("buttonBooking"); 
let questionButton = document.getElementById("questionButton"); 
let closeButtonPopUp = document.getElementById("closeButtonPopUp"); 
let buttonSubmitQuestion = document.getElementById("buttonSubmitQuestion"); 
let privacyPolicyFooter = document.getElementById("privacyPolicyFooter"); 
let privacyPolicyForm = document.getElementById("privacyPolicyForm"); 
let mainPage = document.getElementById("mainPage"); 
let paragraphPopUp = document.getElementById("paragraphPopUp"); 

mobileMenu.addEventListener("click", mainMenuClick);
iconBurgerMenu.addEventListener("click", togglePopUp);
closePopUp.addEventListener("click", togglePopUp);
closePopUpForm.addEventListener("click", togglePopUp);
blackout.addEventListener("transitionend", changePopUpDisplay);
blackout.addEventListener("click", togglePopUp);
buttonGallery.addEventListener("click", togglePopUp);
buttonBooking.addEventListener("click", togglePopUp);
questionButton.addEventListener("click", togglePopUp);
closeButtonPopUp.addEventListener("click", togglePopUp);
buttonSubmitQuestion.addEventListener("click", togglePopUp);
privacyPolicyFooter.addEventListener("click", togglePopUp);
privacyPolicyForm.addEventListener("click", togglePopUp);

//Запуск отображения popUp (или скрытие)
function togglePopUp (event) {

	event.preventDefault();
	toggleDisplayPopUp (event);
	if (hiddenBlackout) {	
		toggleDisplayBlackout ();
	};

}	

//Отображает или скрывает затемнение фона
function toggleDisplayBlackout () {

	if (!(mainPage.style.overflow == "hidden")) {
		mainPage.style.overflow = "hidden"
	} else {
		mainPage.style.overflow = "auto"	
	};

	if (blackout.style.display == "none") {
		blackout.style.display = "block";
	};

	setTimeout(() => blackout.classList.toggle("blackout--hidden"), 10);	

}

//Запускает анимацию появления/исчезновения меню и изменения иконки бургера
function toggleHiddenMobileMenu() {
  	mobileMenu.classList.toggle("mobileMenu--hidden");
  	iconBurgerMenu.classList.toggle("openMenu");
}

//Запускает анимацию появления/исчезновения popUp 
function toggleHiddenPopUp() {
	thisPopUp.classList.toggle("popUp--hidden");
}

//Запускает скытие формы с вопросом и отображения popUp с сообщением об успешной отправки вопроса
function toggleHiddenPopUpAndShowForm() {
  	thisPopUp.classList.toggle("popUp--hidden");
  	thisPopUp = popUp; 
  	thisPopUp.style.display = "flex";
  	setTimeout (() => {
  		thisPopUp.classList.toggle("popUp--hidden");
  		popUpForm.style.display = "none";
  		animationFunction = toggleHiddenPopUp;
 	}	, 300);
}

//опеределяет с какой формой нужно взаимодействовать
function toggleDisplayPopUp (event) {
	hiddenBlackout = true;
	if (!event.currentTarget.className.includes("popUp__close") && !(event.currentTarget == blackout)) { 
		switch (event.currentTarget) {
			case iconBurgerMenu:
				thisPopUp = mobileMenu; 
				animationFunction = toggleHiddenMobileMenu;
				break;
			case buttonBooking:	
				if (validationForm(event.currentTarget.closest("form"))) {
					thisPopUp = popUp;
					paragraphPopUp.innerHTML = "Спасибо за заявку! Вам на почту отправлены данные для оплаты"; 
					animationFunction = toggleHiddenPopUp;
				} else {
					hiddenBlackout = false;
					return;
				};
				break;	
			case buttonGallery:
				thisPopUp = popUp;
				paragraphPopUp.innerHTML = "Данный раздел еще не готов";
				animationFunction = toggleHiddenPopUp;
				break;
			case questionButton:
				thisPopUp = popUpForm;
				animationFunction = toggleHiddenPopUp;
				break;	
			case buttonSubmitQuestion:
				hiddenBlackout = false;
				if (validationForm(event.currentTarget.closest("form"))) {
					paragraphPopUp.innerHTML = "Мы получили ваш вопрос, скоро дадим ответ!";
					animationFunction = toggleHiddenPopUpAndShowForm;
					setTimeout(animationFunction, 10);
					return;
				};
				return;						
			default:
				thisPopUp = popUp;
				paragraphPopUp.innerHTML = "Данный раздел еще не готов";
				animationFunction = toggleHiddenPopUp;
		};
	}

	if (thisPopUp.style.display == "none") {
		thisPopUp.style.display = "flex";
	}; 

	setTimeout(animationFunction, 10);
}


//После скрытия затемнения убирает PopUp
function changePopUpDisplay () {
  	if (thisPopUp.className.includes("hidden")) {
  		thisPopUp.style.display = "none";
  		blackout.style.display = "none";	
  	};  
}

//Скрывает меню при нажатии на якорную ссылку
function mainMenuClick(event) {
	if (event.target.tagName == "A") {
		togglePopUp();
	};
}

//Проверяет наличие ошибок при заполнении формы
function validationForm(form) {
	if (form == bookingForm) {
		validationEmail.call(bookingEmail);
		errorValidation = bookingFormErrors;
	} else if (form == questionForm) {
		validationEmail.call(messageEmail);
		validationMessage.call(messageText);
		errorValidation = questionFormErrors;
	};

	if (errorValidation.length != 0) {
		return false;
	};

	return true;
}