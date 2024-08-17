import Avatar from "./primaryComponents/avatar";

export default function Footer() {
  return (
    <footer className="text-center">
      <div className="footer-avatar">
        <figure className=" h-[20vh]  mx-auto my-auto">
          <Avatar />
        </figure>
        <q className="font-bold"> Le plus difficile est la décision d'agir, le reste n'est que ténacité</q>
      </div>
      <div className="w-[20%] mt-8 flex gap-2 mx-auto my-auto">
        <h5 className="font-bold">Nakasila Edouard</h5>
        <p>© 2024 Tout droit réservé</p>
      </div>
    </footer>
  );
}
