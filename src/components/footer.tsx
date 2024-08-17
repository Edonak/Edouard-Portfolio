import Avatar from "./primaryComponents/avatar";

export default function Footer() {
  return (
    <footer className="mx-auto my-auto text-center">
      <div>
        <figure className="mx-auto my-auto">
          <Avatar />
        </figure>
        <q className="font-bold"> Le plus difficile est la décision d'agir, le reste n'est que ténacité</q>
      </div>
      <div className=" mt-8 gap-2 mx-auto my-auto footer-bottom">
        <h5 className="font-bold">Nakasila Edouard</h5>
        <p>© 2024 Tout droit réservé</p>
      </div>
    </footer>
  );
}
