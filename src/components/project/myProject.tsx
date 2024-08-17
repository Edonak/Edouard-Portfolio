import ButtonGeneral from "../primaryComponents/buttonGeneral";

export default function MyProject() {
  return (
    <section
      className="mx-auto my-auto py-5 bg-slate-100"
      id="myProjects"
    >
      <div className="mx-auto my-auto">
        <p className="text-center uppercase font-bold text-3xl text-blue-800 pt-8">
          ** Mes Projets
        </p>
        <h2 className="text-center font-semibold text-xl mb-8">
          Les projets sur lesquels j'ai travaillé
        </h2>
      </div>
      <div className="myProjectsContainer mx-auto my-auto py-5">
        <div className=" project bg-slate-50 border-solid rounded-3xl shadow-lg  ">
          <p className="text-center">Habiteo</p>
        </div>
        <div className=" project bg-slate-50 border-solid rounded-3xl shadow-lg">
          <p className="text-center">Megalo</p>
        </div>

        <div className=" project bg-slate-50 border-solid rounded-3xl shadow-lg">
          <p className="text-center">Gang</p>
        </div>
      </div>
      <a href="" className="buttonVoirPlus"> Voir Plus</a>
    </section>
  );
}
