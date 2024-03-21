import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // or other appropriate package
// or other appropriate package
import ButtonGeneral from "./primaryComponents/buttonGeneral";
import GithubLogo from "./../../public/images/icons8-github.svg";
import LinkdinLogo from "./../../public/images/icons8-linkedin.svg";


interface ContactFormProps {}

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
    <section className=" h-[90vh] bg-slate-400">
      <div className="pt-10">
        <div className="">
          <div className="">
            <div className="bg-white relative flex shadow-lg w-[50%]  mx-auto my-auto h-[70vh] rounded-t-3xl  rounded-br-none">
              <div className="w-[60%] ">
                <form onSubmit={handleSubmit} className="">
                  <div className="rounded-none border-b border-gray-300 p-6 pb-9 pt-20 pl-10 pr-40 ">
                    <h3 className="text-black text-4xl tracking-wide font-bold mb-4">
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
                  </div>
                </form>
              
            </div>
            <div className="contact rounded-tr-3xl w-[40%] bg-black pt-14 pl-4">
              <h3 className="tracking-wide pb-6 text-center font-bold">Information Contact</h3>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-headset mr-4"></i>
                <p>+243 822 874 347</p>
                <p>+243 844 060 541</p>
              </div>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-envelope-open-text"></i>
                <span>nakasilaedouard@gmail.com</span>
              </div>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-map-marked-alt"></i>
                <span>
                  17B Bis, Viaza, Q/ Viaza Matete Kinshasa RDC
                </span>
              </div>
              <div className="">
                <div className="social-icons flex gap-7">
                <a
                  href="https://github.com/votre-nom-github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={GithubLogo} />
                </a>
                <a
                  href="https://www.linkedin.com/in/votre-nom-linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={LinkdinLogo}/>
                </a>
                <a href="mailto:votre-email@email.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
              <div className="contact rounded-tr-3xl w-[40%] bg-black pt-14 pl-4">
                <h3 className="tracking-wide pb-6 text-center font-bold">
                  Information Contact
                </h3>
                <div className="d-flex info_single align-items-center">
                  <i className="fas fa-headset mr-4"></i>
                  <p>+243 822 874 347</p>
                  <p>+243 844 060 541</p>
                </div>
                <div className="d-flex info_single align-items-center">
                  <i className="fas fa-envelope-open-text"></i>
                  <span>nakasilaedouard@gmail.com</span>
                </div>
                <div className="d-flex info_single align-items-center">
                  <i className="fas fa-map-marked-alt"></i>
                  <span>17B Bis, Viaza, Q/ Viaza Matete Kinshasa RDC</span>
                </div>
                <div className="">
                  <div className="social-icons flex gap-7">
                    <a
                      href="https://github.com/votre-nom-github"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={GithubLogo} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/votre-nom-linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={LinkdinLogo} />
                    </a>
                    <a href="mailto:votre-email@email.com">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

