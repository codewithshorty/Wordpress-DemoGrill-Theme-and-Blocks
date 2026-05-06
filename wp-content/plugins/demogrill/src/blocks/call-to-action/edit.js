
import { InspectorControls, useBlockProps, RichText } from "@wordpress/block-editor";
import { PanelBody, TextControl, ColorPalette, RangeControl, Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import "./main.css"


export default function edit({ attributes, setAttributes }) {
    const { ctaTitle, ctaText, btnText, paddingBtnX, paddingBtnY, backColor, btnURL, textColor, btnBackground, btnTextColor } = attributes;
    const blockProps = useBlockProps({
        style: {
            "width": "100%",
            "height": "600px",
            "textAlign": "center",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "center"
        }
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Background Color", "demogrill/call-to-action")}>
                    <ColorPalette
                        colors={[
                            { name: "orange", "color": "#ff6600" },
                            { name: "black", "color": "#000000" },
                            { name: "white", "color": "#ffffff" },
                        ]}
                        value={backColor}
                        onChange={(newBackColor) => setAttributes({ backColor: newBackColor })}
                    />
                </PanelBody>


                <PanelBody title={__("Text Color", "demogrill/call-to-action")}>
                    <ColorPalette
                        colors={[
                            { name: "orange", "color": "#ff6600" },
                            { name: "black", "color": "#000000" },
                            { name: "white", "color": "#ffffff" },
                        ]}
                        value={textColor}
                        onChange={(newbtnBackground) => setAttributes({ textColor: newbtnBackground })}
                    />
                </PanelBody>
                <PanelBody title={__("CTA Button Settings", "demogrill/call-to-action")}>
                    <RangeControl
                        label="Vertical Padding"
                        value={paddingBtnY}
                        onChange={(newPaddingBtnY) => setAttributes({ paddingBtnY: newPaddingBtnY })}
                        min={5}
                        max={20}
                    />
                    <RangeControl
                        label="Horizontal Padding"
                        value={paddingBtnX}
                        onChange={(newPaddingBtnX) => setAttributes({ paddingBtnX: newPaddingBtnX })}
                        min={10}
                        max={40}
                    />
                    <TextControl
                        label="Button Url"
                        value={btnURL}
                        onChange={(newBtnURL) => setAttributes({ btnURL: newBtnURL })}

                    />

                    <TextControl
                        label="Button Text"
                        value={btnText}
                        onChange={(newBtnText) => setAttributes({ btnText: newBtnText })}

                    />


                </PanelBody>
                <PanelBody title={__("Button Text Color", "demogrill/call-to-action")}>
                    <ColorPalette
                        colors={[
                            { name: "orange", "color": "#ff6600" },
                            { name: "black", "color": "#000000" },
                            { name: "white", "color": "#ffffff" },
                        ]}
                        value={btnTextColor}
                        onChange={(newBtnTextColor) => setAttributes({ btnTextColor: newBtnTextColor })}
                    />
                </PanelBody>

                <PanelBody title={__("CTA Background Color", "demogrill/call-to-action")}>
                    <ColorPalette
                        colors={[
                            { name: "white", "color": "#ffffff" },
                            { name: "orange", "color": "#ff6600" },
                            { name: "black", "color": "#000000" },
                        ]}
                        value={btnBackground}
                        onChange={(newBtnBackground) => setAttributes({ btnBackground: newBtnBackground })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps} style={{
                "width": "100%",
                "height": "600px",
                "textAlign": "center",
                "display": "flex",
                "flexDirection": "column",
                "justifyContent": "center",
                "alignItems": "center",
                "background": `${backColor}`
            }}>

                <RichText
                    tagName="h2"
                    placeholder="Enter CTA title"
                    value={ctaTitle}
                    onChange={(newCtaTitle) => setAttributes({ ctaTitle: newCtaTitle })}
                    style={{ "color": `${textColor}`, }}
                />

                <RichText
                    tagName="p"
                    placeholder="Enter CTA description text"
                    value={ctaText}
                    onChange={(newCtaText) => setAttributes({ ctaText: newCtaText })}
                    style={{ "color": `${textColor}`, }}

                />

                <a
                    className="cta-button"
                    style={{
                        "padding": `${paddingBtnY}px ${paddingBtnX}px`,
                        "background": `${btnBackground}`,
                        "color": `${btnTextColor}`
                    }}
                    href={btnURL}
                >

                    {btnText}
                </a>

            </div >

        </>
    )

}