export default function NavbarLink() {
  return (
    <div className='navbar-container flex'>
      <ul className='flex gap-7 pt-6 text-slate-900 font-bold'>
        <li className='hover:text-blue-800 cursor-pointer'>Accueil</li>
        <li className='hover:text-blue-800 cursor-pointer'>Projects</li>
        <li className='hover:text-blue-800 cursor-pointer'>Temoignages</li>
        <li className='hover:text-blue-800 cursor-pointer'>Contacter</li>
      </ul>
    </div>
  )
}
