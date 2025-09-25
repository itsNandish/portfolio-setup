import { AboutMe } from "../components/AboutMe.jsx"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/NavBar"
import { StarBackground } from "../components/StartBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { ExperienceSection } from "../components/ExperienceSection.jsx"
import { Skills } from "../components/Skills-Section.jsx"
import { ProjectSection } from "../components/ProjectSection.jsx"
import { ContactSection } from "../components/ContactSection.jsx"
import { Footer } from "../components/Footer.jsx"


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />

            {/* NavBar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutMe />
                <ExperienceSection />
                <Skills />
                <ProjectSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}