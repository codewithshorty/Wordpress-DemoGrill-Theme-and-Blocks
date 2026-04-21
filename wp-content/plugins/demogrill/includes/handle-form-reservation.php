<?php

function reservation_exist($reservation_date, $time)
{
    $args = [
        "post_type" => "reservation",
        "post_status" => "publish",
        "meta_query" => [
            "relation" => "AND",
            ["key" => "reservation_date", "value" => $reservation_date, "compare" => "="],
            ["key" => "time", "value" => $time, "compare" => "="]
        ]

    ];

    $query = new WP_Query($args);

    return $query->have_posts();
}

function handle_reservation($request)
{
    $data = $request->get_json_params();

    $name = sanitize_text_field($data["user_name"]);
    $phone = sanitize_text_field($data["phone"]);
    $time = sanitize_text_field($data["time"]);
    $reservation_date = sanitize_text_field($data["reservation_date"]);
    $number_of_reservations = intval($data["number_of_reservations"]);

    $nonce = $request->get_header("X-WP-Nonce");

    if (!wp_verify_nonce($nonce, "wp_rest")) {
        return new WP_REST_Response([
            "success" => false,
            "message" => "Nonce Invalid"
        ], 403);
    };



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

    // Check if reservation exists
    if (reservation_exist($reservation_date, $time)) {
        return new WP_REST_Response([
            "success" => false,
            "message" => "Reservation already exists!"
        ], 409);
    }


    // $reservation_date_requested = sanitize_text_field($request["reservation_date"]);
    // $time_requested = sanitize_text_field($request["time"]);




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
