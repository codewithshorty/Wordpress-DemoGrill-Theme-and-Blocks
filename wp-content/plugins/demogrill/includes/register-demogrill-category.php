<?php

function register_demogrill_category($categories)
{
    return array_merge($categories, [
        [
            "slug" => "demogrill",
            "title" => "Demogrill Blocks",
            "icon" => "admin-plugins"
        ]
    ]);
};
