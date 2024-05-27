import Contacts from "../components/contact"
import Footer from "../components/footer"
import HeroSection from "../components/herosection/heroSection"
import MyProjects from "../components/project/myProject"
import MySkills from "../components/mySkills/mySkills"

export default function Home() {

  return (
    <>
    <HeroSection />
    <MySkills />
    <MyProjects />
    <Contacts />
    <Footer />
    </>
  )
}
