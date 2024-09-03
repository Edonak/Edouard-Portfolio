export default function MyProject() {
  return (
    <section
      className="mx-auto my-auto py-5 bg-slate-100 myProjects"
      id="myProjects"
    >
      <div className="mx-auto my-auto myProjectsTitle">
        <p className="text-center uppercase font-bold text-blue-800 pt-8">
          ** Mes Projets
        </p>
        <h2 className="text-center font-semibold text-xl mb-8">
          Les projets sur lesquels j'ai travaillé
        </h2>
      </div>
      <div className="myProjectsContainer mx-auto my-auto py-5">
        <div className="project bg-slate-50 border-solid rounded-3xl shadow-lg  ">
          <p className="uppercase text-title">Habiteo</p>
          <p className="text mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reiciendis expedita vel! Accusantium, exercitationem officiis!</p>
          <a href="http://" className="textLink">Voir le site</a>
          </div>
        <div className=" project bg-slate-50 border-solid rounded-3xl shadow-lg">
          <p className="uppercase text-title">Megalo</p>
          <p className="text mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reiciendis expedita vel! Accusantium, exercitationem officiis!</p>
          <a href="http://" className="textLink">Voir le site</a>
          </div>

        <div className=" project bg-slate-50 border-solid rounded-3xl shadow-lg">
          <p className="uppercase text-title">Gang</p>
          <p className="text mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reiciendis expedita vel! Accusantium, exercitationem officiis!</p>
          <a  href="http://" className="textLink">Voir le site</a>
        </div>
      </div>
      <div className="buttonVoirPlus">
      <a href="" > Voir Plus</a>
      </div>
      
    </section>
  );
}
