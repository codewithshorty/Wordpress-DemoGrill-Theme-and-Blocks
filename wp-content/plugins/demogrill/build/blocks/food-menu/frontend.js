/******/ (() => { // webpackBootstrap
/*!******************************************!*\
  !*** ./src/blocks/food-menu/frontend.js ***!
  \******************************************/
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".food-menu__filter button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      console.log(filter);
      const menuItems = document.querySelectorAll(".food-menu__item");
      menuItems.forEach(menuItem => {
        if (filter === "all" || menuItem.querySelector(".food-category").textContent == filter) {
          menuItem.style.display = "block";
        } else {
          menuItem.style.display = "none";
        }
      });
    });
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map