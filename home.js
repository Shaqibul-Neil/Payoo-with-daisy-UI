//add money Section functionality
//elements
const currentBalance = document.querySelector(".current-balance");
const selectBank = document.querySelector(".select");
const inputAddAccount = document.querySelector(".input-add-account");
const inputAddAmount = document.querySelector(".input-add-amount");
const inputAddPin = document.querySelector(".input-add-pin");
const btnAddMoney = document.querySelector("#btn-add-money");

btnAddMoney.addEventListener("click", function (e) {
  e.preventDefault();

  //for empty fields
  if (!inputAddAccount.value || !inputAddAmount.value || !inputAddPin.value) {
    alert(`Please fill up all the information`);
    return;
  }
  //account number less than 11
  if (inputAddAccount.value.length < 11) {
    alert(`Please provide valid account number`);
    return;
  }
  //pin doesn't match
  if (parseInt(inputAddPin.value) !== pinNumber) {
    alert(`Please provide a valid pin number`);
    return;
  }
  //amount <=0
  if (
    parseFloat(inputAddAmount.value) <= 0 ||
    isNaN(parseFloat(inputAddAmount.value))
  ) {
    alert(`Please Provide a positive number to add`);
    return;
  }
  //amount>10000
  if (parseFloat(inputAddAmount.value) > 10000) {
    alert(`You cant add more than $10000 at once`);
    return;
  }
  //adding balance
  const newCurrentBalance =
    parseFloat(currentBalance.innerText) + parseFloat(inputAddAmount.value);
  document.querySelector(".current-balance").innerText =
    newCurrentBalance.toFixed(2);

  clearInputFields(inputAddAccount, inputAddAmount, inputAddPin);
});
