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

const tabsButtons = document.querySelectorAll(".tabs__buttons ul li");
const tabsContents = document.querySelectorAll(".tabs__contents-item");

tabsButtons.forEach((item) => {
  item.addEventListener("click", () => {
    tabsButtons.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
    let index = item.dataset.tab;
    tabsContents.forEach((item) => {
      item.classList.remove("active");
      if (index === item.dataset.content) {
        item.classList.add("active");
      }
    });
  });
});
