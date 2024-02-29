export default function Contacts() {
  return (
    <section className="">
      <div className="mx-auto my-auto">
        <p className="text-center uppercase font-bold text-3xl text-blue-800">
          {" "}
          *** Nous Contacter
        </p>
        <h2 className="text-center font-semibold text-xl">Mes Expériences</h2>
      </div>
      <div className="">
        <form action="" method="get">
          <div>
            <label htmlFor="">Votre Nom</label>
          <input type="text" name="" id=""  value="ex: Edouard Nakasila"/>
          </div>
          <div>
            <label htmlFor="">Votre Email</label>
          <input type="email" name="" id=""  value="ex: exemple@exemple.com"/>
          </div>
          <input type="button" value="Envoyer" />
        </form>
      </div>
    </section>
  );
}
