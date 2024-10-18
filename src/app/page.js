import AboutUs from "./components/AboutUs";
import AchievementSection from "./components/AchievementSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavbarComp from "./components/NavbarComp";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavbarComp/>
      <div className=" container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementSection />
        <AboutUs/>
        <ProjectSection/>
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
