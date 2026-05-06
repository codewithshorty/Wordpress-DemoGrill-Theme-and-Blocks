import {
    useBlockProps,
    RichText,
    InspectorControls
} from "@wordpress/block-editor";

import {
    PanelBody,
    TextControl
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {

    const { copyright, facebook, instagram, twitter, tiktok, phone, email, location, hoursWeek, hoursWeekend } = attributes;
    const blockProps = useBlockProps({
        className: "demogrill-footer"
    });

    return (
        <>
            <InspectorControls>

                <PanelBody title="Social Links">

                    <TextControl
                        label="Facebook URL"
                        value={facebook}
                        onChange={(val) => setAttributes({ facebook: val })}
                    />

                    <TextControl
                        label="Instagram URL"
                        value={instagram}
                        onChange={(val) => setAttributes({ instagram: val })}
                    />

                    <TextControl
                        label="Twitter URL"
                        value={twitter}
                        onChange={(val) => setAttributes({ twitter: val })}
                    />

                    <TextControl
                        label="TikTok URL"
                        value={tiktok}
                        onChange={(val) => setAttributes({ tiktok: val })}
                    />

                </PanelBody>

                <PanelBody title="Contact details">

                    <TextControl
                        label="Phone"
                        value={phone}
                        onChange={(val) => setAttributes({ phone: val })}
                    />

                    <TextControl
                        label="Email"
                        value={email}
                        onChange={(val) => setAttributes({ email: val })}
                    />

                    <TextControl
                        label="Location"
                        value={location}
                        onChange={(val) => setAttributes({ location: val })}
                    />



                </PanelBody>

                <PanelBody title="Working hours">

                    <TextControl
                        label="Phone"
                        value={hoursWeek}
                        onChange={(val) => setAttributes({ hoursWeek: val })}
                    />

                    <TextControl
                        label="Email"
                        value={hoursWeekend}
                        onChange={(val) => setAttributes({ hoursWeekend: val })}
                    />



                </PanelBody>

            </InspectorControls>

            <div {...blockProps}>

                <div className="footer-grid">

                    {/* BRAND */}
                    <div className="footer-col">
                        <h3>DemoGrill</h3>
                        <p>
                            Premium grilled food, elegant atmosphere and unforgettable dining experience.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <p>{phone}</p>
                        <p>{email}</p>
                        <p>{location}</p>
                    </div>

                    <div className="footer-col">
                        <h4>Working Hours</h4>
                        <p>Mon - Fri: {hoursWeek}</p>
                        <p>Sat - Sun: {hoursWeekend}</p>
                    </div>

                    <div className="footer-col">

                        <div className="footer-socials">

                            <a href={facebook || "#"}>
                                <span>FB</span>
                            </a>

                            <a href={instagram || "#"}>
                                <span>IG</span>
                            </a>

                            <a href={twitter || "#"}>
                                <span>X</span>
                            </a>

                            <a href={tiktok || "#"}>
                                <span>TT</span>
                            </a>

                        </div>

                    </div>


                </div>
                <div className="footer-bottom">

                    <RichText
                        tagName="p"
                        value={copyright}
                        placeholder="Enter copyright..."
                        onChange={(val) =>
                            setAttributes({ copyright: val })
                        }
                    />

                </div>

            </div>
        </>
    );
}