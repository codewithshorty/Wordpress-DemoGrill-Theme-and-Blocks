import { useBlockProps, MediaUploadCheck, MediaUpload } from "@wordpress/block-editor";
import { TextControl, TextareaControl, Button } from "@wordpress/components"
import "./main.css";

export default function Edit({ attributes, setAttributes }) {

    const blockProps = useBlockProps({ className: "testimonial-container" });
    const { testimonials = [] } = attributes;

    const addTestimonial = () => {
        const newTestimonials = [...testimonials, { "name": "", "desc": "" }];
        setAttributes({ testimonials: newTestimonials });
    }

    const updateTestimonial = (index, field, newValue) => {
        const newTestimonials = [...testimonials];
        newTestimonials[index][field] = newValue;
        setAttributes({ testimonials: newTestimonials });
    }

    const deleteTestimonial = (index) => {
        const newTestimonials = testimonials.filter((_, ind) => ind !== index);
        setAttributes({ testimonials: newTestimonials })
    }

    return (
        <div {...blockProps} >
            <h3>Testimonials</h3>
            {
                testimonials.map((testimonial, index) => {
                    return (
                        <div key={index} className="testimonial">
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={(media) => updateTestimonial(index, "image", media.url)}
                                    allowedTypes={["image"]}
                                    render={({ open }) => (
                                        <Button onClick={open} variant="secondary">
                                            {testimonial.image ? "Update Image" : "Add Image"}
                                        </Button>
                                    )}

                                />
                            </MediaUploadCheck>
                            <br /><br />
                            {testimonial.image && <img src={testimonial.image} className="testimonial-image" />}

                            <TextControl
                                label="Testimonial Name"
                                help="Enter name of the person from testimonial"
                                value={testimonial.name}
                                onChange={(newValue) => updateTestimonial(index, "name", newValue)}
                                className="testimonial-name"
                            />
                            <TextareaControl
                                label="Testimonial description"
                                help="Enter description text of the person from testimonial"
                                value={testimonial.desc}
                                onChange={(newValue) => updateTestimonial(index, "desc", newValue)}
                                className="testimonial-desc"
                            />
                            <Button
                                onClick={() => deleteTestimonial(index)}
                                variant="primary"
                                isDestructive
                            >
                                Delete Testimonial
                            </Button>
                            <hr />
                        </div>
                    )
                })
            }
            <Button style={{ "marginTop": "20px" }}
                onClick={addTestimonial}
                variant="primary"
            >
                Add Testimonial
            </Button>
        </div>
    );



}

