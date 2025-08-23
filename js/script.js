//elements
const loginBtn = document.querySelector("#btn-login");
const inputNumber = document.querySelector(".input-number");
const inputPin = document.querySelector(".input-pin");
const currentBalance = document.querySelector(".current-balance");

const selectBank = document.querySelector(".select");
const inputAddAccount = document.querySelector(".input-add-account");
const inputAddAmount = document.querySelector(".input-add-amount");
const inputAddPin = document.querySelector(".input-add-pin");
const btnAddMoney = document.querySelector("#btn-add-money");

const inputWithdrawAccount = document.querySelector(".input-withdraw-account");
const inputWithdrawAmount = document.querySelector(".input-withdraw-amount");
const inputWithdrawPin = document.querySelector(".input-withdraw-pin");
const btnWithdrawMoney = document.querySelector("#btn-withdraw-money");

const inputTransferAccount = document.querySelector(".input-transfer-account");
const inputTransferAmount = document.querySelector(".input-transfer-amount");
const inputTransferPin = document.querySelector(".input-transfer-pin");
const btnTransferMoney = document.querySelector("#btn-transfer-money");

const inputPayAccount = document.querySelector(".input-pay-account");
const inputPayAmount = document.querySelector(".input-pay-amount");
const inputPayPin = document.querySelector(".input-pay-pin");
const btnPayMoney = document.querySelector("#btn-pay-money");

const tabContainer = document.querySelector(".tab-container");
const tabBtns = document.querySelectorAll(".btns__tab");
const tabDetails = document.querySelectorAll(".tab-detail");

//variables
const mobileNumber = 12345678901;
const pinNumber = 1234;

//clear input fields
const clearInputFields = function (...inputs) {
  inputs.forEach((input) => (input.value = ""));
};

//for empty fields
const forEmptyFields = function (...inputs) {
  const field = inputs.find((input) => input.value.trim() === "");
  if (field) {
    //if any of the field is empty
    alert("Please fill up all the information");
  } //all fields filled
  else return true;
};

//to get the inner text
const getInnerValue = function (input) {
  return parseFloat(input.innerText);
};

//to set inner text
const setInnerText = function (value) {
  currentBalance.innerText = value.toFixed(2);
};

//to get the input amount value
const getInputAmount = function (input) {
  return parseFloat(input.value);
};

//to get the input pin value
const getInputPin = function (input) {
  return parseInt(input.value);
};
