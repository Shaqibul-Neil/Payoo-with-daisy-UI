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
    clearInputFields(inputAddAccount);
    return;
  }
  //pin doesn't match
  if (inputPin !== pinNumber) {
    alert(`Please provide a valid pin number`);
    clearInputFields(inputAddPin);
    return;
  }
  //amount <=0
  if (amount <= 0 || isNaN(amount)) {
    alert(`Please Provide a positive number to add`);
    clearInputFields(inputAddAmount);
    return;
  }
  //amount>10000
  if (amount > 10000) {
    alert(`You cant add more than $10000 at once`);
    clearInputFields(inputAddAmount);
    return;
  }

  //updating balance
  const newCurrentBalance = getInnerValue(currentBalance) + amount;

  setInnerText(newCurrentBalance);

  //adding to movements array
  const movement = {
    type: "Bank Deposit",
    amount: amount,
    date: new Date().toLocaleString(),
  };
  movements.push(movement);

  // clear input fields
  clearInputFields(inputAddAccount, inputAddAmount, inputAddPin);
  inputBankType.value = "Select a Bank";

  //successful message
  alert("Add Money Successful!");
});
