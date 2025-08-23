//add money Section functionality
btnAddMoney.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = getInputAmount(inputAddAmount);
  const inputPin = getInputPin(inputAddPin);

  //for empty fields
  if (!forEmptyFields(inputAddAccount, inputAddAmount, inputAddPin)) return;

  //account number less than 11
  if (inputAddAccount.value.length < 11) {
    alert(`Please provide valid account number`);
    return;
  }
  //pin doesn't match
  if (inputPin !== pinNumber) {
    alert(`Please provide a valid pin number`);
    return;
  }
  //amount <=0
  if (amount <= 0 || isNaN(amount)) {
    alert(`Please Provide a positive number to add`);
    return;
  }
  //amount>10000
  if (amount > 10000) {
    alert(`You cant add more than $10000 at once`);
    return;
  }

  //updating balance
  const newCurrentBalance = getInnerValue(currentBalance) + amount;

  setInnerText(newCurrentBalance);

  // clear input fields
  clearInputFields(inputAddAccount, inputAddAmount, inputAddPin);

  //successful message
  alert("Add Money Successful!");
});
