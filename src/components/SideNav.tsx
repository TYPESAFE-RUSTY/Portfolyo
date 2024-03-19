import Image from "next/image"
import Link from "next/link"

export default function SideNav() {
    return (
        <div className="dl-fixed-sidebar dl-sidebar-left">
            <div className="dl-header-container">
                <div className="logo">
                    <h1>
                        <Link href="/">
                            <img src="/img/logo-light.png" alt="logo" />
                        </Link>
                    </h1>
                </div>
                <div className="dl-burger-menu">
                    <div className="dl-line-menu dl-line-half dl-first-line"></div>
                    <div className="dl-line-menu"></div>
                    <div className="dl-line-menu dl-line-half dl-last-line"></div>
                </div>
                <nav className="dl-menu-fixed">
                    <ul>
                        <li><a href="#home" data-scroll-nav="0">Home</a></li>
                        <li><a href="#services" data-scroll-nav="1">About Me</a></li>
                        <li><a href="#about" data-scroll-nav="2">Resume</a></li>
                        <li><a href="#services" data-scroll-nav="3">Services</a></li>
                        <li><a href="#portfolios" data-scroll-nav="4">Portfolios</a></li>
                        <li><a href="#reviews" data-scroll-nav="5">Reviews</a></li>
                        <li><a href="#contact" data-scroll-nav="6">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
