import ProfilPicture from "./../images/TroisiemeProfil.png";
import ButtonGeneral from "./ActionButton/buttonGeneral";
export default function HeroSection() {
  return (
    <div className="hero-section flex h-screen ">
      <div className="w-2/6 mx-auto ">
        <div className="mt-16">
          <p className=" text-2xl" data-aos="fade-right">
            Salut, Je suis Edouard
          </p>
          <h1
            className="text-blue-800 font-bold text-7xl"
            data-aos="fade-down-right"
          >
            <span className="flex text-slate-950">Développeur</span> Full Stack
          </h1>
          <p
            className=" text-xl"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Tempore eius sit, ratione explicabo adipisci natus ipsum ullam.{" "}
          </p>
        </div>
        <ButtonGeneral content="Entrez en Contact"  className="bg-blue-800 text-white hover:bg-transparent hover:text-blue-800 hover:border-blue-800 font-semibold  py-3 px-4 mt-8 border border-white rounded" />
        <button
          type="button"
          className="bg-blue-800 text-white hover:bg-transparent hover:text-blue-800 hover:border-blue-800 font-semibold  py-3 px-4 mt-8 border border-white rounded"
        >
          Entrez en contact
        </button>
      </div>
      <div className=" w-2/5 mt-16 rounded-full">
        <img
          src={ProfilPicture}
          alt="Mon Profil"
          data-aos="zoom-in"
          className="rounded-full "
        />
      </div>
    </div>
  );
}
