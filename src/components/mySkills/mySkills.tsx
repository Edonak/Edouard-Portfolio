import data from "../../data/data.json";

export default function MySkills() {
  return (
    <section className="mx-auto my-auto py-10" id="mySkills">
      <div className="mx-auto my-auto">
        <p className="text-center uppercase font-bold text-3xl text-blue-800">
          {" "}
          * Mes Skills
        </p>
        <h2 className="text-center font-semibold text-xl">Mes Expériences</h2>
      </div>
      <div className="flex flex-wrap w-[90%] justify-center mx-auto my-auto py-10 gap-20">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className=" w-[30%] h-[40vh] p-4 border-solid rounded-3xl  bg-slate-100 shadow-lg skills"
          >
            <div className="mx-auto my-auto text-center">
              <figure className="pl-6 pt-2">
                <img src={item.src} alt="products chain" />
              </figure>
              <div className="">
                <h3 className="text-blue-800 font-bold text-2xl">
                  {item.title}
                </h3>
                <ul>
                  <li>{item.competence1}</li>
                  <li>{item.competence2}</li>
                  <li>{item.competence3}</li>
                  <li>{item.competence4}</li>
                  <li>{item.competence5}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
