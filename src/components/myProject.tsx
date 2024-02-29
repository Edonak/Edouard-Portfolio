import { useState } from "react";
import FirstImage from "./../../public/images/apple ordi.jpg";
import SecondImage from "./../../public/images/pc doc.jpg";
import ButtonGeneral from "./primaryComponents/buttonGeneral";

export default function MyProjects() {
  const [showDetails, setShowDetails] = useState(false);
  const [detailProject, setDetailProject] = useState(false);
  const [detailsData, setDetailsData] = useState(false);

  const handleMouseOver = () => {
    setShowDetails(true);
  };

  const handleMouseOut = () => {
    setShowDetails(false);
  };
  const mouseOver = () => {
    setDetailProject(true);
  };

  const mouseOut = () => {
    setDetailProject(false);
  };
  const mouseOver2 = () => {
    setDetailsData(true);
  };

  const mouseOut2 = () => {
    setDetailsData(false);
  };
  return (
    <section
      className="mx-auto my-auto py-10 bg-blue-100 w-[100%] h-[70vh]"
      id="myprojects"
    >
      <div className="mx-auto my-auto">
        <p className="text-center uppercase font-bold text-3xl text-blue-800">
          {" "}
          * Mes Projets
        </p>
        <h2 className="text-center font-semibold text-xl mb-8">
          Les projets sur lesquels j'ai travaillé
        </h2>
      </div>
      <div className=" w-[80%] mx-auto my-auto flex gap-20">
        <div className="w-[30%] projet-container">
          <figure>
            <img
              src={FirstImage}
              alt=""
              className="rounded-3xl project-image"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </figure>
          {showDetails && (
            <div className="project-detail w-[23.2%] rounded-b-3xl">
              <h5>Title Project</h5>
              <p>Ceci est un paragraphe detaillant le Projet.</p>
              <ButtonGeneral value="Voir plus" 
              className="bg-blue-800 text-white hover:bg-transparent hover:text-blue-800 hover:border-blue-800 font-semibold  py-1 px-1 mt-1 border border-white rounded"/>
            </div>
          )}
        </div>
        <div className="w-[30%]">
          <figure>
            <img
              src={SecondImage}
              alt=""
              className="rounded-3xl project-image"
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            />
          </figure>
          {detailProject && (
            <div className="project-detail w-[23.2%] rounded-b-3xl">
              <h5>Title Project</h5>
              <p>Ceci est un paragraphe detaillant le Projet.</p>
              <ButtonGeneral value="Voir plus" 
              className="bg-blue-800 text-white hover:bg-transparent hover:text-blue-800 hover:border-blue-800 font-semibold  py-1 px-1 mt-1 border border-white rounded"/>
            </div>
          )}
        </div>
        <div className="w-[30%]">
          <figure>
            <img
              src={SecondImage}
              alt=""
              className="rounded-3xl project-image"
              onMouseOver={mouseOver2}
              onMouseOut={mouseOut2}
            />
          </figure>
          {detailsData && (
            <div className="project-detail w-[23.2%] rounded-b-3xl">
              <h5>Title Project</h5>
              <p>Ceci est un paragraphe detaillant le Projet.</p>
              <ButtonGeneral value="Voir plus" 
              className="bg-blue-800 text-white hover:bg-transparent hover:text-blue-800 hover:border-blue-800 font-semibold  py-1 px-1 mt-1 border border-white rounded"/>
            </div>
          )}
        </div>
      </div>
      <ButtonGeneral
        value="Voir Plus"
        className="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded mt-10 "
      />
    </section>
  );
}
