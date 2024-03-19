import React from "react";
import { SocialHandle } from "@/utils/schema";

export default function Footer({ socials }: { socials: SocialHandle[] }) {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>© 2024 Naven by <a href="https://themeforest.net/user/dynamiclayers" target="_blank">DynamicLayers</a></p>
                    </div>
                    <div className="col-sm-6">
                        <div className="footer-social text-right">
                            {
                                socials.map(item => (
                                    <React.Fragment key={item._id}>
                                        <a href={item.url}>
                                            <i className={`ti-${item.platform.toLowerCase()}`}></i>
                                        </a>
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
