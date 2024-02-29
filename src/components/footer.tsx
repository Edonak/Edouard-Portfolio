import Avatar from "./primaryComponents/avatar";

export default function Footer() {
  return (
    <footer className="mx-auto my-auto text-center">
      <div>
        <div className="w-[10%]  h-[20vh]  mx-auto my-auto">
          <Avatar />
        </div>
        <q className="font-bold"> On devient naturel à force d’expérience.</q>
      </div>
      <div className="mt-8 flex gap-2">
        <h5>Nakasila Edouard / Black Ninja</h5>
        <p>© 2024 Tout droit réservé</p>
      </div>
    </footer>
  );
}
