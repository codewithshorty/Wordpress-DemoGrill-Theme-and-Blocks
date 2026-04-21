<?php

function enqueue_demogrill_scripts()
{
    wp_enqueue_script("demogrill-view", plugins_url("build/reservation-form/view.js", __FILE__), [], null, true);

    wp_localize_script("demogrill-view", "demogrillData", ["nonce" => wp_create_nonce("wp_rest")]);
}
