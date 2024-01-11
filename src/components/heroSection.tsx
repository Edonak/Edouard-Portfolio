import ProfilPicture from "./../images/background ed 2.png";
export default function HeroSection() {
  return (
    <div className="flex h-5/6">
      <div className="w-2/4 mx-auto my-auto">
        <p className=" text-2xl">Salut, Je suis Edouard</p>
        <h1 className="text-blue-800 font-bold text-5xl">Développeur Full Stack</h1>
        <p  className=" text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius
          sit, ratione explicabo adipisci natus ipsum ullam.{" "}
        </p>
      </div>
      <div className=" w-2/5">
      <img src={ProfilPicture} alt="Mon Profil" />
      </div>
    </div>
  );
}
