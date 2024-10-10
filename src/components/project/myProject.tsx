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
      <div className="myProjectsContainer">
        <div className="project bg-slate-50 border-solid rounded-3xl shadow-lg  ">
          <figure>
            <img src="./../../../public/images/habiteo.png" alt="" />
            <p className="uppercase text-title">Habiteo</p>
            <p className="text text-sm mb-6">Site d'achat et de location des maisons</p>
            <a href="https://habiteo-git-develop-edouard-nakasilas-projects.vercel.app/" className="textLink text-sm">Voir le site</a>
          </figure>
        </div>
        <div className="project bg-slate-50 border-solid rounded-3xl shadow-lg">
          <figure>
            <img src="./../../../public/images/habiteo.png" alt="" />
            <p className="uppercase text-title">Meg</p>
            <p className="text text-sm mb-6">Site web de l'église Mission Evangélique Galilée </p>
            <a href="http://" className="textLink text-sm">Voir le site</a>
          </figure>
        </div>

        <div className=" project bg-slate-50 border-solid rounded-3xl shadow-lg">
          <figure>
            <img src="./../../../public/images/habiteo.png" alt="" />
            <p className="uppercase text-title">Gang</p>
            <p className="text text-sm mb-6">Lorem ipsum dolor sit amet consectetur </p>
            <a href="http://" className="textLink text-sm">Voir le site</a>
          </figure>
        </div>
      </div>
      <div className="buttonVoirPlus bg-blue-800 text-white hover:bg-transparent hover:text-blue-800 hover:border-blue-800 font-semibold border border-white rounded">
        <a href="" > Voir Plus</a>
      </div>

    </section>
  );
}
