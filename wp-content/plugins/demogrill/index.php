<?php
/*
 * Plugin Name:       DemoGrill 
 * Plugin URI:        https://demogrill.com
 * Description:       Plugins created by CodeWithShorty for DemoGrill project
 * Version:           1.0
 * Requires at least: 6.9.4
 * Requires PHP:      7.2
 * Author:            Danijel Petrovic
 * Author URI:        https://demogrill.com
 * Text Domain:       demo-grill
 * Domain Path:       /languages
 */

if (!function_exists("add_action")) {
    echo "You are not allowed to visit this page!";
    exit;
}

// Setup
define("DEMOGRILL_DIR", plugin_dir_path(__FILE__));

// Includes
include(DEMOGRILL_DIR . "includes/register-blocks.php");
include(DEMOGRILL_DIR . "includes/register-cpt.php");
include(DEMOGRILL_DIR . "includes/handle-form-reservation.php");
include(DEMOGRILL_DIR . "includes/manage-table-columns.php");
include(DEMOGRILL_DIR . "includes/register-post-route.php");
include(DEMOGRILL_DIR . "includes/nonce-rest.php");
include(DEMOGRILL_DIR . "includes/register-demogrill-category.php");
include(DEMOGRILL_DIR . "includes/register-scripts.php");


// Hooks
add_action("init", "demogrill_registering_block");

add_action("wp_ajax_submit_reservation", "handle_reservation");
add_action("wp_ajax_nopriv_submit_reservation", "handle_reservation");

////
add_filter("manage_reservation_posts_columns", "reservation_columns");
add_action("manage_reservation_posts_custom_column", "reservation_column", 10, 2);

/////
add_action("rest_api_init", "register_reservation_route");

/////
add_action("wp_enqueue_scripts", "enqueue_demogrill_scripts");


/////
add_filter("block_categories_all", "register_demogrill_category", 6, 1);

/////
add_action("wp_enqueue_scripts", "register_demogrill_stylesheets");
