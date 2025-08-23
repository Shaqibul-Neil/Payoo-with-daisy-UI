//Paybill functionality
btnPayMoney.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = getInputAmount(inputPayAmount);
  const inputPin = getInputPin(inputPayPin);

  //for empty fields
  if (!forEmptyFields(inputPayAccount, inputPayAmount, inputPayPin)) return;
  //account number less than 11
  if (inputPayAccount.value.length < 11) {
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
    alert(`You cant pay more than your balance`);
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
    type: `${inputPayType.value} Bill`,
    amount: amount,
    date: new Date().toLocaleString(),
  };
  movements.push(movement);

  //successful message
  alert(`${inputPayType.value} Bill Payment successful!`);

  // clear input fields
  clearInputFields(inputPayAccount, inputPayAmount, inputPayPin);
  inputPayType.value = "Select a bill";
});
