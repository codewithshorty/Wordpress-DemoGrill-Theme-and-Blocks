import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {

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

    const blockProps = useBlockProps.save();

    return (
        <section
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

                <RichText.Content
                    tagName="h1"
                    value={title}
                    className="font-bold mb-4"
                    style={{ color: textColor, fontSize: titleSize }}
                />

                <RichText.Content
                    tagName="h2"
                    value={subtitle}
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
        </section>
    );
}