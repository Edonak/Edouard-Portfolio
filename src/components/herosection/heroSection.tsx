import Avatar from "../primaryComponents/avatar";
import ButtonGeneral from "../primaryComponents/buttonGeneral";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfilPicture from "./../../../public/images/Sans_titre-removebg-preview.png";

export default function HeroSection() {
  return (
    <div className="hero-section h-[100vh] ">
      <div className="flex w-[75%] justify-between mx-auto my-auto">
        <div className="avatar mt-6">
          <Avatar />
        </div>
        <div className="liens-reseau flex justify-center gap-4 mt-12">
        <FaGithub  />
        <FaLinkedin  />
        </div>
      </div>
      <div className="flex h-screen">
      <div className="w-2/6 mx-auto ">
        <div className="">
          <p className=" text-2xl">Salut, Je suis Edouard</p>
          <h1 className="text-blue-800 font-bold text-7xl">
            <span className="flex text-slate-950">Développeur</span> Full Stack
          </h1>
          <p className=" text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Tempore eius sit, ratione explicabo adipisci natus ipsum ullam.{" "}
          </p>
        </div>
        <ButtonGeneral
          value="Télécharger mon CV"
          className="bg-blue-800 text-white hover:bg-transparent hover:text-blue-800 hover:border-blue-800 font-semibold  py-3 px-4 mt-8 border border-white rounded"
        />
      </div>
      <figure className=" w-2/5 ">
        <img src={ProfilPicture} alt="Mon Profil"  className="rounded-full"/>
      </figure>
      </div>
      
    </div>
  );
}
