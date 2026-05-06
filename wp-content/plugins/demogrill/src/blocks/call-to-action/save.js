
import { useBlockProps } from "@wordpress/block-editor"

export default function save({ attributes, setAttribites }) {
    const { ctaTitle, ctaText, btnText, paddingBtnX, paddingBtnY, backColor, btnURL, textColor, btnBackground, btnTextColor } = attributes;
    const blockProps = useBlockProps.save({
        style: {
            "width": "100%",
            "height": "600px",
            "textAlign": "center",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "center",
            "background": `${backColor}`
        }
    });

    return (
        <div {...blockProps}>
            <h2 style={{ "color": `${textColor}`, }}>{ctaTitle}</h2>
            <p style={{ "color": `${textColor}`, }}>{ctaText}</p>
            <a
                className="cta-button"
                href={btnURL}
                style={{
                    "padding": `${paddingBtnY}px ${paddingBtnX}px`,
                    "background": `${btnBackground}`,
                    "color": `${btnTextColor}`
                }}
            >
                {btnText}
            </a>
        </div>
    )
}