//Cashout functionality
btnWithdrawMoney.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = getInputAmount(inputWithdrawAmount);
  const inputPin = getInputPin(inputWithdrawPin);

  //for empty fields
  if (
    !forEmptyFields(inputWithdrawAccount, inputWithdrawAmount, inputWithdrawPin)
  )
    return;
  //account number less than 11
  if (inputWithdrawAccount.value.length < 11) {
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
    alert(`You cant withdraw more than your balance`);
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
    type: "CashOut",
    amount: amount,
    date: new Date().toLocaleString(),
  };
  movements.push(movement);

  // clear input fields
  clearInputFields(inputWithdrawAccount, inputWithdrawAmount, inputWithdrawPin);

  //successful message
  alert("Withdrawal successful!");
});
