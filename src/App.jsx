import Hero from './sections/Hero.jsx';
import AboutCards from "./sections/AboutCards.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/Navbar.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";


const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ShowcaseSection />
            <AboutCards />
            <ExperienceSection />
            <TechStack />
            <Contact />
            <Footer />

        </>
    )

}

export default App