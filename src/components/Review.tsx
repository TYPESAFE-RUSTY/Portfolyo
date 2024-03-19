import { Testimonial } from "@/utils/schema";
import Image from "next/image";


function TestimonialElement({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="testimonial-item">
            <div className="testimonial-innter">
                <div className="testi-thumb"><Image src={testimonial.image.url} alt={`Profile_Of_${testimonial.name}`} width={100} height={100} /></div>
                <div className="testi-content">
                    <p>&quot;{testimonial.review}&quot;</p>
                    <h4>{testimonial.name}<span>{testimonial.position}</span></h4>
                </div>
            </div>
        </div>
    )
}


export default function Review({ testimonials }: { testimonials: Testimonial[] }) {
    return (
        <section id="reviews" className="testimonial-section section-padding bd-bottom" data-scroll-index="5">
            <div className="container">
                <div className="section-heading mb-40 text-center wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                    <h2>Clients Reviews</h2>
                </div>
                <div id="testimonial-carousel" className="testimonial-carousel owl-carousel">

                    {
                        testimonials.map((item) => <TestimonialElement key={item._id} testimonial={item} />)
                    }
                </div>
            </div>
        </section>
    )
}
