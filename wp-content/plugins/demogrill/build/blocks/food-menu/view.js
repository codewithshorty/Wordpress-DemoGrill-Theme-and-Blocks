/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/blocks/food-menu/view.js ***!
  \**************************************/
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".cat-pill");
  const items = document.querySelectorAll(".food-menu__item");

  // FADE IN ANIMATION
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove("opacity-0", "translate-y-6");
      item.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-500");
    }, index * 100);
  });

  // FILTER
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      // ACTIVE STYLE
      buttons.forEach(b => {
        b.classList.remove("!bg-black", "!text-white", "active");
        b.classList.add("bg-yellow-100", "!text-black");
      });
      btn.classList.add("!bg-black", "!text-white", "active");

      // FILTER ITEMS
      items.forEach(item => {
        const category = item.dataset.category;
        if (filter === "all" || category === filter) {
          item.style.display = "block";
          setTimeout(() => {
            item.classList.remove("opacity-0", "translate-y-6", "active");
            item.classList.add("opacity-100", "translate-y-0", "active");
          }, 50);
        } else {
          item.classList.add("opacity-0", "translate-y-6");
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map