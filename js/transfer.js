//transfer functionality
btnTransferMoney.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = getInputAmount(inputTransferAmount);
  const inputPin = getInputPin(inputTransferPin);

  //for empty fields
  if (
    !forEmptyFields(inputTransferAccount, inputTransferAmount, inputTransferPin)
  )
    return;
  //account number less than 11
  if (inputTransferAccount.value.length < 11) {
    alert(`Please provide valid account number`);
    return;
  }
  //pin doesn't match
  if (inputPin !== pinNumber) {
    alert(`Please provide a valid pin number`);
    return;
  }
  //amount more than current balance
  if (amount > parseFloat(currentBalance.innerText)) {
    alert(`You cant transfer more than your balance`);
    return;
  }

  //amount <=0
  if (amount <= 0) {
    alert(`Please provide a positive number`);
    return;
  }

  //updating balance
  const newCurrentBalance = getInnerValue(currentBalance) - amount;

  setInnerText(newCurrentBalance);

  //adding to movements array
  const movement = {
    type: "Bank Transfer",
    amount: amount,
    date: new Date().toLocaleString(),
  };
  movements.push(movement);

  // clear input fields
  clearInputFields(inputTransferAccount, inputTransferAmount, inputTransferPin);

  //successful message
  alert("Transfer successful!");
});
