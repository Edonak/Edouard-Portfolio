import Avatar from "../primaryComponents/avatar";
import ButtonGeneral from "../primaryComponents/buttonGeneral";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfilPicture from "./../../../public/images/Sans_titre-removebg-preview.png";
import BlurImage from "./BlurImage";

export default function HeroSection() {
  return (
    <section className="hero-section h-[98vh] w-[100%]">
      <div className="flex w-[75%] justify-between mx-auto my-auto">
        <div className="avatar mt-6">
          <Avatar />
        </div>
        <div className="liens-reseau flex justify-center gap-4 mt-12">
          <a
            href="https://github.com/Edonak "
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/edouard-nakasila-a5a22a1b5/" target="_blank" className="text-blue-600 hover:text-blue-800"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="h-screen heroSectionContainer">
        <div className="heroSectionContainerText">
          <div className="">
            <p className=" text-2xl">Salut, Je suis Edouard</p>
            <h1 className="text-blue-800 font-bold">
              <span className="text-slate-950">Développeur</span> Full
              Stack
            </h1>
            <p className=" text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            </p>
          </div>

          <a
            href="./../doc/CV_2024-08-16_Edouard_NAKASILA ANAKEKA"
            download="Edouard Nakasila CV.pdf"
          >
            <ButtonGeneral
              value="Télécharger mon CV"
              className="buttonTelecharger bg-blue-800 text-white hover:bg-transparent hover:text-blue-800 hover:border-blue-800 font-semibold  py-3 px-4 mt-8 border border-white rounded"
            />
          </a>
        </div>
        <figure className=" heroSectionContainerImage">
        <BlurImage
          img={<img src={ProfilPicture} alt="Mon Profil" className="rounded-full" />}
        />
        </figure>
      </div>
    </section>
  );
}
