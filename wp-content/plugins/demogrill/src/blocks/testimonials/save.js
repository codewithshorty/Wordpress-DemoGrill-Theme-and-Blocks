import { useBlockProps } from "@wordpress/block-editor";
import "./main.css";


export default function Save({ attributes }) {
    const { testimonials = [] } = attributes;

    const blockProps = useBlockProps.save({
        className: "swiper demogrillSwiper testimonial-container"
    });

    return (
        <div {...blockProps}>

            <div className="swiper-wrapper">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="swiper-slide testimonial">

                        {testimonial.image && (
                            <img src={testimonial.image} className="testimonial-image" />
                        )}

                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="p-custom p-left">&ldquo;</p>
                        <p className="testimonial-desc">{testimonial.desc}</p>

                    </div>
                ))}
            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
        </div>
    );
}