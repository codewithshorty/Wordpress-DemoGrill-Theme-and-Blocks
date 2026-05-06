<?php

function register_demogrill_stylesheets()
{
    wp_enqueue_style("swipper-slider-css", "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css");

    wp_enqueue_script("swipper-slider-js", "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js", [], null, true);
}
