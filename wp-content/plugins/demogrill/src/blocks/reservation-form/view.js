
document.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!e.target.matches("#reservation-form")) return;

    const form = e.target;
    const message = document.querySelector(".message");
    const button = document.querySelector(".reservation-button");
    const spinner = document.querySelector(".spinner");

    formData = {
        user_name: form.user_name.value,
        phone: form.phone.value,
        time: form.time.value,
        reservation_date: form.reservation_date.value,
        number_of_reservations: form.number_of_reservations.value
    }

    button.classList.add("loading");
    spinner.style.display = "block"

    try {
        const respone = await fetch("/wp-json/demogrill/v1/reservation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-WP-Nonce": demogrillData.nonce
            },
            body: JSON.stringify(formData)
        });

        const result = await respone.json();

        if (result.success) {
            message.textContent = "Reservation successful";
            form.reset();
        } else {
            message.textContent = result.message || "Something went wrong";
        }

    } catch (error) {
        message.textContent = "Network error";
    } finally {
        button.classList.remove("loading");
        spinner.style.display = "none"
    }
});