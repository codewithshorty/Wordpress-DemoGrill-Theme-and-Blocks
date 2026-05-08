<?php

$query = new WP_Query([
    "post_type" => "food_menu_item",
    "posts_per_page" => -1
]);

$menu_categories = get_terms(["taxonomy" => "food_menu_category", "hide_empty" => true]);
?>
<section id="menu" class="relative bg-white">

    <!-- FILTER BAR -->
    <div class="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-black/5">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <h2 class="font-display text-2xl sm:text-3xl tracking-tight">Our Menu</h2>

            <div class="flex-1"></div>

            <div class="food-menu__filter flex gap-2 overflow-x-auto">

                <button data-filter="all"
                    class="cat-pill active whitespace-nowrap px-4 py-2 rounded-full bg-black text-white text-sm transition">
                    All
                </button>

                <?php foreach ($menu_categories as $menu_category): ?>
                    <button
                        data-filter="<?php echo esc_attr($menu_category->slug); ?>"
                        class="cat-pill whitespace-nowrap px-4 py-2 rounded-full bg-yellow-100 text-black text-sm hover:bg-yellow-200 transition">
                        <?php echo esc_html($menu_category->name); ?>
                    </button>
                <?php endforeach; ?>

            </div>
        </div>
    </div>

    <?php
    if ($query->have_posts()) {
    ?>
        <div class="mx-auto max-w-7xl px-6 sm:px-8 py-12">

            <div class="food-menu grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                <?php while ($query->have_posts()):
                    $query->the_post();

                    $post_categories = get_the_terms(get_the_ID(), "food_menu_category");
                    $slug = $post_categories[0]->slug ?? "";
                ?>

                    <article
                        class="food-menu__item group rounded-2xl border border-black/5 hover:border-black/10 transition overflow-hidden opacity-0 translate-y-6"
                        data-category="<?php echo esc_attr($slug); ?>">

                        <!-- IMAGE -->
                        <div class="aspect-[4/3] overflow-hidden">
                            <?php the_post_thumbnail('medium', [
                                'class' => 'w-full h-full object-cover transition duration-500 group-hover:scale-105'
                            ]); ?>
                        </div>

                        <!-- CONTENT -->
                        <div class="p-5">

                            <div class="flex items-baseline justify-between">
                                <h3 class="font-display text-xl">
                                    <?php the_title(); ?>
                                </h3>

                                <span class="text-orange-500 font-medium">
                                    <?php the_field("price"); ?>
                                </span>
                            </div>

                            <p class="mt-2 text-gray-600 text-sm leading-relaxed">
                                <?php echo wp_trim_words(get_the_content(), 15); ?>
                            </p>

                            <div class="mt-3">
                                <span class="text-[11px] uppercase tracking-wide bg-yellow-100 px-2.5 py-1 rounded-full">
                                    <?php echo esc_html($slug); ?>
                                </span>
                            </div>

                        </div>
                    </article>

                <?php endwhile; ?>

            </div>
        </div>
    <?php
    }
    ?>


    <?php




    wp_reset_postdata();
