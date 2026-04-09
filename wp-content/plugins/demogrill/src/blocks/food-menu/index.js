import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button, SelectControl } from "@wordpress/components";

import block from "./block.json";
import "./main.css";

registerBlockType(block.name, {
    edit({ attributes, setAttributes }) {
        const { menuItems } = attributes;
        const blockProps = useBlockProps({ className: "food-menu" });

        const addMenuItem = () => {
            setAttributes({
                menuItems: [...menuItems, { name: "", price: "", description: "" }]
            });
            console.log("item added", menuItems);
        }

        const updateMenuItem = (value, index, itemField) => {
            const newMenuItems = [...menuItems];
            newMenuItems[index][itemField] = value;
            setAttributes({ menuItems: newMenuItems });
        }

        const deleteMenuItem = (index) => {
            const newMenuItems = menuItems.filter((_, i) => i !== index);
            setAttributes({ menuItems: newMenuItems })
        }

        return (
            <>
                <div {...blockProps} style={
                    {
                        "maxWidth": "800px",
                        "margin": "0 auto",
                        "display": "flex",
                        "flexWrap": "wrap"
                    }
                } >
                    {menuItems.map((singleItem, index) => {
                        return (
                            <div key={index} style={{
                                "borderBottom": "1px solid #eee",
                                "padding": "10px",
                                "boxSizing": "border-box",
                                "flex": "0 0 33%"
                            }}>

                                <MediaUploadCheck>
                                    <MediaUpload onSelect={(media) => updateMenuItem(media.url, index, "image")}
                                        render={({ open }) =>
                                            <Button variant="secondary" onClick={open}>{
                                                singleItem.image ? "Update Image" : "Select Image"
                                            }</Button>
                                        }
                                    />
                                </MediaUploadCheck>

                                <br />

                                {singleItem.image && (
                                    <div className="food-image" >
                                        <img src={singleItem.image} style={{
                                            "borderRadius": "20px",
                                            "width": "100%",
                                        }} />
                                    </div>
                                )
                                }
                                <br />
                                <SelectControl
                                    label="Category"
                                    value={singleItem.category}
                                    options={[
                                        { label: "Select Category", value: "" },
                                        { label: "Grill", value: "grill" },
                                        { label: "Pasta", value: "pasta" },
                                        { label: "Pizza", value: "pizza" },
                                        { label: "Salad", value: "salad" },
                                        { label: "Desert", value: "desert" },
                                    ]}
                                    onChange={(value) => updateMenuItem(value, index, "category")}
                                />

                                <RichText tagName="h4"
                                    placeholder="Food name"
                                    value={singleItem.name}
                                    onChange={(value) => updateMenuItem(value, index, "name")} />

                                <RichText tagName="span"
                                    placeholder="Food Price"
                                    value={singleItem.price}
                                    onChange={(value) => updateMenuItem(value, index, "price")} />

                                <RichText tagName="p"
                                    placeholder="Food description"
                                    value={singleItem.description}
                                    onChange={(value) => updateMenuItem(value, index, "description")}
                                />

                                {singleItem.category && (
                                    <span
                                        style={{
                                            "padding": "5px 10px",
                                            "backgroundColor": "#e5a21a",
                                            "color": "#ffffff",
                                            "display": "inline-block",
                                            "fontSize": "12px",
                                            "fontWeight": "bold",
                                            "borderRadius": "5px",
                                            "marginBottom": "5px"
                                        }}>{singleItem.category}</span>
                                )}
                                <br />
                                <Button variant="primary" style={{ "marginBottom": "20px" }} onClick={() => deleteMenuItem(index)} isDestructive>Remove the menu item</Button>
                            </div>
                        )
                    })}


                    <div>
                        <Button variant="primary" style={{}} onClick={addMenuItem}>Add Menu Item</Button>
                    </div>

                </div >
            </>

        );


    },
    save({ attributes }) {

        const { menuItems } = attributes;
        const blockProps = useBlockProps.save();

        return (
            <div {...blockProps} className="food-menu">
                <div className="food-menu__filter">
                    <button data-filter="all">All</button>
                    <button data-filter="grill">Grill</button>
                    <button data-filter="pasta">Pasta</button>
                    <button data-filter="pizza">Pizza</button>
                    <button data-filter="salad">Salad</button>
                    <button data-filter="desert">Desert</button>
                </div>
                {menuItems.map((singleItem, index) => {
                    return (<div key={index} className="food-menu__item">
                        {
                            singleItem.image && (
                                <div className="food-image">
                                    <img src={singleItem.image} />
                                </div>
                            )
                        }

                        <div className="food-menu__header">
                            <RichText.Content tagName="h4" value={singleItem.name} />
                            <RichText.Content tagName="span" value={singleItem.price} />
                        </div>

                        <RichText.Content tagName="p" value={singleItem.description} />
                        {singleItem.category && (
                            <span className={`food-category`}
                            >{singleItem.category}</span>
                        )
                        }
                    </div>)
                })}
            </div >
        )

    }
})