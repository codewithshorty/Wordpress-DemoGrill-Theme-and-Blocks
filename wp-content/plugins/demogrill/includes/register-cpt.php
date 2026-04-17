<?php

// Registering Food Menu CPT

function register_demogrill_menu_cpt()
{
    register_post_type("food_menu_item", [
        "labels" => [
            "name" => "Food Menu Items",
            "singular_name" => "Food Menu Item",
            "add_new" => "Add New Food Menu Item",
            "add_new_item" => "Add New Food Menu Item"
        ],
        "public" => true,
        "has_archive" => true,
        "show_in_rest" => true,
        "supports" => ["title", "editor", "thumbnail", "excerpt"],
        "menu_icon" => "dashicons-food",
        "menu_position" => 6
    ]);
}

// Registering Food Menu CPT
add_action("init", "register_demogrill_menu_cpt");


// Registering Food Menu Taxonomy Category

function register_demogrill_menu_taxonomy()
{
    register_taxonomy("food_menu_category", "food_menu_item", [
        "label" => "Food Menu Items Categories",
        "hierarchical" => true,
        "show_in_rest" => true
    ]);
}

// Registering Food Menu Taxonomy Category
add_action("init", "register_demogrill_menu_taxonomy");
