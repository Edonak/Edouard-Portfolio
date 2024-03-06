
import ButtonGeneral from './primaryComponents/buttonGeneral'

export default function MyProject() {
  return (
    <section
    className="mx-auto my-auto py-10w-[100%] h-[70vh] bg-slate-100"
    id="myprojects"
  >
    <div className="mx-auto my-auto">
      <p className="text-center uppercase font-bold text-3xl text-blue-800">
       
        ** Mes Projets
      </p>
      <h2 className="text-center font-semibold text-xl mb-8">
        Les projets sur lesquels j'ai travaillé
      </h2>
    </div>
    <div className=" flex flex-wrap w-[80%] justify-center mx-auto my-auto py-10 gap-20">
      <div className=" project w-[25%] bg-slate-50 border-solid rounded-3xl shadow-lg  ">
         <p>Hello</p>
      </div>
      <div className=" project w-[25%] bg-slate-50 border-solid rounded-3xl shadow-lg">
        <p>Megalo</p>
          </div>
     
      <div className=" project w-[25%]  bg-slate-50 border-solid rounded-3xl shadow-lg">
         <p>Gang</p>
    </div>
    </div>
  </section>
  )
}

