const btnModal = document.querySelector(".nav button");
const btnModalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");

const navList = document.querySelector(".nav__list");
const headerBtnMobile = document.querySelector(".header-btn-mobile");

/* headerBtnMobile.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  navList.classList.add("active");
}); */

btnModal.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  modal.classList.add("active");
});
btnModalClose.addEventListener("click", () => {
  document.body.style.overflowY = "visible";
  modal.classList.remove("active");
});
