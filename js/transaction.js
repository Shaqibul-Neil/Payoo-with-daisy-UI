//creating the html section
btnShowTransaction.addEventListener("click", function () {
  //clearing movement container
  containerMovements.innerHTML = "";

  movements.forEach((movement) => {
    //bg color change according to the type
    let bgColor = "";
    if (movement.type === "Bank Deposit" || movement.type === "Bonus")
      bgColor = "bg-green-200";
    if (movement.type === "CashOut" || movement.type === "Bank Transfer")
      bgColor = "bg-red-200";
    if (movement.type === "Gas Bill") bgColor = "bg-[#ff5722ab]";
    if (movement.type === "Electricity Bill") bgColor = "bg-[#00afef61]";
    if (movement.type === "Internet Bill") bgColor = "bg-[#8588c1ad]";

    //creating HTML element
    const HTML = `
      <div class="flex justify-between items-center ${bgColor} rounded-2xl p-4 mb-4">
                  <div class="flex items-center gap-4">
                    <div
                      class="bg-white flex justify-center items-center w-10 h-10 rounded-full"
                    >
                      <img
                        src="assets/${movement.type}.png"
                        alt=""
                        class="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h4 class="font-medium">${movement.type}</h4>
                      <h5>$${movement.amount}</h5>
                      <h5>${movement.date}</h5>
                    </div>
                  </div>
                  <div>
                    <i class="fa-solid fa-ellipsis-vertical text-2xl"></i>
                  </div>
                </div>`;
    containerMovements.insertAdjacentHTML("afterBegin", HTML);
  });
});
