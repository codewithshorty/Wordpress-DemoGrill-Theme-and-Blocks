
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".food-menu__filter button");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filter = btn.dataset.filter;

            // console.log(filter);
            buttons.forEach(btn => btn.classList.remove("active"));
            btn.classList.add("active");

            const menuItems = document.querySelectorAll(".food-menu__item");


            menuItems.forEach((menuItem) => {
                const categoryElement = menuItem.querySelector(".food-category");

                if (categoryElement) {
                    const category = categoryElement.textContent.trim()


                    if (filter === "all" || category == filter) {
                        menuItem.style.display = "block"
                    } else {
                        menuItem.style.display = "none"
                    }

                }

            })
        })
    })

})