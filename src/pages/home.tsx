import HeroSection from "../components/herosection/heroSection"
import MyProjects from "../components/myProject"
import MySkills from "../components/mySkills/mySkills"
import Navbar from "../components/navbar/navbar"

export default function Home() {

  return (
    <>
    <Navbar />
    <HeroSection />
    <MySkills />
    <MyProjects />
    </>
  )
}
