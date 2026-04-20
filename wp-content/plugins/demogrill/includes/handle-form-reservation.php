<?php

function handle_reservation($request)
{
    $data = $request->get_json_params();

    $name = sanitize_text_field($data["user_name"]);
    $phone = sanitize_text_field($data["phone"]);
    $time = sanitize_text_field($data["time"]);
    $reservation_date = sanitize_text_field($data["reservation_date"]);
    $number_of_reservations = intval($data["number_of_reservations"]);

    if (empty($name) || empty($phone) || empty($time) || empty($reservation_date)) {
        return new WP_REST_Response([
            "success" => "false",
            "message" => "Required field are empty"
        ], 400);
    }

    if ($number_of_reservations <= 0) {
        return new WP_REST_Response([
            "success" => false,
            "message" => "Please pick number of guests"
        ], 400);
    }


    // Save reservation

    $reservation_id = wp_insert_post([
        "post_type" => "reservation",
        "post_title" => $name,
        "post_status" => "publish"
    ]);

    update_post_meta($reservation_id, "phone", $phone);
    update_post_meta($reservation_id, "time", $time);
    update_post_meta($reservation_id, "reservation_date", $reservation_date);
    update_post_meta($reservation_id, "number_of_reservations", $number_of_reservations);



    // Send email 
    wp_mail(get_option("admin_email"), "New Reservation", "Name:$name\nPhone:$phone\nTime:$time\nReservationDate:$reservation_date\nNumber of people:$number_of_reservations");

    // echo get_option("admin_email");

    return new WP_REST_Response([
        "success" => true,
        "message" => "Reservation successful"
    ], 200);
}
