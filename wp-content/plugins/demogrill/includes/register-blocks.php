<?php

function demogrill_registering_block()
{
    $blocks = [
        ["name" => "header-simple"],
        ["name" => "header-main"],
        ["name" => "food-menu"],
        ["name" => "reservation-form"],
        ["name" => "testimonials"],
        ["name" => "call-to-action"],
        ["name" => "footer"]
    ];

    foreach ($blocks as $block) {
        register_block_type(DEMOGRILL_DIR . "build/blocks/" . $block["name"]);
    }
}
