<?php

function reservation_columns($columns)
{
    $columns["phone"] = "Phone";
    $columns["reservation_date"] = "Reservation Date";
    $columns["time"] = "Time";
    $columns["number_of_reservations"] = "Number of Reservations";
    return $columns;
}


function reservation_column($column, $reservation_id)
{
    if ($column === "phone") {
        echo get_post_meta($reservation_id, "phone", true);
    }

    if ($column === "reservation_date") {
        echo get_post_meta($reservation_id, "reservation_date", true);
    }

    if ($column === "time") {
        echo get_post_meta($reservation_id, "time", true);
    }

    if ($column === "number_of_reservations") {
        echo get_post_meta($reservation_id, "number_of_reservations", true);
    }
}
