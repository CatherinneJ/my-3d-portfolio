import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    }
                }
            )
        })
        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 })

    }, []);
    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcase-layout">
                    {/* left-side */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src={import.meta.env.BASE_URL + 'images/project1.png'} alt="Slovakia" />
                        </div>
                        <div className="text-content">
                            <h2>Property Website</h2>
                            <p className="text-white-50 md:text-xl">
                                Tailwind responsive Property Website created with HTML and CSS.
                            </p>
                        </div>
                    </div>
                    {/* right-side */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="projects" ref={project2Ref}>
                            <div className="image-wrapper bg-[#a476db]">
                                <img src={import.meta.env.BASE_URL + 'images/project2.png'} alt="property" />
                                <h3>Responsive Website This is Slovakia </h3>
                                <h3>JavaScript Sony Dashboard App</h3>
                            </div>
                        </div>
                        <div className="projects" ref={project3Ref}>
                            <div className="image-wrapper bg-[#9f82c2]">
                                <img src={import.meta.env.BASE_URL + 'images/project3.png'} alt="Dashboard" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
