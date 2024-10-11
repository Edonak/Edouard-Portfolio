
import React, { useState } from "react";
import ButtonGeneral from "./primaryComponents/buttonGeneral";

interface ContactFormProps { }

const ContactForm: React.FC<ContactFormProps> = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Traitez la soumission du formulaire ici (envoi de données, etc.)
    console.log(formData);
  };
  return (
    <section className="bg-slate-200 containerFormulaire">
      <div className="formContainerDoc">
        <div className="formContainer bg-white relative flex shadow-lg mx-auto my-auto">
          <form onSubmit={handleSubmit} className="formulaire rounded-none border-b border-gray-300 pl-10 pr-40 ">
            <h3 className="text-black text-2xl tracking-wide font-bold mb-4">
              Me Contacter
            </h3>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded-none border-b border-gray-300 p-3 w-[100%] outline-none"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="rounded-none border-b border-gray-300 p-3 w-[100%] outline-none"
                placeholder="Votre adresse email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                className="rounded-none border-b border-gray-300 p-3  w-[100%] outline-none"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <ButtonGeneral
              value="Envoyer"
              className="contact_form_submit w-[100%] text-white hover:bg-transparent hover:text-blue-800 hover:border-blue-800 font-semibold  py-3 px-4 mt-8 border border-white rounded-full"
            />
          </form>
          <figure className="contact bg-black ">
            <img src="images/nak2.jpg" alt=""/>
          </figure>
        </div>
      </div>
    </section>
  );
}
export default ContactForm;