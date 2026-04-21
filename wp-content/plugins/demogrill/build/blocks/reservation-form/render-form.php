<?php
ob_start();
?>

<div class="reservation-form-wrapper">

    <form id="reservation-form">
        <input type="text" name="user_name" placeholder="Enter user name..." />
        <br />
        <input type="tel" name="phone" placeholder="Enter the phone number..." />
        <br />
        <input type="time" name="time" />
        <br />
        <input type="date" name="reservation_date" />
        <br />
        <input type="number" name="number_of_reservations" placeholder="Enter number of reservations" />
        <br />
        <button class="reservation-button" type="submit">Reserve the table</button>
        <div class="spinner" style="display:none;">
            <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>

        </div>
        <p class="message"></p>
    </form>

</div>

<?php
echo ob_get_clean();
