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
          <figure>
            <img src="./../../../public/images/habiteo-image.png" alt="" />
            <p className="uppercase text-title">Habiteo</p>
            <p className="text text-sm">Site d'achat et de location des maisons</p>
            <a href="http://" className="textLink text-sm ml-20">Voir le site</a>

          </figure>

        </div>
        <div className=" project bg-slate-50 border-solid rounded-3xl shadow-lg">
          <figure>
            <img src="./../../../public/images/habiteo-image.png" alt="" />
            <p className="uppercase text-title">Megalo</p>
            <p className="text text-sm">Lorem ipsum dolor sit amet consectetur </p>
            <a href="http://" className="textLink text-sm ml-20">Voir le site</a>
          </figure>
        </div>

        <div className=" project bg-slate-50 border-solid rounded-3xl shadow-lg">
          <figure>
            <img src="./../../../public/images/habiteo-image.png" alt="" />
            <p className="uppercase text-title">Gang</p>
            <p className="text text-sm">Lorem ipsum dolor sit amet consectetur </p>
            <a href="http://" className="textLink text-sm ml-20">Voir le site</a>
          </figure>
        </div>
      </div>
      <div className="buttonVoirPlus">
        <a href="" > Voir Plus</a>
      </div>

    </section>
  );
}
