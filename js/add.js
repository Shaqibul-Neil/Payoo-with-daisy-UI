//add money Section functionality
btnAddMoney.addEventListener("click", function (e) {
  e.preventDefault();

  //for empty fields
  if (!forEmptyFields(inputAddAccount, inputAddAmount, inputAddPin)) return;

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

  // clear input fields
  clearInputFields(inputAddAccount, inputAddAmount, inputAddPin);

  //successful message
  alert("Add Money Successful!");
});
