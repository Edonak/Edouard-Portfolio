import Contacts from "../components/contact"
import Footer from "../components/footer"
import HeroSection from "../components/herosection/heroSection"
import MyProjects from "../components/project/myProject"
import MySkills from "../components/mySkills/mySkills"
import Navbar from "../components/navbar/navbar"

export default function Home() {

  return (
    <>
    <Navbar />
    <HeroSection />
    <MySkills />
    <MyProjects />
    <Contacts />
    <Footer />
    </>
  )
}
