import { useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";

import "./main.css";

export default function Edit() {
    {

        const foodMenuItems = useSelect((select) => {
            return select("core").getEntityRecords("postType", "food_menu_item", {
                per_page: -1,
                _embed: true
            })
        }, [])

        console.log(foodMenuItems);

        if (!foodMenuItems) {
            return <p>Loading items...</p>
        }

        return <div {...useBlockProps} >
            <h2>Food Menu Items</h2>
            <div className="food-menu">
                {
                    foodMenuItems.map((item) => {
                        return <div key={item.id} className="food-menu__item">
                            <div className="food-image">
                                <img src={item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url} alt={item?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text} />
                            </div>
                            <div className="food-menu__header">
                                <h4>{item.title.rendered}</h4>
                                {/* <span>Span price</span> */}
                            </div>
                            <p>
                                {item.content.rendered}
                            </p>
                            <div class="food-category">
                                {item?._embedded?.["wp:term"]?.[0]?.[0]?.slug}
                            </div>
                        </div>
                    })
                }
            </div>

        </div>


    }
}