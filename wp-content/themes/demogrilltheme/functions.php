<?php
function demogrill_enqueue_style()
{
    wp_enqueue_style("demogrill-style", get_stylesheet_uri());
};

add_action("wp_enqueue_scripts", "demogrill_enqueue_style");
