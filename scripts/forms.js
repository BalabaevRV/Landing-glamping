"use strict";

let errorMessage;
let questionFormErrors = [];
let bookingFormErrors = [];

bookingEmail.addEventListener("blur", validationEmail);
bookingAmount.addEventListener("input", validationAmount);
messageEmail.addEventListener("blur", validationEmail);
messageText.addEventListener("blur", validationMessage);
messageText.addEventListener("input", currentAmount);

function validationEmail () {
	let re = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+/;

	let errorArray = arrayByForm(this.closest("form"));

	if (this.value == "") {
		addItemToErrorArray(this, errorArray);
		toggleError (this, this.nextElementSibling, "Укажите email");
	} else if (!re.test(this.value)) {
		addItemToErrorArray(this, errorArray);
		toggleError (this ,this.nextElementSibling, "Укажите корректный email"); 
	}  else {
		toggleError (this ,this.nextElementSibling); 
		delItemFromErroArray(this, errorArray);
	};
}

function arrayByForm (thisForm) {
	if (thisForm == questionForm) {
		return questionFormErrors;
	} else if (thisForm == bookingForm) {
		return bookingFormErrors;
	};	
}

function validationMessage () {

	let errorArray = arrayByForm(this.closest("form"));
	console.log(errorArray);
	if (this.value.length == 0) {
		addItemToErrorArray(this, errorArray);
		toggleError (this, this.nextElementSibling, "Напишите вопрос");
	} else {
		toggleError (this, this.nextElementSibling);
		delItemFromErroArray(this, errorArray);
	};
}

function validationAmount (event) {

	let errorArray = arrayByForm(this.closest("form"));

	if (this.value <= 0 || this.value >= 99) {
		addItemToErrorArray(this, errorArray);
		toggleError (this, this.parentElement.nextElementSibling, "Укажите количество от 1 до 99");
		bookingAmount.removeEventListener("blur", changeSum);
	} else {
		toggleError (this, this.parentElement.nextElementSibling);
		delItemFromErroArray(this, errorArray);	
		bookingAmount.addEventListener("blur", changeSum);
	};
} 

function toggleError (el, messageEl, message = "") {
	el.classList.toggle("formBooking__input--error", message); 
	messageEl.classList.toggle("hidden", !message);
	messageEl.innerHTML = message;
}

function delItemFromErroArray (item, errorArray) {
	let numItem = errorArray.indexOf(item);
	if (numItem != -1) {
		errorArray.splice(numItem, 1);
	};	
}

function addItemToErrorArray (item, errorArray) {
	if (!errorArray.includes(item)) {
		errorArray.push(item);	
	};  
} 


function changeSum() {
	let oldSum = 16000;
	oldSum = 16000 * bookingAmount.value;
	oldPrice.innerHTML = oldSum; 
	let newSum;
	newPrice.innerHTML = Math.round(oldSum*0.7);
}

function currentAmount() {
	amountMessage.innerHTML = this.value.length;
}