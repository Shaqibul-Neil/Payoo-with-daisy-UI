//tab functionality
tabDetails.forEach((tabDetail) =>
  tabDetail.classList.add(
    "max-h-0",
    "opacity-0",
    "overflow-hidden",
    "transition-all",
    "duration-500",
    "ease-in-out"
  )
);

tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btns__tab");

  if (!clicked) return;

  //removing active status from tab btn
  tabBtns.forEach((tabBtn) => tabBtn.classList.remove("border-[#003396]"));

  //adding active status to tab btn
  clicked.classList.add("border-[#003396]");

  //hiding tab details
  tabDetails.forEach((tabDetail) => {
    tabDetail.classList.add("max-h-0", "opacity-0");
    tabDetail.classList.remove("max-h-[1000px]", "opacity-100");
  });

  const clickedDataset = clicked.dataset.tab;

  //show clicked tab
  const clickedTab = document.querySelector(`.tab-detail-${clickedDataset}`);

  clickedTab.classList.remove("max-h-0", "opacity-0");
  clickedTab.classList.add("max-h-[1000px]", "opacity-100");
});
