import { registerBlockType } from '@wordpress/blocks';
import {
    RichText, useBlockProps, InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, ColorPalette } from "@wordpress/components";
import block from "./block.json";
import { __ } from '@wordpress/i18n';
import "./main.css";

registerBlockType(block.name, {
    edit({ attributes, setAttributes }) {
        const { content, underline_color } = attributes;
        const blockProps = useBlockProps();


        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Choose Colors', block.textdomain)}>
                        <ColorPalette
                            value={underline_color}
                            colors={[
                                { name: "Red", color: "#f2665c", },
                                { name: "Purple", color: "#d97efc", }
                            ]}
                            onChange={newColor => setAttributes({ underline_color: newColor })}
                        />
                    </PanelBody>
                </InspectorControls >
                <div {...blockProps} >
                    <RichText className="header-simple" tagName='h2' placeholder={__("Enter Heading", "demogrill")}
                        value={content}
                        onChange={newValue => setAttributes({ content: newValue })}
                        allowedFormats={["core/bold", "core/italic"]}
                    />
                </div>
            </>
        )
    },
    save({ attributes }) {
        const { content, underline_color } = attributes
        const blockProps = useBlockProps.save({
            className: "header-simple",
            style: { "background-image": `linear-gradient(transparent,transparent), linear-gradient(${underline_color}, ${underline_color})` }
        });

        return (

            <RichText.Content {...blockProps} tagName="h2" value={content} />

        )

    }

});

