import React, { useState } from "react";
import ButtonGeneral from "./primaryComponents/buttonGeneral";

interface FormData {
  nom: string;
  email: string;
  message: string;
}

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Envoyer les données du formulaire à votre API ou serveur

    console.log(formData);
    // Réinitialiser le formulaire
    setFormData({
      nom: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className=" bg-slate-600 w-[100%] h-[80vh]">
      <div className="">
        <p className="text-center uppercase font-bold text-3xl text-blue-800">
          {" "}
          *** Nous Contacter
        </p>
        <h2 className="text-center font-semibold text-xl">Mes Expériences</h2>
      </div>
      <div className="Form-container flex w-[50%] h-[60vh] mx-auto my-auto bg-slate-400">
      <form onSubmit={handleSubmit} className=" w-[70%] p-8">
        <div className="flex gap-16">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-16 mt-6">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-16 mt-6">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <ButtonGeneral value="Envoyer" />
      </form>
      <div className=" w-[20%]">
        <ul>
          <li>12</li>
          <li>22</li>
          <li>34</li>
          <li>44</li>
        </ul>
      </div>
      </div>
    </section>
  );
};
export default Contacts;
