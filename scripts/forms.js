"use strict";

let errorMessage;
let questionFormErrors = [];
let bookingFormErrors = [];
const bookingEmail = document.getElementById("bookingEmail"); 
const bookingAmount = document.getElementById("bookingAmount"); 
const questionEmail = document.getElementById("questionEmail"); 
const questionMessage = document.getElementById("questionMessage"); 
const newSum = document.getElementById("newSum"); 
const newPrice = document.getElementById("newPrice"); 
const questionForm = document.getElementById("questionForm"); 
const bookingForm = document.getElementById("bookingForm"); 

bookingEmail.addEventListener("blur", validationEmail);
bookingAmount.addEventListener("input", validationAmount);
questionEmail.addEventListener("blur", validationEmail);
questionMessage.addEventListener("blur", validationMessage);
questionMessage.addEventListener("input", currentAmount);

function validationEmail () {
	const re = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+/;

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
	el.classList.toggle("form__input--error", message); 
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