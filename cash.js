//Cashout functionality
btnWithdrawMoney.addEventListener("click", function (e) {
  e.preventDefault();

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
  if (parseInt(inputWithdrawPin.value) !== pinNumber) {
    alert(`Please provide a valid pin number`);
    return;
  }
  //amount more than current balance
  if (
    parseFloat(inputWithdrawAmount.value) > parseFloat(currentBalance.innerText)
  ) {
    alert(`You cant withdraw more than your balance`);
    return;
  }

  //amount <=0
  if (parseInt(inputWithdrawAmount.value) <= 0) {
    alert(`Please provide a positive number`);
    return;
  }
  const newCurrentBalance =
    parseFloat(currentBalance.innerText) -
    parseFloat(inputWithdrawAmount.value);
  document.querySelector(".current-balance").innerText =
    newCurrentBalance.toFixed(2);

  // clear input fields
  clearInputFields(inputWithdrawAccount, inputWithdrawAmount, inputWithdrawPin);

  //successful message
  alert("Withdrawal successful!");
});
