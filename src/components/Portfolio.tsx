import { Project as project } from "@/utils/schema";
import Image from "next/image";

function Project({ project }: { project: project }) {

    let classlist = ""

    // whitespace character in if statements are intentional as api data is inconsistent
    if (project.techStack.includes(" Nextjs ")) {
        classlist += " nextjs"
    }
    else {
        if (project.techStack.includes(" Mern ")) classlist += " mern reactjs"
        if (project.techStack.includes("Reactjs   ")) classlist += " reactjs"
    }

    return (
        <div className={`col-md-4 col-sm-6 padding-10 single-item${classlist}`}>
            <div className="portfolio-box">
                <Image src={project.image.url} alt={`snapshot-of-${project.title}`} width={640} height={640} />
                <div className="portfolio-content">
                    <h3>
                        <a className="img-popup" href={project.image.url} >{project.title}<span>{project.description}</span></a></h3>
                </div>
            </div>
        </div>
    )
}

export default function Portfolio({ projects }: { projects: project[] }) {
    return (
        <section id="portfolios" className="portfolio-section section-padding bd-bottom" data-scroll-index="4">
            <div className="container">
                <div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                    <h2>Work Portfolios</h2>
                </div>
                <div className="portfolio-wrapper">
                    <ul className="portfolio-filter text-center mb-30">
                        <li className="active" data-filter="*">All</li>
                        <li data-filter=".nextjs">Next JS</li>
                        <li data-filter=".reactjs">React JS</li>
                        <li data-filter=".mern">MERN</li>
                    </ul>
                    <div className="row portfolio-items">
                        {
                            projects.map(item => (
                                <Project key={item._id} project={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
