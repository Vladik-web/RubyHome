const select = document.querySelectorAll(".select");
const tabsContent = document.querySelector(".tabs__contents-item");
tabsContent.addEventListener("click", (evt) => {
  const target = evt.target.closest(".select");
  if (!target) {
    return;
  }

  const list = target.parentElement.querySelector(".select-wrapper");
  list.classList.toggle("active");
});
