import ButtonGeneral from "../primaryComponents/buttonGeneral";
import ProfilPicture from "./../../../public/images/TroisiemeProfil.png";
export default function HeroSection() {
  return (
    <div className="hero-section flex h-screen ">
      <div className="w-2/6 mx-auto ">
        <div className="mt-16">
          <p className=" text-2xl">Salut, Je suis Edouard</p>
          <h1 className="text-blue-800 font-bold text-7xl">
            <span className="flex text-slate-950">Développeur</span> Full Stack
          </h1>
          <p className=" text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Tempore eius sit, ratione explicabo adipisci natus ipsum ullam.{" "}
          </p>
        </div>
        <ButtonGeneral value="Entrez en contact" className="bg-blue-800 text-white hover:bg-transparent hover:text-blue-800 hover:border-blue-800 font-semibold  py-3 px-4 mt-8 border border-white rounded"/>
      </div>
      <div className=" w-2/5 mt-16">
        <img src={ProfilPicture} alt="Mon Profil" />
      </div>
    </div>
  );
}
