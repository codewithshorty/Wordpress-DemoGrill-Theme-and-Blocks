import { useBlockProps } from "@wordpress/block-editor";
import "./main.css"
export default function Edit() {
    const blockProps = useBlockProps();
    return (
        <div {...blockProps}>
            <div style={{ padding: "20px", border: "1px dashed gray" }}>
                <strong>Reservation Form</strong>
                <p>Frontend preview only</p>
            </div>
        </div>
    );
}