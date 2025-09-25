import React from 'react'
import TitleHeader from "../components/HeroModels/TitleHeader.jsx";
import {techStackIcons} from "../constans/index.js";
import {useGSAP} from "@gsap/react";
import { gsap } from "gsap";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center'
            }
        });
    })
    return (
        <div id="skills" className="flex-center section-padding scroll-mt-32">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title=" My Preferred Tech Stack"
                    sub="🤝 The Skills I Bring to the Table"
                />

                <div className="tech-grid">
                    {techStackIcons.map((icon) => (
                        <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={icon} />
                                </div>
                                <div className="padding-x w-full">
                                    <p className="padding-x w-[10rem]">{icon.name}</p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
export default TechStack
