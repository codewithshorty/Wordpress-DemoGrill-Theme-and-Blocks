<?php

function register_reservation_route()
{
    register_rest_route("demogrill/v1", "/reservation", [
        "methods" => "POST",
        "callback" => "handle_reservation",
        "permission_callback" => "__return_true"
    ]);
};
