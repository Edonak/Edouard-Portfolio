import data from "../../data/data.json";
import ButtonGeneral from "../primaryComponents/buttonGeneral";

export default function MySkills() {
    return (
        <section className='mx-auto my-auto' id='mySkills'>
            <div className="">
                <p className=""> Mes Skills</p>
                <h2 className="">Mes Expériences</h2>
            </div>
            <div className="flex flex-wrap w-[90%] justify-center mx-auto my-auto gap-8 " >
                {data?.skills?.map((item, index)=>(
                <div key={index} className=" w-[35%] h-[40vh] border-solid border-2 border-indigo-600">
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
            <ButtonGeneral value="JIOSjhio" />
        </section>
    );
}