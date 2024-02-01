import data from "./../data/data.json";

export default function MySkills() {
    return (
        <section className='w w-11/12' id='mySkills'>
            <div className="">
                <p className=""> Mes Skills</p>
                <h2 className="">Mes Expériences</h2>
            </div>
            <div className="flex justify-center gap-8 bor">
                {data?.skills?.map((item, index)=>(
                <div key={index} className=" w-1/4 border-solid border-2 border-indigo-600 ">
                    <div className="">
                        <img src={item.src} alt="products chain"/>
                    </div> 
                    <div className="">
                        <h3 className="text-blue-800 font-bold text-2xl">{item.title}</h3>
                        <p className="">{item.description}</p>
                    </div>
                </div>
                ))
                }
            </div>
        </section>
    );
}