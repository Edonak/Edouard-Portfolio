import ButtonGeneral from "../primaryComponents/buttonGeneral";

export default function NavbarLink() {
  return (
    <div className="navbar-container flex">
      <ul className="flex gap-7 pt-6 text-slate-900 font-bold">
        <li className="hover:text-blue-800 cursor-pointer">Accueil</li>
        <li className="hover:text-blue-800 cursor-pointer">Projects</li>
        <li className="hover:text-blue-800 cursor-pointer">Temoignages</li>
        <li className="hover:text-blue-800 cursor-pointer">Contacter</li>
      </ul>
      <ButtonGeneral
        value="Entrez en Contact"
        className="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded mt-4 ml-6"
      />
    </div>
  );
}
