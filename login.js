//login button functionality
//Elements
const loginBtn = document.querySelector("#btn-login");
const inputNumber = document.querySelector(".input-number");
const inputPin = document.querySelector(".input-pin");
//main functionality
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    parseInt(inputNumber.value) === mobileNumber &&
    parseInt(inputPin.value) === pinNumber
  ) {
    clearInputFields(inputNumber, inputPin);
    window.location.href = "./home.html";
  } else {
    clearInputFields(inputNumber, inputPin);
    alert(`Please Provide correct Number and Pin`);
  }
});
