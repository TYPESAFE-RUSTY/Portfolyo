import { SocialHandle } from "@/utils/schema";

export default function Hero({ name, socials }: { name: string, socials: SocialHandle[] }) {
    return (
        <header className="hero-section d-flex align-items-center bd-bottom" id="home" data-scroll-index="0">
            <div className="container">
                <div className="hero-content text-center">
                    <h4>Hello! I&apos;M</h4>
                    <h1>{name}</h1>
                    <h2>I&apos;m <span className="typed"></span></h2>
                </div>
                <ul className="hero-social">
                    {
                        socials.map(item => (
                            <li key={item._id}>
                                <a href={item.url} aria-label={item.platform}>
                                    <i className={`ti-${item.platform.toLowerCase()}`}></i>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}
