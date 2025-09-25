import { abilities } from "../constans/index.js";

const AboutCards = () => {
    return (
        <section id="about" className="w-full padding-x-lg scroll-mt-32">
            <div className="mx-auto grid-3-cols ">
                {abilities.map(({imgPath, title, desc}) => (
                    <div key={title} className="card-border border-2 border-indigo-500 rounded-xl p-8 flex flex-col gap-4 ">
                        <div className="size-24 flex items-center justify-center rounded-full overflow-hidden mx-auto bg-black-200">
                            <img src={imgPath} alt={title} className="w-full h-full object-cover"/>
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2 text-center">{title}</h3>
                        <p className="text-white-50 text-lg text-center">{desc}</p>
                    </div>
                ))}
            </div>
            {/* Resume button center */}
            <div className="flex justify-center pt-10 padding-x">
                <a
                    href="/documents/CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button group w-50  "
                >
                    <div className="bg-circle" />
                    <p className="text">Resume</p>
                    <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                </a>
            </div>
        </section>
    )
}
export default AboutCards
