export default function Contact() {
    return (
        <>
            <section className="cta-section section-padding bd-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 xs-padding">
                            <div className="cta-content">
                                <h3>Need a Consultant for Your Business?</h3>
                            </div>
                        </div>
                        <div className="col-md-6 text-right">
                            <a href="#" className="default-btn">Hire Me Now!</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact-section section-padding" data-scroll-index="6">
                <div className="container">
                    <div className="section-heading mb-40 text-center wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                        <h2>Get In Touch</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <form action="/" method="post" id="ajax_form" className="row contact-form text-center">
                                <div className="form-group col-lg-6">
                                    <input type="text" className="form-control" id="name" placeholder="Your name" required />
                                </div>
                                <div className="form-group col-lg-6">
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                                </div>
                                <div className="form-group col-lg-12">
                                    <textarea className="form-control message" id="message" name="message" placeholder="Message" required></textarea>
                                </div>
                                <div className="form-group col-lg-12">
                                    <button id="submit" className="default-btn" type="submit">Send Message</button>
                                </div>
                                <div id="form-messages" className="form-group col-lg-12">
                                    <div className="alert" role="alert"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
