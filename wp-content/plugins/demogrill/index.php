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

// Hooks
add_action("init", "demogrill_registering_block");
