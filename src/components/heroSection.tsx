import ProfilPicture from "./../images/background ed 2.png";
export default function HeroSection() {
  return (
    <div className="flex h-screen bg-slate-100 ">
      <div className="w-2/4 mx-auto my-auto">
        <div className="mt-32">
          <p className=" text-2xl">Salut, Je suis Edouard</p>
          <h1 className="text-blue-800 font-bold text-7xl">
            <span className="flex text-slate-950">Développeur</span> Full Stack
          </h1>
          <p className=" text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Tempore eius sit, ratione explicabo adipisci natus ipsum ullam.{" "}
          </p>
        </div>
        <button type="button" className="bg-blue-800 text-white hover:bg-transparent hover:text-blue-800 hover:border-blue-800 font-semibold  py-3 px-4 mt-8 border border-white rounded">Entrez en contact</button>
      </div>
      <div className=" w-2/5">
        <img src={ProfilPicture} alt="Mon Profil" />
      </div>
    </div>
  );
}
