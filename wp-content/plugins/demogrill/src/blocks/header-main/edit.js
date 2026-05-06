import { useBlockProps, RichText, MediaUpload, InspectorControls, URLInput } from "@wordpress/block-editor";
import { PanelBody, Button, RangeControl, TextControl, ColorPalette, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {

    const {
        title,
        subtitle,
        headImg,
        btnText,
        textColor,
        titleSize,
        heroOverlay,
        heroPadding,
        heroTextAlign,
        heroButtonUrl,
        buttonBgColor,
        buttonTextColor,
        buttonRadius
    } = attributes;

    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Hero Settings", "demogrill")}>

                    <ColorPalette
                        label="Text color"
                        value={textColor}
                        onChange={(color) => setAttributes({ textColor: color })}
                    />

                    <RangeControl
                        label="Overlay"
                        value={heroOverlay}
                        onChange={(val) => setAttributes({ heroOverlay: val })}
                        min={0}
                        max={1}
                        step={0.1}
                    />

                    <RangeControl
                        label="Padding"
                        value={heroPadding}
                        onChange={(val) => setAttributes({ heroPadding: val })}
                        min={0}
                        max={200}
                    />

                    <SelectControl
                        label="Text align"
                        value={heroTextAlign}
                        options={[
                            { label: "Left", value: "left" },
                            { label: "Center", value: "center" },
                            { label: "Right", value: "right" }
                        ]}
                        onChange={(val) => setAttributes({ heroTextAlign: val })}
                    />

                    <RangeControl
                        label="Title size"
                        value={titleSize}
                        onChange={(val) => setAttributes({ titleSize: val })}
                        min={20}
                        max={100}
                    />

                    <TextControl
                        label="Button text"
                        value={btnText}
                        onChange={(val) => setAttributes({ btnText: val })}
                    />

                    <URLInput
                        label="Button URL"
                        value={heroButtonUrl}
                        onChange={(val) => setAttributes({ heroButtonUrl: val })}
                    />

                    <p>Button background</p>
                    <ColorPalette
                        value={buttonBgColor}
                        onChange={(color) => setAttributes({ buttonBgColor: color })}
                    />

                    <p>Button text color</p>
                    <ColorPalette
                        value={buttonTextColor}
                        onChange={(color) => setAttributes({ buttonTextColor: color })}
                    />

                    <RangeControl
                        label="Button radius"
                        value={buttonRadius}
                        onChange={(val) => setAttributes({ buttonRadius: val })}
                        min={0}
                        max={50}
                    />

                </PanelBody>
            </InspectorControls>

            <div
                {...blockProps}
                className="relative bg-cover bg-center"
                style={{
                    backgroundImage: headImg ? `url(${headImg})` : "none",
                    padding: `${heroPadding}px`,
                    textAlign: heroTextAlign,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{ background: `rgba(0,0,0,${heroOverlay})` }}
                ></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">

                    <MediaUpload
                        onSelect={(media) => setAttributes({ headImg: media.url })}
                        allowedTypes={["image"]}
                        render={({ open }) => (
                            <Button onClick={open} variant="primary">
                                Select Image
                            </Button>
                        )}
                    />

                    <RichText
                        tagName="h1"
                        value={title}
                        onChange={(val) => setAttributes({ title: val })}
                        placeholder="Hero title"
                        className="font-bold mb-4"
                        style={{ color: textColor, fontSize: titleSize }}
                    />

                    <RichText
                        tagName="h2"
                        value={subtitle}
                        onChange={(val) => setAttributes({ subtitle: val })}
                        placeholder="Hero subtitle"
                        className="mb-6"
                        style={{ color: textColor }}
                    />

                    <a
                        href={heroButtonUrl}
                        className="inline-block mt-8 px-8 py-4 font-semibold no-underline transition transform hover:-translate-y-1 hover:scale-105"
                        style={{
                            backgroundColor: buttonBgColor,
                            color: buttonTextColor,
                            borderRadius: `${buttonRadius}px`,
                            textDecoration: "none"
                        }}
                    >
                        {btnText}
                    </a>

                </div>
            </div>
        </>
    );
}