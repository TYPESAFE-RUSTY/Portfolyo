import { Skill as skill } from "@/utils/schema";

function Skill({ skill, index }: { skill: skill, index: number }) {
    return (
        <li className="col-md-6 skill-item">
            <h5>{skill.name}</h5>
            <div className="progress">
                <div className="progress-bar wow slideInLeft" data-wow-delay={`${index * 50}ms`} data-wow-duration="2000ms" role="progressbar" style={{ width: `${skill.percentage}%` }}>
                    <span>{skill.percentage}%</span>
                </div>
            </div>
        </li>
    )
}

export default function Resume({ skills }: { skills: skill[] }) {
    return (
        <section id="resume" className="resume-section section-padding bd-bottom" data-scroll-index="2">
            <div className="container">
                <div className="col-md-6 wow fadeInRight skill-wrap" data-wow-delay="200ms" data-wow-duration="1000ms">
                    <div className="section-heading mb-40">
                        <h2>Professional Skills</h2>
                    </div>
                </div>
                <div className="container wow fadeInRight skill-wrap" data-wow-delay="200ms" data-wow-duration="1000ms"></div>
                <ul className="row skill-items">
                    {
                        skills.map((item, index) => {
                            if (index > 10) return
                            return <Skill key={item._id} skill={item} index={index} />
                        })
                    }
                    <li className="col-md-6 skill-item">
                        <h5>Photoshop</h5>
                        <div className="progress">
                            <div className="progress-bar wow slideInLeft" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{ width: "80%" }}>
                                <span>80%</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section >
    )
}
