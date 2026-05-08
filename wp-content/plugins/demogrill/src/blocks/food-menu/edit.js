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
            <div className="mx-auto max-w-7xl px-6 sm:px-8 py-12">
                <h2>Food Menu Items</h2>
                <div className="food-menu grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        foodMenuItems.map((item) => {

                            const image = item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                            const category = item?._embedded?.["wp:term"]?.[0]?.[0]?.slug;

                            return (
                                <div
                                    key={item.id}
                                    className="group rounded-2xl border border-black/5 overflow-hidden"
                                    data-category={category}
                                >

                                    {image && (
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img
                                                src={image}
                                                className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                            />
                                        </div>
                                    )}

                                    <div className="p-5">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="text-lg font-bold">
                                                {item.title.rendered}
                                            </h4>
                                        </div>

                                        <p className="text-gray-600 text-sm mb-3">
                                            {item.content.rendered.replace(/<[^>]+>/g, '')}
                                        </p>

                                        {category && (
                                            <span className="inline-block text-xs bg-gray-200 px-2 py-1 rounded">
                                                {category}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>


    }
}