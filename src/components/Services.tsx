import { Service as service } from '@/utils/schema'
import React from 'react'

const ICON_LIST = ["icon-genius", "icon-tools", "icon-search", "icon-linegraph", "icon-happy", "icon-gears"]
const LENGTH = ICON_LIST.length



function Service({ service, index }: { service: service, index: number }) {
    return (
        <div className="col-md-4 col-sm-6 sm-padding wow fadeInUp" data-wow-delay={`${200 * index + 200}ms`} data-wow-duration="1000ms">
            <div className="services-item">
                <i className={ICON_LIST[index % LENGTH]}></i>
                <h3>{service.name}</h3>
                <p>{service.desc} </p>
                <div className="dots"></div>
            </div>
        </div>
    )
}



export default function Services({ services }: { services: service[] }) {
    return (
        <section id="services" className="services-section section-padding bd-bottom" data-scroll-index="3">
            <div className="container">
                <div className="section-heading mb-40 text-center wow fadeInUp" data-wow-delay={"200ms"} data-wow-duration="1000ms">
                    <h2>Outstanding Services</h2>
                </div>
                <div className="row">
                    {
                        services.map((item, index) => (
                            <Service key={item._id} service={item} index={index} />
                        )
                        )
                    }
                </div>
            </div>
        </section>
    )
}
