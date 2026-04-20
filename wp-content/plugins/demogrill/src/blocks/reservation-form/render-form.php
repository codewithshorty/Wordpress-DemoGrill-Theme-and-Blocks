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
        <button type="submit">Reserve the table</button>
        <div class="loader" style="display:none;">Sending data...</div>
        <p class="message"></p>
    </form>

</div>

<?php
echo ob_get_clean();
