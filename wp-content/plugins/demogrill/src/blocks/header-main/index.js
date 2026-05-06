// import { registerBlockType } from "@wordpress/blocks";
// import { RichText, MediaUpload, InspectorControls, useBlockProps, URLInput } from "@wordpress/block-editor"
// import block from "./block.json";
// import { Button, PanelBody, TextControl, ColorPalette, RangeControl, SelectControl } from "@wordpress/components";
// import { __ } from "@wordpress/i18n";
// import "./main.css";


// registerBlockType(block.name, {
//     edit({ attributes, setAttributes }) {


//         const blockProps = useBlockProps();
//         const { title, subtitle, headImg, btnText, textColor, titleSize, heroOverlay, heroPadding, heroTextAlign, heroButtonUrl, buttonBgColor, buttonTextColor, buttonRadius } = attributes;
//         return (
//             <>
//                 <div {...blockProps}
//                     style={{
//                         'padding': `${heroPadding}` + "px",
//                         'backgroundSize': "cover",
//                         'backgroundImage': headImg ? `url(${headImg})` : "none",
//                         "position": "relative",
//                         "textAlign": `${heroTextAlign}`,

//                     }}
//                 >
//                     <div className="hero__overlay" style={{
//                         "background": `rgba(0,0,0,${heroOverlay})`,
//                     }}
//                     >
//                     </div>
//                     <InspectorControls>
//                         <PanelBody title={__("Header Settings", "demogrill")}>

//                             <ColorPalette label="Choose Hero text color" colors={[
//                                 { name: "white", color: "#FFFFFF" },
//                                 { name: "orange", color: "#cc8f15" }
//                             ]} value={textColor} onChange={newTextColor => setAttributes({ textColor: newTextColor })} />

//                             <RangeControl
//                                 label="Overlay"
//                                 value={heroOverlay}
//                                 onChange={newHeroOverlay => setAttributes({ heroOverlay: newHeroOverlay })}
//                                 min={0}
//                                 max={1}
//                                 step={0.1}
//                             />

//                             <RangeControl
//                                 label="Padding"
//                                 value={heroPadding}
//                                 onChange={newHeroPadding => setAttributes({ heroPadding: newHeroPadding })}
//                                 min={0}
//                                 max={200}
//                                 step={5}
//                             />

//                             <SelectControl
//                                 label="Text Alignment"
//                                 options={[
//                                     { label: "Left", value: "left" },
//                                     { label: "Right", value: "right" },
//                                     { label: "Center", value: "center" }
//                                 ]}
//                                 value={heroTextAlign}
//                                 onChange={newAlign => setAttributes({ heroTextAlign: newAlign })}
//                             />

//                             <RangeControl label="Hero Title Size" value={titleSize} onChange={newTitleSize => setAttributes({ titleSize: newTitleSize })} min={20} max={100} step={5} />
//                             <TextControl label="Change button text" value={btnText} onChange={newBtnText => setAttributes({ btnText: newBtnText })} />

//                             <URLInput label="Change button URL" value={heroButtonUrl} onChange={newUrl => setAttributes({ heroButtonUrl: newUrl })} />

//                             <p>Button Background</p>
//                             <ColorPalette
//                                 value={buttonBgColor}
//                                 onChange={(color) => setAttributes({ buttonBgColor: color })}
//                             />

//                             <p>Button Text Color</p>
//                             <ColorPalette
//                                 value={buttonTextColor}
//                                 onChange={(color) => setAttributes({ buttonTextColor: color })}
//                             />

//                             <RangeControl
//                                 label="Button Border Radius"
//                                 value={buttonRadius}
//                                 onChange={(value) => setAttributes({ buttonRadius: value })}
//                                 min={0}
//                                 max={50}
//                             />

//                         </PanelBody>
//                     </InspectorControls>
//                     <div className="hero__front">
//                         <MediaUpload
//                             onSelect={(media) => setAttributes({ headImg: media.url })}
//                             allowedTypes={"image"}
//                             render={({ open }) => (
//                                 <Button onClick={open} variant="primary">Select the Header Image</Button>
//                             )}
//                         />

//                         <RichText tagName="h1"
//                             className="hero__title"
//                             style={{
//                                 "color": textColor,
//                                 "text-shadow": "2px 2px 2px #fff",
//                                 "fontSize": titleSize
//                             }}
//                             placeholder={__("Enter Title", "demogrill")} value={title}
//                             onChange={newTitle => setAttributes({ title: newTitle })} />

//                         <RichText tagName="h2"
//                             className="hero__subtitle"
//                             style={{
//                                 "color": textColor,
//                                 "text-shadow": "2px 2px 1px #fff"
//                             }}
//                             placeholder={__("Enter Subtitle")}
//                             value={subtitle}
//                             onChange={newSubtitle => setAttributes({ subtitle: newSubtitle })} />
//                         <div className="hero__button1"
//                             style={{
//                                 "backgroundColor": buttonBgColor,
//                                 "borderRadius": buttonRadius
//                             }}
//                         >
//                             <a type="button" href={heroButtonUrl} style={{ "color": buttonTextColor, }} >{btnText}</a>
//                         </div>

//                     </div>

//                 </div>

//             </>

//         )
//     },
//     save({ attributes }) {
//         const { title, subtitle, headImg, btnText, textColor, titleSize, heroOverlay, heroPadding, heroTextAlign, heroButtonUrl, buttonBgColor, buttonTextColor, buttonRadius } = attributes;
//         const blockProps = useBlockProps.save();
//         return (
//             <>

//                 <div {...blockProps}
//                     style={{
//                         'padding': `${heroPadding}` + "px",
//                         'backgroundSize': "cover",
//                         'backgroundImage': headImg ? `url(${headImg})` : "none",
//                         "position": "relative",
//                         "textAlign": `${heroTextAlign}`

//                     }}
//                 >
//                     <div className="hero__overlay" style={{
//                         "background": `rgba(0,0,0,${heroOverlay})`
//                     }}
//                     >
//                     </div>
//                     <div className="hero__front" >

//                         <RichText.Content
//                             tagName="h1"
//                             className="hero__title"
//                             style={{
//                                 "color": textColor,
//                                 "fontSize": titleSize
//                             }}
//                             value={title} />
//                         <RichText.Content
//                             tagName="h2"
//                             className="hero__subtitle"
//                             style={{
//                                 "color": textColor,
//                             }}
//                             value={subtitle}

//                         />
//                         <div className="hero__button1" style={{
//                             "backgroundColor": buttonBgColor,
//                             "borderRadius": buttonRadius
//                         }}>
//                             <a type="button" href={heroButtonUrl} style={{ "color": buttonTextColor }}>{btnText}</a>
//                         </div>
//                     </div>
//                 </div>

//             </>

//         )
//     }

// });

// console.log("header main")

import { registerBlockType } from '@wordpress/blocks';
import metadata from "./block.json";
import Save from "./save";
import Edit from "./edit";


registerBlockType(metadata.name, {
    ...metadata,

    save: Save,
    edit: Edit
}
);
