import FirstImage from './../../public/images/apple ordi.jpg';
import SecondImage from './../../public/images/pc doc.jpg';
export default function MyProjects() {
  return (
    <section className="mx-auto my-auto py-10 bg-blue-100 w-[100%] h-[60vh]" id="myprojects">
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
        <div className='w-[30%]'>
          <img src={FirstImage} alt="" className='rounded-3xl' />
        </div>
        <div className='w-[30%]'>
          <img src={SecondImage} alt="" className='rounded-3xl' />
        </div>
        <div className='w-[30%]'>
          <img src={SecondImage} alt="" className='rounded-3xl' />
        </div>
      </div>
    </section>
  );
}
