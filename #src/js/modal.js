const btnModal = document.querySelector(".nav button");
const btnModalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
btnModal.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  modal.classList.add("active");
});
btnModalClose.addEventListener("click", () => {
  document.body.style.overflowY = "visible";
  modal.classList.remove("active");
});
