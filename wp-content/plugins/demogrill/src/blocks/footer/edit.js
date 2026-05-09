import {
    useBlockProps,
    RichText,
    InspectorControls
} from "@wordpress/block-editor";

import {
    PanelBody,
    TextControl
} from "@wordpress/components";

import "./main.css";

export default function Edit({ attributes, setAttributes }) {

    const {
        copyright,
        facebook,
        instagram,
        twitter,
        tiktok,
        phone,
        email,
        location,
        hoursWeek,
        hoursWeekend
    } = attributes;

    const blockProps = useBlockProps({
        className: "demogrill-footer text-black"
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

                <PanelBody title="Contact Details">

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

                <PanelBody title="Working Hours">

                    <TextControl
                        label="Week Days"
                        value={hoursWeek}
                        onChange={(val) => setAttributes({ hoursWeek: val })}
                    />

                    <TextControl
                        label="Weekend"
                        value={hoursWeekend}
                        onChange={(val) => setAttributes({ hoursWeekend: val })}
                    />

                </PanelBody>

            </InspectorControls>

            <footer {...blockProps}>

                <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20">

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* BRAND */}
                        <div>

                            <h3 className="text-3xl font-bold text-orange-500">
                                DemoGrill
                            </h3>

                            <p className="mt-5 text-black/70 leading-relaxed">
                                Premium grilled food, elegant atmosphere and unforgettable dining experience.
                            </p>

                        </div>

                        {/* CONTACT */}
                        <div>

                            <h4 className="text-xl font-semibold text-orange-500 mb-5">
                                Contact
                            </h4>

                            <div className="space-y-3 text-black/70">

                                <p>{phone}</p>

                                <p>{email}</p>

                                <p>{location}</p>

                            </div>

                        </div>

                        {/* HOURS */}
                        <div>

                            <h4 className="text-xl font-semibold text-orange-500 mb-5">
                                Working Hours
                            </h4>

                            <div className="space-y-3 text-black/70">

                                <p>Mon - Fri: {hoursWeek}</p>

                                <p>Sat - Sun: {hoursWeekend}</p>

                            </div>

                        </div>

                        {/* SOCIALS */}
                        <div>

                            <h4 className="text-xl font-semibold text-orange-500 mb-5">
                                Socials
                            </h4>

                            <div className="flex items-center gap-4 flex-wrap">

                                <a
                                    href={facebook || "#"}
                                    className="footer-social-link"
                                >
                                    FB
                                </a>

                                <a
                                    href={instagram || "#"}
                                    className="footer-social-link"
                                >
                                    IG
                                </a>

                                <a
                                    href={twitter || "#"}
                                    className="footer-social-link"
                                >
                                    X
                                </a>

                                <a
                                    href={tiktok || "#"}
                                    className="footer-social-link"
                                >
                                    TT
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* BOTTOM */}
                    <div className="border-t border-black/10 mt-16 pt-8 text-center">

                        <RichText
                            tagName="p"
                            className="text-black/50 text-sm"
                            value={copyright}
                            placeholder="Enter copyright..."
                            onChange={(val) =>
                                setAttributes({ copyright: val })
                            }
                        />

                    </div>

                </div>

            </footer>
        </>
    );
}