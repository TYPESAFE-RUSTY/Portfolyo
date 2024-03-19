import { About as about } from "@/utils/schema"
import Image from "next/image"

export default function About({ data, email }: { data: about, email: string }) {
    return (
        <section id="about" className="about-section section-padding bd-bottom" data-scroll-index="1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 sm-padding wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                        <div className="about-content">
                            <h2>Let Me Introduce Myself.</h2>
                            <p>{data.description}</p>
                            <ul className="profile-info">
                                <li><span>Full Name</span>{data.name}</li>
                                <li><span>Title</span>{data.title}</li>
                                <li><span>Address</span>{data.address}</li>
                                <li><span>Email</span>{email}</li>
                                <li><span>Phone No.</span>{data.phoneNumber}</li>
                            </ul>
                            <a href="#" className="default-btn">Download CV <i className="ti-download"></i></a>
                        </div>
                    </div>
                    <div className="col-md-5 sm-padding wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1000ms">
                        <div className="about-bg">
                            <Image src={data.avatar.url} alt="Avatar" width={500} height={650} />
                            <div className="dots"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}