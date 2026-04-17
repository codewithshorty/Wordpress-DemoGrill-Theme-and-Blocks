<?php

$query = new WP_Query([
    "post_type" => "food_menu_item",
    "posts_per_page" => -1
]);

$menu_categories = get_terms(["taxonomy" => "food_menu_category", "hide_empty" => true]);

echo '<div class="food-menu__filter">';
echo '<button class="active" data-filter="all">All</button>';

foreach ($menu_categories as $menu_category) {
    echo "<button data-filter='{$menu_category->slug}'>{$menu_category->name}</button>";
}
echo '</div>';


if ($query->have_posts()) {
?>
    <div class="food-menu">
        <?php while ($query->have_posts()) {

            $query->the_post();

            $post_categories = get_the_terms(get_the_ID(), "food_menu_category");

            $post_category_name = "";

            if (!empty($post_categories) && !is_wp_error($post_categories)) {
                $post_category_name = $post_categories[0]->slug;
            }


        ?>
            <div class="food-menu__item">
                <?php
                if (has_post_thumbnail()) {
                ?>
                    <div class="food-image">
                        <?php the_post_thumbnail(); ?>
                    </div>
                    <div class="food-menu__header">
                        <h4>
                            <?php the_title(); ?>
                        </h4>
                        <span>
                            <?php the_field("price"); ?>
                        </span>
                    </div>
                    <p>
                        <?php the_content() ?>
                    </p>
                    <?php
                    if ($post_category_name) {
                    ?>
                        <div class="food-category">
                            <?php echo esc_html($post_category_name); ?>
                        </div>
                    <?php
                    }
                    ?>

                <?php
                }
                ?>

            </div>
        <?php
        } ?>

    </div>
<?php
}
?>


<?php




wp_reset_postdata();
