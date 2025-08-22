//login button functionality
//Elements
const loginBtn = document.querySelector("#btn-login");
const inputNumber = document.querySelector(".input-number");
const inputPin = document.querySelector(".input-pin");

//variables
const mobileNumber = 12345678901;
const pinNumber = 1234;

//main functionality
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    parseInt(inputNumber.value) === mobileNumber &&
    parseInt(inputPin.value) === pinNumber
  ) {
    inputNumber.value = inputPin.value = "";
    window.location.href = "./home.html";
  } else alert(`Please Provide correct Number and Pin`);
});
